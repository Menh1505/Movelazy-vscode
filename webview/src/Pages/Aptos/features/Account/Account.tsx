/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavigateTitle from "../../../../components/Aptos/Header";
const AccountBalance = () => {
    //@ts-ignore
    const [balance, setBalance] = useState<string>(() => localStorage.getItem('balance') || '0');

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/aptos`);
    };


    return (
        <>
            <div className="h-[300vh] grow overflow-y-scroll">
                <div className="absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]">
                    <div className="flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0">
                        <NavigateTitle handleNavigate={handleNavigate} title={`Account Balance Aptos`} />
                        <div className="flex flex-col gap-[24px] my-5 w-full ">
                            <div>
                                <label htmlFor="coin"
                                    className=" block text-xl text-white font-semibold mb-2"
                                >Asset Type</label>
                                <input
                                    className={`w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-white `}
                                    type="text"
                                    value="Coin"
                                    disabled
                                />
                            </div>

                            <div>
                                <label htmlFor="coin"
                                    className=" block text-xl text-white font-semibold mb-2"
                                >Coin Type</label>
                                <div
                                    className="w-full px-5 py-4 text-[#272727] text-[20px] border-2 border-[#5a5a5a] rounded-lg bg-white"
                                >
                                    Octas
                                </div>
                            </div>
                            <div >
                                <label
                                    className=" block text-white text-xl font-semibold mb-2 "
                                >Balance</label>
                                <input
                                    className={`w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-white `}
                                    type="text"
                                    max={10000000000}
                                    value={balance}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=" bg-blue-500 text-white font-bold py-2 px-4 rounded  cursor-pointer self-end"
                    onClick={() => { navigate("/deploy") }}>
                    Deploy
                </div>
            </div>
        </>
    );
}
export default AccountBalance;