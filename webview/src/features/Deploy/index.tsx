
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../icons/ArrowLeft";
import { useEffect, useState } from "react";
import { AptosIcon } from "../../icons/AptosIcon";
import { FoundryIcon } from "../../icons/FoundryIcon";
import FileUpload from "../../components/FileUpload";
import { OrbitProgress } from "react-loading-indicators";

//@ts-ignore
import { messageHandler, Messenger } from '@estruyf/vscode/dist/client';
//@ts-ignore
import { EventData } from "@estruyf/vscode/dist/models/EventData";
//@ts-ignore
import axios from "axios";

const Deploy = () => {
    //@ts-ignore
    const [accAddr, setAccAddr] = useState<string>('');
    //@ts-ignore
    const [wallet, setWallet] = useState('');
    //@ts-ignore
    const [privatekey, setPrivateKey] = useState('');
    const [walletError, setWalletError] = useState('');
    const [accountError, setAccountError] = useState('');
    const [keyError, setKeyError] = useState('');
    //@ts-ignore
    const [loading, setLoading] = useState(false); // For button loading state
    //@ts-ignore
    const [apiError, setApiError] = useState('');  // To show any API errors

    const [file, setFile] = useState<File | null>(null);
    //@ts-ignore
    const [fileName, setFileName] = useState<string | null>(null);
    //@ts-ignore
    const [modName, setModName] = useState('');
    //@ts-ignore
    const [data, setdata] = useState<{ file: File | null; privateKey: string; rpcUrl: string }>({
        file: new File([], ''),
        privateKey: '',
        rpcUrl: '',
    });
    //@ts-ignore
    const [responseData, setResponseData] = useState(null);

    const [selectedNetwork, setSelectedNetwork] = useState<string>('https://mevm.devnet.imola.movementlabs.xyz');

    const location = useLocation();
    const page = location.state?.page;
    const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNetwork(e.target.value);
        console.log(e.target.value);
    };

    const getBaseUrl = () => {
        if (page === 'aptos') {
            return selectedNetwork === 'https://aptos.testnet.suzuka.movementlabs.xyz/v1'
                ? 'https://aptos.testnet.suzuka.movementlabs.xyz/v1'
                : 'https://devnet.suzuka.movementnetwork.xyz/v1'; // URL cho mạng devnet
        } else {
            return selectedNetwork === 'https://mevm.devnet.imola.movementlabs.xyz'; // URL cho Foundry
        }
    };
    //@ts-ignore
    const baseUrl = getBaseUrl();

    const handleAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAccountError('');
        if (value.length <= 64) {
            setAccAddr(e.target.value);
        } else if (value.length !== 64) {
            setWalletError('Input must be exactly 64 characters long');
        }
    }
    const handlePressAccount = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/^[0-9a-fA-F]*$/.test(e.key)) {
            e.preventDefault();
            setAccountError('Only hexadecimal characters are allowed.');
        }
    };

    const handleWallet = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setWalletError('');

        // Kiểm tra địa chỉ ví
        if (
            (value.length === 2 && value === '0x') ||
            (value.startsWith('0x') && /^[0-9a-fA-F]{40}$/.test(value.slice(2)))
        ) {
            setWallet(value);
            setWalletError('');
        } else {
            if (!value.startsWith('0x')) {
                setWalletError('Input must start with "0x".');
            } else if (page === 'aptos' && value.startsWith('0x') && value.length !== 66 || page === 'foundry' && value.startsWith('0x') && value.length !== 42) {
                setWalletError(`${page === 'aptos' ? 'Input must be exactly 66 characters long.' : 'Input must be exactly 42 characters long.'}`);
            } else if (value.length > 2 && !/^[0-9a-fA-F]*$/.test(value.slice(2))) {
                setWalletError('Only hexadecimal characters are allowed.');
            }
        }
    };

    const handlePressWallet = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        if (value.startsWith('0x')) {
            if (!/^[0-9a-fA-F]*$/.test(e.key) && e.key !== 'Backspace') {
                e.preventDefault();
                setWalletError('Only hexadecimal characters are allowed after "0x".');
            }
        } else {
            if (value.length === 0 && e.key !== '0') {
                e.preventDefault();
                setWalletError('Input must start with "0x".');
            } else if (value.length === 1 && e.key !== 'x') {
                e.preventDefault();
                setWalletError('Input must start with "0x".');
            }
        }
    };

    const handleKey = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setKeyError('');
        if (page === 'aptos') {
            // Kiểm tra địa chỉ ví
            if (
                (value.length === 2 && value === '0x') ||
                (value.startsWith('0x') && /^[0-9a-fA-F]{40}$/.test(value.slice(2)))
            ) {
                setPrivateKey(value);
                setKeyError('');
            } else {
                if (!value.startsWith('0x')) {
                    setKeyError('Input must start with "0x".');
                } else if (value.startsWith('0x') && value.length !== 66) {
                    setKeyError('Input must be exactly 66 characters long.');
                } else if (value.length > 2 && !/^[0-9a-fA-F]*$/.test(value.slice(2))) {
                    setKeyError('Only hexadecimal characters are allowed.');
                }
            }
        } else {
            if (value.length <= 64) {
                setPrivateKey(e.target.value);
                setKeyError('');
            } else if (value.length !== 64) {
                setKeyError('Input must be exactly 64 characters long');
            }
        }

    };

    const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (page === 'aptos') {
            if (value.startsWith('0x')) {
                if (!/^[0-9a-fA-F]*$/.test(e.key)) {
                    e.preventDefault();
                    setKeyError('Only hexadecimal characters are allowed after "0x".');
                }
            } else {
                if (value.length === 0 && e.key !== '0') {
                    e.preventDefault();
                    setKeyError('Input must start with "0x".');
                } else if (value.length === 1 && e.key !== 'x') {
                    e.preventDefault();
                    setKeyError('Input must start with "0x".');
                }
            }
        } else {
            if (!/^[0-9a-fA-F]*$/.test(e.key)) {
                e.preventDefault();
                setKeyError('Only hexadecimal characters are allowed.');
            }
        }

    };


    const handleModName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModName(e.target.value);
    }
    Messenger.getVsCodeAPI();
    //@ts-ignore
    const handleDeploy = () => {
        messageHandler.request<any>("GET_DATA").then((data) => {
            // Do something with the returned data
            console.log(data);
            setApiError(data);
        });
        messageHandler.request<string>('GET_DATA_ERROR')
            .then((msg) => {
                setApiError(msg);
            })
            .catch((err) => {
                setApiError(err);
            });

    }
    const listener = (message: MessageEvent<EventData<any>>) => {
        const event = message.data;
        console.log(event.command, event.payload);
    };
    Messenger.listen(listener);
    const [fetchQuote, setFetchQuote] = useState(false);
    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
            setLoading(true);
            setApiError('');
            try {
                // Tạo một đối tượng FormData
                const formData = new FormData();
                if (file) {
                    formData.append('file', file);
                } else {
                    throw new Error('No file selected for upload');
                }
                formData.append('privateKey', privatekey);
                formData.append('rpcUrl', selectedNetwork);

                // Gửi yêu cầu POST với FormData
                const response = await fetch('http://3.107.36.227:3000/upload/solidity', {
                    method: 'POST',
                    body: formData,
                    credentials: 'include',
                });

                // Nếu API yêu cầu GET để lấy trích dẫn, thì có thể không cần dùng FormData
                // Chỉ cần sử dụng fetch như bình thường
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Success', data);
                } else {
                    setApiError("check respone:" + response.status)
                    console.error('Failed to fetch quote:', response.status);
                }
            } catch (error) {
                console.error('Error during deployment:', error);
                if (error instanceof Error) {
                    if (privatekey === '') {
                        setApiError('Fill in the privateKey information');
                    } else {
                        setApiError(error.message || 'Failed to deploy');
                    }
                } else {
                    setApiError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        //     const response = await axios.post('http://3.107.36.227:3000/upload/solidity', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         },
        //         withCredentials: true,
        //     });

        //     if (response.status === 200) {
        //         const data = response.data;
        //         setResponseData(data);
        //     } else {
        //         console.error('Failed to fetch quote:', response.status);
        //         setApiError("" + response.status);
        //     }
        // } catch (error: unknown) {
        //     console.error('Error during deployment:', error);
        //     if (privatekey === '') {
        //         setApiError('Fill in the privateKey information');
        //     } else {
        //         if (error instanceof Error) {
        //         } else if (axios.isAxiosError(error) && error.response) {
        //             setApiError(error.response.data?.message || 'Failed to deploy');
        //         } else {
        //             setApiError('An unknown error occurred');
        //         }
        //     }
        // } finally {
        //     setLoading(false);
        // }
        // };

        if (fetchQuote) { // Chỉ fetch khi fetchQuote là true
            fetchData();
            setFetchQuote(false); // Reset lại để không fetch lại khi không cần thiết
        }
    }, [fetchQuote]);

    useEffect(() => {
        if (!file) {
            messageHandler.send("Get_File", { file: file });
        }
    }, [file])

    useEffect(() => {
        messageHandler.send("Get_privateKey", { privatekey: privatekey });
    }, [privatekey])

    useEffect(() => {
        messageHandler.send("Get_rpcUrl", { rpcUrl: selectedNetwork });
    })
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/${page}`);
    };

    return (
        <>
            <div className="h-[300vh] grow overflow-y-scroll">
                <div className="absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]">
                    <div className="flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0">
                        <div
                            className="flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]"
                            onClick={handleNavigate}>
                            <ArrowLeft className="!relative !w-[24px] !h-[24px]" />
                            {page === 'aptos' ? <AptosIcon className="!relative !w-[24px] !h-[24px] bg-white rounded-xl" /> : <FoundryIcon className="!relative !w-[24px] !h-[24px] bg-white rounded-xl" />}
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase">
                                Deploy {page}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[24px] my-5 w-full ">
                            <div>
                                <FileUpload file={file} setFile={setFile} page={page} setFileName={setFileName} />
                            </div>
                            <div>
                                <label
                                    className=" block text-white text-xl font-semibold mb-2 text-gray-700"
                                >Wallet Address</label>
                                <input
                                    className={`w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] `}
                                    type="text"
                                    onChange={handleWallet}
                                    onKeyPress={handlePressWallet}
                                    maxLength={page === 'aptos' ? 66 : 42}
                                />
                                {walletError && <p className="text-red-500">{walletError}</p>}
                            </div>
                            <div className={`${page === 'aptos' ? '' : 'hidden'}`}>
                                <label
                                    className=" block text-white text-xl font-semibold mb-2 text-gray-700"
                                >Module Name</label>
                                <input
                                    className={`w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] `}
                                    type="text"
                                    onChange={handleModName}
                                    disabled={page === 'aptos' ? false : true}

                                />
                            </div>
                            <div className={`${page === 'aptos' ? '' : 'hidden'}`}>
                                <label
                                    className=" block text-white text-xl font-semibold mb-2 text-gray-700"
                                >Account Address</label>
                                <input
                                    className={` w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] `}
                                    type="text"
                                    onChange={handleAccount}
                                    onKeyPress={handlePressAccount}
                                    maxLength={64}
                                />
                                {accountError && <p className="text-red-500">{accountError}</p>}
                            </div>

                            <div>
                                <label
                                    className=" block text-white text-xl font-semibold mb-2 text-gray-700"
                                >Private Key</label>
                                <input
                                    className={`w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] `}
                                    type="text"
                                    onChange={handleKey}
                                    onKeyPress={handlePressKey}
                                    maxLength={page === 'aptos' ? 66 : 64}
                                />
                                {keyError && <p className="text-red-500">{keyError}</p>}
                            </div>
                            <div>
                                {page === 'aptos' && (
                                    <>
                                        <label htmlFor="network" className="block text-xl text-white font-semibold mb-2 text-gray-700">
                                            Select Network
                                        </label>
                                        <select
                                            id="network"
                                            value={selectedNetwork}
                                            onChange={handleNetworkChange}
                                            className="w-full px-5 py-4 text-[#8f8f8f] text-[17px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]"
                                        >
                                            <option value="https://aptos.testnet.suzuka.movementlabs.xyz/v1" className="bg-white text-[#8f8f8f]">
                                                https://aptos.testnet.suzuka.movementlabs.xyz/v1
                                            </option>
                                            <option value="https://devnet.suzuka.movementnetwork.xyz/v1" className="bg-white text-[#8f8f8f]">
                                                https://devnet.suzuka.movementnetwork.xyz/v1
                                            </option>
                                        </select>
                                    </>
                                )}
                                {page === 'foundry' && (
                                    <>
                                        <label htmlFor="network" className="block text-xl text-white font-semibold mb-2 text-gray-700">
                                            Select Network
                                        </label>
                                        <select
                                            id="network"
                                            value={selectedNetwork}
                                            onChange={handleNetworkChange}
                                            className="w-full px-5 py-4 text-[#8f8f8f] text-[17px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]"
                                        >
                                            <option value="" disabled>Select a network</option>
                                            <option value="https://mevm.devnet.imola.movementlabs.xyz" className="bg-white text-[#8f8f8f]">
                                                https://mevm.devnet.imola.movementlabs.xyz
                                            </option>
                                        </select>
                                    </>
                                )}
                            </div>
                            <div className="mt-5">
                                <button
                                    className={`w-full px-5 py-4 mt-4 text-white text-[18px] rounded-lg ${loading ? 'bg-gray-500' : 'bg-blue-500'} `}
                                    onClick={() => { setFetchQuote(true) }}
                                    // onClick={handleDeploy}
                                    disabled={loading}>
                                    {loading ? <OrbitProgress color="#7d9cd9" size="small" text="" textColor="" /> : 'Deploy'}
                                </button>

                                {apiError && <p className="text-red-500 mt-2">{apiError}</p>}

                                {responseData && (
                                    <div className="mt-4 p-4 border border-gray-300 rounded text-white">
                                        <h3 className="font-semibold text-white">Response Data:</h3>
                                        <pre className="text-white">{JSON.stringify(responseData, null, 2)}</pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Deploy;