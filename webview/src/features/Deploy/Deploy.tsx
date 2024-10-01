
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../icons/ArrowLeft";
import { useState } from "react";
import { AptosIcon } from "../../icons/AptosIcon";
import { FoundryIcon } from "../../icons/FoundryIcon";
import FileUpload from "../../components/FileUpload";

const Deploy = () => {
    //@ts-ignore
    const [accAddr, setAccAddr] = useState('');
    //@ts-ignore
    const [wallet, setWallet] = useState('');
    //@ts-ignore
    const [privatekey, setPrivateKey] = useState('');
    const [walletError, setWalletError] = useState('');
    const [accountError, setAccountError] = useState('');
    const [keyError, setKeyError] = useState('');

    const [file, setFile] = useState<File | null>(null);

    const [selectedNetwork, setSelectedNetwork] = useState<string>('testnet');

    const location = useLocation();
    const page = location.state?.page;
    const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNetwork(e.target.value);
    };

    const getBaseUrl = () => {
        if (page === 'aptos') {
            return selectedNetwork === 'testnet'
                ? 'https://aptos.testnet.suzuka.movementlabs.xyz/v1'
                : 'https://devnet.suzuka.movementnetwork.xyz/v1'; // URL cho mạng devnet
        } else if (page === 'foundry') {
            return 'https://mevm.devnet.imola.movementlabs.xyz'; // URL cho Foundry
        }
        return ''; // Trả về chuỗi rỗng nếu không tìm thấy
    };
    //@ts-ignore
    const baseUrl = getBaseUrl();
    //@ts-ignore
    const [number, setNumber] = useState<number | string>('');

    const handleAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAccountError('');
        if ((value.length === 2 && value === '0x') ||
            (value.startsWith('0x') && /^[0-9a-fA-F]*$/.test(value.slice(2)) && value.length <= 66)) {
            setAccAddr(e.target.value);
            setAccountError('');
        } else {
            if (!value.startsWith('0x') && value.length > 0) {
                setWalletError('Input must start with "0x".');
            } else if (value.length !== 66) {
                setWalletError('Input must be exactly 66 characters long');
            }
        }
    }
    const handlePressAccount = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/^[0-9a-wy-zA-WY-Z]*$/.test(e.key)) {
            e.preventDefault();
            setAccountError('Only hexadecimal characters are allowed.');
        }
    };

    const handleWallet = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setWalletError('');
        if ((value.length === 2 && value === '0x') ||
            (value.startsWith('0x') && /^[0-9a-fA-F]*$/.test(value.slice(2)) && value.length <= 66)) {
            setWallet(e.target.value);
            setWalletError('');
        } else {
            if (!value.startsWith('0x') && value.length > 0) {
                setWalletError('Input must start with "0x".');
            } else if (value.length !== 66) {
                setWalletError('Input must be exactly 66 characters long');
            }
        }
    }
    const handlePressWallet = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/^[0-9a-wy-zA-WY-Z]*$/.test(e.key)) {
            e.preventDefault();
            setWalletError('Only hexadecimal characters are allowed.');
        }
    };

    const handleKey = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setKeyError('');
        if ((value.length === 2 && value === '0x') ||
            (value.startsWith('0x') && /^[0-9a-fA-F]*$/.test(value.slice(2)) && value.length <= 66)) {
            setPrivateKey(e.target.value);
            setKeyError('');
        } else {
            if (!value.startsWith('0x') && value.length > 0) {
                setWalletError('Input must start with "0x".');
            } else if (value.length !== 66) {
                setWalletError('Input must be exactly 66 characters long');
            }
        }
    }
    const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/^[0-9a-wy-zA-WY-Z]*$/.test(e.key)) {
            e.preventDefault();
            setKeyError('Only hexadecimal characters are allowed.');
        }
    };

    const handleDeploy = async () => {
        // Validate inputs (wallet address, account, key, and file)
        if (!file || !wallet || !accAddr || !privatekey) {
            alert('Please fill out all required fields.');
            return;
        }

        try {
            // Example logic for deployment (you can replace this with your real deployment logic)
            const baseUrl = getBaseUrl();
            console.log("Deploying to:", baseUrl);
            console.log("Contract file:", file);
            // Call your deployment API here with the required parameters
            alert('Contract deployed successfully!');
        } catch (error) {
            console.error('Error deploying contract:', error);
            alert('Failed to deploy contract. Please try again.');
        }
    };
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
                                <FileUpload file={file} setFile={setFile} />
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
                                    maxLength={66}
                                />
                                {walletError && <p className="text-red-500">{walletError}</p>}
                            </div>
                            <div>
                                <label
                                    className=" block text-white text-xl font-semibold mb-2 text-gray-700"
                                >Account Address</label>
                                <input
                                    className={`w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] `}
                                    type="text"
                                    onChange={handleAccount}
                                    onKeyPress={handlePressAccount}
                                    maxLength={66}
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
                                    maxLength={66}
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
                                            className="w-full px-5 py-4 text-[#8f8f8f] text-[15px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]"
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
                                            className="w-full px-5 py-4 text-[#8f8f8f] text-[15px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]"
                                        >
                                            <option value="https://mevm.devnet.imola.movementlabs.xyz" className="bg-white text-[#8f8f8f]">
                                                https://mevm.devnet.imola.movementlabs.xyz
                                            </option>
                                        </select>
                                    </>
                                )}
                            </div>
                            <div className="mt-5">
                                <button onClick={handleDeploy} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                                    Deploy Contract
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Deploy;