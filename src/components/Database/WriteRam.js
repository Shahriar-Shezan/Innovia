import React, { useState } from "react";
import { app } from "../../firebase/firebase";
import { getDatabase, ref, set, push } from "firebase/database";

function WriteRam() {
  let [directory, setDirectory] = useState("");
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState();
  let [inputValue3, setInputValue3] = useState("");
  let [inputValue4, setInputValue4] = useState();
  let [inputValue5, setInputValue5] = useState("");
  let [inputValue6, setInputValue6] = useState(false);
  let [inputValue7, setInputValue7] = useState();

  const saveData = async () => {
    // Validation of inputs
    if (
      !directory ||
      !inputValue1 ||
      !inputValue2 ||
      !inputValue3 ||
      !inputValue4 ||
      !inputValue5 ||
      !inputValue7
    ) {
      alert("Please fill all fields and select a directory");
      return;
    }
    const db = getDatabase(app);
    const newDocRef = push(ref(db, directory));
    set(newDocRef, {
      name: inputValue1,
      capacity: inputValue2,
      type: inputValue3,
      speed: inputValue4,
      cl: inputValue5,
      rgb: inputValue6,
      price: inputValue7,
    })
      .then(() => {
        alert("data saved Successfully");
      })
      .catch((error) => {
        alert("error: ", error.message);
      });
  };

  return (
    <div>
      <div className="space-y-4">
      <button
          onClick={()=>setDirectory("Ram/Corsair")}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Corsair
        </button>
        <button
          onClick={()=>setDirectory("Ram/PNY")}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          PNY
        </button>

        <button
          onClick={()=>setDirectory("Ram/G.skill")}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          G.Skill
        </button>

        <button
          onClick={()=>setDirectory("Ram/Kingston")}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Kingston
        </button>

        <button
          onClick={()=>setDirectory("Ram/Colorful")}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Colorful
        </button>

        <button
          onClick={()=>setDirectory("Ram/Team")}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Team
        </button>

        <label>Current Directory: {directory}</label>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Ram Name:</label>
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Ram name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Capacity:</label>
          <input
            type="number"
            value={inputValue2}
            onChange={(e) => setInputValue2(Number(e.target.value))}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter capacity of ram"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Ram Type:</label>
          <input
            type="text"
            value={inputValue3}
            onChange={(e) => setInputValue3(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Ram type"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Speed:</label>
          <input
            type="number"
            value={inputValue4}
            onChange={(e) => setInputValue4(Number(e.target.value))}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter ram speed"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Cache Latency:
          </label>
          <input
            type="text"
            value={inputValue5}
            onChange={(e) => setInputValue5(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter cache latency"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            RGB: (Check for Yes, Leave unchecked for No)
          </label>
          <input
            type="checkbox"
            checked={inputValue6}
            onChange={(e) => setInputValue6(e.target.checked)} 
          />
        </div>
      

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            type="number"
            value={inputValue7}
            onChange={(e) => setInputValue7(Number(e.target.value))}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Price"
          />
        </div>
        <br />
      </div>

      <div className="flex justify-center">
        <button
          onClick={saveData}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Save Data
        </button>
      </div>
    </div>
  );
}

export default WriteRam;
