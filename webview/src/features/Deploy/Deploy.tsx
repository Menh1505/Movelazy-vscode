
import { useNavigate, useOutletContext } from "react-router-dom";
import { ArrowLeft } from "../../icons/ArrowLeft";
import { useState } from "react";

const Deploy = () => {
    //@ts-ignore
    const [isValid, setIsValid] = useState<boolean>(true);
    //@ts-ignore
    const [accAddr, setAccAddr] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedNetwork, setSelectedNetwork] = useState<string>('testnet');

    const { currentPage } = useOutletContext<{ currentPage: string }>();
    const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNetwork(e.target.value);
    };

    const getBaseUrl = () => {
        if (currentPage === 'aptos') {
            return selectedNetwork === 'testnet'
                ? 'https://aptos.testnet.suzuka.movementlabs.xyz/v1'
                : 'https://devnet.suzuka.movementnetwork.xyz/v1'; // URL cho mạng devnet
        } else if (currentPage === 'foundry') {
            return 'https://mevm.devnet.imola.movementlabs.xyz'; // URL cho Foundry
        }
        return ''; // Trả về chuỗi rỗng nếu không tìm thấy
    };

    const baseUrl = getBaseUrl();
    //@ts-ignore
    const [number, setNumber] = useState<number | string>('');

    const handleAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setErrorMessage('');
        if ((value.length === 2 && value === '0x') ||
            (value.startsWith('0x') && /^[0-9a-fA-F]*$/.test(value.slice(2)) && value.length <= 66)) {
            setAccAddr(value);
            setErrorMessage('');
        } else {
            if (value.length === 66) {
                setErrorMessage('Input must be exactly 66 characters long');
            } else if (!value.startsWith('0x') && value.length > 0) {
                setErrorMessage('Input must start with "0x".');
            } else {
                setErrorMessage('Only hexadecimal characters are allowed.');
            }
        }
    }
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/^[0-9a-fA-F]*$/.test(e.key) && e.key !== 'x' && e.key !== '0') {
            e.preventDefault();
            setErrorMessage('Only hexadecimal characters are allowed.');
        }
    };
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/${currentPage}`);
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
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase">
                                Deploy
                            </div>
                        </div>
                        <div className="flex flex-col gap-[24px] my-5 w-full ">
                            <div>
                                <label
                                    className=" block text-white text-xl font-semibold mb-2 text-gray-700"
                                >Account Address</label>
                                <input
                                    className={`w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] `}
                                    type="text"
                                    onChange={handleAccount}
                                    onKeyPress={handleKeyPress}
                                />
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                            </div>

                            <div>
                                <label
                                    className=" block text-white text-xl font-semibold mb-2 text-gray-700"
                                >Private Key</label>
                                <input
                                    className={`w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] `}
                                    type="text"
                                    onChange={handleAccount}
                                    onKeyPress={handleKeyPress}
                                />
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                            </div>
                            <div>
                                <h1>{currentPage === 'aptos' ? 'Aptos Component' : 'Foundry Component'}</h1>
                                {currentPage === 'aptos' && (
                                    <>
                                        <label htmlFor="network" className="block text-xl text-white font-semibold mb-2 text-gray-700">
                                            Select Network
                                        </label>
                                        <select
                                            id="network"
                                            value={selectedNetwork}
                                            onChange={handleNetworkChange}
                                            className="w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]"
                                        >
                                            <option value="https://aptos.testnet.suzuka.movementlabs.xyz/v1" className="bg-white text-[#8f8f8f]">
                                                https://aptos.testnet.suzuka.movementlabs.xyz/v1
                                            </option>
                                            <option value="https://aptos.testnet.suzuka.movementlabs.xyz/v1" className="bg-white text-[#8f8f8f]">
                                                https://devnet.suzuka.movementnetwork.xyz/v1
                                            </option>
                                        </select>
                                    </>
                                )}
                                {currentPage === 'foundry' && (
                                    <p>The default URL for Foundry is: https://mevm.devnet.imola.movementlabs.xyz</p>
                                )}
                                <p>Base URL: {baseUrl}</p>
                                {/* Sử dụng baseUrl để thực hiện các yêu cầu */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Deploy;