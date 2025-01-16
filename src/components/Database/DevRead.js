import React, { useState } from "react";
import { app } from "../../firebase/firebase";
import { getDatabase, ref, get } from "firebase/database";

function DevRead() {
  const [ComponentArray, setComponentArray] = useState([]); // Initialize as an array
  let [directory, setDirectory] = useState("");

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, directory);
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setComponentArray(Object.values(snapshot.val())); // Use Object.values
      } else {
        alert("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Choose Processor Category</h1>
        
        <div className="flex justify-around space-x-4">
          <button 
            className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition-all w-1/3"
            onClick={() => {
              setDirectory("Processors/Intel");
              setComponentArray([]);
            }}
          >
            Intel Processors
          </button>

          <button 
            className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition-all w-1/3"
            onClick={() => {
              setDirectory("Processors/AMD");
              setComponentArray([]);
            }}
          >
            AMD Processors
          </button>
        </div>

        <div className="flex justify-center">
          <button 
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
            onClick={fetchData}
          >
            Display Data
          </button>
        </div>

        {/* Displaying Data */}
        {ComponentArray.length > 0 && (
          <div className="mt-6">
            <ul className="space-y-4">
              {ComponentArray.map((item, index) => (
                <li key={index} className="p-4 border-2 border-gray-300 rounded-lg shadow-md">
                  <h2 className="font-semibold text-xl text-gray-800">{index + 1}: {item.name}</h2>
                  <p className="text-gray-700">Generation: {item.generation}</p>
                  <p className="text-gray-700">Socket: {item.socket}</p>
                  <p className="text-gray-700">Cores: {item.cores}</p>
                  <p className="text-gray-700">Threads: {item.threads}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DevRead;
