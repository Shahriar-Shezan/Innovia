import React from "react";
import { useNavigate } from 'react-router-dom';

const DevWrite = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 flex items-center justify-center p-6">
      <div className="flex flex-col items-center space-y-6 bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Add Components</h1>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all w-full max-w-xs"
          onClick={() => navigate('/writeprocessor')}>
          Processor
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all w-full max-w-xs"
          onClick={() => navigate('/writeram')}>
          RAM
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all w-full max-w-xs"
          onClick={() => navigate('/writemotherboard')}>
          Motherboard
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all w-full max-w-xs"
          onClick={() => navigate('/writestorage')}>
          Storage
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all w-full max-w-xs"
          onClick={() => navigate('/writegpu')}>
          GPU
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all w-full max-w-xs"
          onClick={() => navigate('/writepsu')}>
          PSU
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all w-full max-w-xs"
          onClick={() => navigate('/writecasing')}>
          Casing
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all w-full max-w-xs"
          onClick={() => navigate('/writecooler')}>
          Cooler
        </button>
      </div>
    </div>
  );
};

export default DevWrite;
