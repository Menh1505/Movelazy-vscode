import React from 'react';

const WalletInput = ({ walletAddress, setWalletAddress, privateKey, setPrivateKey }) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="walletAddress">
          Wallet Address
        </label>
        <input 
          type="text" 
          id="walletAddress" 
          className="w-full py-2 px-3 border rounded" 
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="privateKey">
          Private Key
        </label>
        <input 
          type="text" 
          id="privateKey" 
          className="w-full py-2 px-3 border rounded" 
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default WalletInput;
