import React, { useState } from "react";
import { app } from "../../firebase/firebase";
import { getDatabase, ref, set, push } from "firebase/database";

function WriteCooler() {
  let [directory, setDirectory] = useState("");
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  let [inputValue3, setInputValue3] = useState("");
  let [inputValue4, setInputValue4] = useState("");
  let [inputValue5, setInputValue5] = useState("");
  let [inputValue6, setInputValue6] = useState("");
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
      !inputValue6 ||
      !inputValue7
    ) {
      alert("Please fill all fields and select a directory.");
      return;
    }
    const db = getDatabase(app);
    const newDocRef = push(ref(db, directory));
    set(newDocRef, {
      name: inputValue1,
      brand: inputValue2,
      type: inputValue3,
      socket: inputValue4,
      height: inputValue5,
      tdp: inputValue6,
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
          onClick={() => setDirectory("Cooler/LiquidCooler")}
          className="mb-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Liquid Cooler
        </button>
        <button
          onClick={() => setDirectory("Cooler/AirCooler")}
          className="mb-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Air Cooler
        </button> 
        <br />

        <label>Current Directory: {directory}</label>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Cooler Name:</label>
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Cooler name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Brand:</label>
          <input
            type="text"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Brand"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Type:</label>
          <input
            type="text"
            value={inputValue3}
            onChange={(e) => setInputValue3(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Type"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Socket:
          </label>
          <input
            type="text"
            value={inputValue4}
            onChange={(e) => setInputValue4(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Socket:"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
             Height:
          </label>
          <input
            type="text"
            value={inputValue5}
            onChange={(e) => setInputValue5(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Height"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            TDP:
          </label>
          <input
            type="text"
            value={inputValue6}
            onChange={(e) => setInputValue6(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter TDP"
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Price:</label>
          <input
            type="number"
            value={inputValue7}
            onChange={(e) => setInputValue7(Number(e.target.value))}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter price"
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

export default WriteCooler;
