import React from 'react';

const DeployButton = ({ handleSubmit }) => {
  return (
    <button 
      type="submit" 
      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      onClick={handleSubmit}
    >
      Deploy
    </button>
  );
};

export default DeployButton;
