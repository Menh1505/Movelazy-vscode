import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import InputWallet from "../../../../components/Foundry/InputWallet";
import NavigateTitle from "../../../../components/Foundry/Header";
import ButtonAccount from "../../../../components/Foundry/ButtonAccount";

const AddressFoundry = () => {
    const [walletAddress, setWalletAddress] = useState<string>(() => localStorage.getItem('walletAddress') || '');
    const [privatekey, setPrivateKey] = useState<string>(() => localStorage.getItem('privateKey') || '');
    const [publicKey, setPublicKey] = useState<string>(() => localStorage.getItem('publicKey') || '');
    const createAccount = () => {
        const wallet = ethers.Wallet.createRandom();
        const address = wallet.address;
        const privKey = wallet.privateKey.replace(/^0x/, '');
        const pubKey = wallet.publicKey;

        setWalletAddress(address);
        setPrivateKey(privKey);
        setPublicKey(pubKey);

        localStorage.setItem('walletAddress', address);
        localStorage.setItem('privateKey', privKey);
        localStorage.setItem('publicKey', pubKey);

    };


    useEffect(() => {
        const savedWalletAddress = localStorage.getItem('walletAddress') || '';
        const savedPrivateKey = localStorage.getItem('privateKey') || '';
        const savedPublicKey = localStorage.getItem('publicKey') || '';

        // Set state from localStorage if values exist
        setWalletAddress(savedWalletAddress);
        setPrivateKey(savedPrivateKey);
        setPublicKey(savedPublicKey);
    }, []);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/foundry`);
    };

    return (
        <>
            <div className="flex flex-wrap h-[300vh] grow overflow-y-scroll">
                <div className="absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]">
                    <div className="flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0">
                        <NavigateTitle handleNavigate={handleNavigate} title="Account Foundry" />
                        <div className="flex flex-col gap-[24px] my-5 w-full ">
                            <InputWallet
                                label="Wallet address"
                                value={walletAddress}
                            />
                            <InputWallet
                                label="Private Key"
                                value={privatekey}
                            />
                            <InputWallet
                                label="Public Key"
                                value={publicKey}
                            />
                            <div className="mt-5">
                                <ButtonAccount handleClick={createAccount} span="Create account" />
                                <ButtonAccount handleClick={handleNavigate} span="Account already exist" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddressFoundry;