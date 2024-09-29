import React from 'react';

// Define the network options
const MOVEMENT_NETWORKS = {
  Aptos: [
    {
      name: "Aptos Testnet (Suzuka)",
      value: "aptos-testnet-suzuka",
      rpcUrl: "https://aptos.testnet.suzuka.movementlabs.xyz/v1",
      explorer: "https://explorer.movementnetwork.xyz/?network=testnet",
      faucet: "https://faucet.movementlabs.xyz/?network=aptos"
    },
    {
      name: "Aptos Devnet (Suzuka)",
      value: "aptos-devnet-suzuka",
      rpcUrl: "https://devnet.suzuka.movementnetwork.xyz/v1",
      explorer: "https://explorer.suzuka.movementnetwork.xyz/?network=devnet",
      faucet: "https://faucet.devnet.suzuka.movementnetwork.xyz/"
    }
  ],
  Foundry: [
    {
      name: "EVM Environment (EVM)",
      value: "solidity-testnet",
      description: "Compatible with Foundry and Hardhat",
      rpcUrl: "https://mevm.devnet.imola.movementlabs.xyz",
      explorer: "https://explorer.devnet.imola.movementlabs.xyz",
      faucet: "https://faucet.movementlabs.xyz/?network=mevm"
    }
  ]
};

// Define the props for the NetworkSelect component
interface NetworkSelectProps {
  network: string;
  setNetwork: (network: string) => void;
  currentPage: keyof typeof MOVEMENT_NETWORKS;
}

const NetworkSelect: React.FC<NetworkSelectProps> = ({ network, setNetwork, currentPage }) => {
  // Select network options based on currentPage
  const networkOptions = MOVEMENT_NETWORKS[currentPage] || [];

  return (
    <div className="mb-4">
      <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="network">
        Network
      </label>
      <select
        id="network"
        className="w-full py-2 px-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
        value={network}
        onChange={(e) => setNetwork(e.target.value)}
      >
        <optgroup label={`${currentPage} Networks`}>
          {networkOptions.map((net) => (
            <option key={net.value} value={net.value}>
              {net.name} {currentPage === "Foundry" && "description" in net ? `(${net.description})` : ""}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default NetworkSelect;
