import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import WalletInput from '../components/WalletInput';
import NetworkSelect from '../components/NetworkSelect';
import DeployButton from '../components/DeployButton';
import PageHeader from '../components/PageHeader';

const Aptos = ({ setCurrentPage }) => {
  const [file, setFile] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [network, setNetwork] = useState('aptos-testnet');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="max-w-md mx-auto mt-10">
      <PageHeader title="Deploy Aptos Contract" setCurrentPage={setCurrentPage}/>
      <form onSubmit={handleSubmit}>
        <FileUpload file={file} setFile={setFile} />
        <WalletInput walletAddress={walletAddress} setWalletAddress={setWalletAddress} privateKey={privateKey} setPrivateKey={setPrivateKey} />
        <NetworkSelect network={network} setNetwork={setNetwork} />
        <DeployButton handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Aptos;
