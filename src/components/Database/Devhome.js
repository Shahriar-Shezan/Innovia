import React from "react";
import { useNavigate } from 'react-router-dom';
import { doSignOut } from "../../firebase/auth";

const Devhome = () => {
  const navigate = useNavigate();

  // Handle sign-out logic
  const handleLogout = async () => {
    try {
      await doSignOut(); // Sign out the user
      navigate("/login"); // Redirect to the login page after logging out
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Inventory Management</h1>
        
        <div className="flex flex-col items-center space-y-4">
          <button 
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all w-full"
            onClick={() => navigate('/devwrite')}
          >
            Write
          </button>
          
          <button 
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all w-full"
            onClick={() => navigate('/devread')}
          >
            Read
          </button>

          <button 
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all w-full"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Devhome;
