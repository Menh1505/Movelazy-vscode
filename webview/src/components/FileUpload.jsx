import React from 'react';

const FileUpload = ({ file, setFile }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
        Upload Contract File
      </label>
      <input 
        type="file" 
        id="file" 
        className="w-full py-2 px-3 border rounded" 
        onChange={handleFileChange}
        accept=".sol,.move"
        required
      />
    </div>
  );
};

export default FileUpload;
