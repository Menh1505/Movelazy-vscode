import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import WalletInput from '../components/WalletInput';
import NetworkSelect from '../components/NetworkSelect';
import DeployButton from '../components/DeployButton';
import PageHeader from '../components/PageHeader';
import AptosLogo from '../assets/aptos-black.svg';

interface AptosProps {
  setCurrentPage: (page: string) => void; // Accepts any string
}

const Aptos: React.FC<AptosProps> = ({ setCurrentPage }) => {
  const [file, setFile] = useState<File | null>(null);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [privateKey, setPrivateKey] = useState<string>('');
  const [network, setNetwork] = useState<string>('aptos-testnet');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert('Please upload a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('walletAddress', walletAddress);
    formData.append('privateKey', privateKey);
    formData.append('network', network);

    try {
      const response = await fetch('http://localhost:5000/deployAptos', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      alert(`Deployment successful: ${result.message}`);
    } catch (error) {
      alert('Error during deployment');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 h-96">
      <PageHeader
        title={
          <div className="flex items-center">
            <img src={AptosLogo} alt="Aptos Logo" className="w-10 h-10 mr-2" />
            Deploy Aptos Contract
          </div>
        }
        setCurrentPage={setCurrentPage}
      />
      <form onSubmit={handleSubmit}>
        <FileUpload file={file} setFile={setFile} />
        <WalletInput
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          privateKey={privateKey}
          setPrivateKey={setPrivateKey}
        />
        <NetworkSelect network={network} setNetwork={setNetwork} currentPage="Aptos" />
        <DeployButton handleSubmit={(e) => { e.preventDefault(); handleSubmit(e as any); }} />
      </form>
    </div>
  );
};

export default Aptos;
