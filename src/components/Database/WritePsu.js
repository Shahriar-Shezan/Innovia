import React, { useState } from "react";
import { app } from "../../firebase/firebase";
import { getDatabase, ref, set, push } from "firebase/database";

function WritePsu() {
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
      wattage: inputValue3,
      efficiency: inputValue4,
      modularity: inputValue5,
      pcieconnectors: inputValue6,
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
          onClick={() => setDirectory("PSU/Corsair")}
          className="mb-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Corsair
        </button>
        <button
          onClick={() => setDirectory("PSU/Antec")}
          className="mb-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Antec
        </button>
        <button
          onClick={() => setDirectory("PSU/MSI")}
          className="mb-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          MSI
        </button>
        <button
          onClick={() => setDirectory("PSU/Deepcool")}
          className="mb-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          Deepcool
        </button>
        <button
          onClick={() => setDirectory("PSU/NZXT")}
          className="mb-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        >
          NZXT
        </button>
        <br />

        <label>Current Directory: {directory}</label>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">PSU Name:</label>
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter PSU name"
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
          <label className="text-sm font-medium text-gray-700">Wattage:</label>
          <input
            type="number"
            value={inputValue3}
            onChange={(e) => setInputValue3(Number(e.target.value))}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Wattage"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Efficiency:
          </label>
          <input
            type="text"
            value={inputValue4}
            onChange={(e) => setInputValue4(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Efficiency:"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
             Modularity:
          </label>
          <input
            type="text"
            value={inputValue5}
            onChange={(e) => setInputValue5(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Modularity"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            PCIE Connectors:
          </label>
          <input
            type="text"
            value={inputValue6}
            onChange={(e) => setInputValue6(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter Number of PCIE Connectors"
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

export default WritePsu;
