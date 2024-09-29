import React from 'react';

interface WalletInputProps {
  walletAddress: string;
  setWalletAddress: (address: string) => void;
  privateKey: string;
  setPrivateKey: (key: string) => void;
}

const WalletInput: React.FC<WalletInputProps> = ({ walletAddress, setWalletAddress, privateKey, setPrivateKey }) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="walletAddress">
          Wallet Address
        </label>
        <input
          type="text"
          id="walletAddress"
          className="w-full py-2 px-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="privateKey">
          Private Key
        </label>
        <input
          type="text"
          id="privateKey"
          className="w-full py-2 px-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default WalletInput;
