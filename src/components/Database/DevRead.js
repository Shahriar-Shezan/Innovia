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
    <div>
      <button className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all" 
      onClick={() => {
        setDirectory("Processors/Intel");
        setComponentArray([]);
      }}>Intel Processors</button>
      <button className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all" 
      onClick={() => {
        setDirectory("Processors/AMD");
        setComponentArray([]);
      }}>AMD Processors</button>
      <br/><br/>
      <button className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all" 
      onClick={fetchData}>Display Data</button>
      <ul>
        {ComponentArray.map((item, index) => (
          <li key={index}>
            {index+1}: <br/>
            Name: {item.name}<br/>
            Generation: {item.generation}<br/>
            Socket: {item.socket}<br/>
            Cores: {item.cores}<br/>
            Threads: {item.threads}<br/><br/>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default DevRead;
