import React, { useState } from "react";
import { app } from "../../firebase/firebase";
import { getDatabase, ref, set, push } from "firebase/database";

function WriteMotherboard() {
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  let [inputValue3, setInputValue3] = useState("");
  let [inputValue4, setInputValue4] = useState("");
  let [inputValue5, setInputValue5] = useState("");
  let [inputValue6, setInputValue6] = useState("");
  let [inputValue7, setInputValue7] = useState("");
  let [inputValue8, setInputValue8] = useState("");
  let [inputValue9, setInputValue9] = useState("");

    const saveData = async () => {
      // Validation of inputs
      if (
        !inputValue1 ||
        !inputValue2 ||
        !inputValue3 ||
        !inputValue4 ||
        !inputValue5 ||
        !inputValue6 ||
        !inputValue7 ||
        !inputValue8 ||
        !inputValue9
      ) {
        alert("Please fill all fields");
        return;
      }
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "Motherboards"));
    set(newDocRef, {
      name: inputValue1,
      formfactor: inputValue2,
      socket: inputValue3,
      ramstype: inputValue4,
      ramslots: inputValue5,
      m2slots: inputValue6,
      sataports: inputValue7,
      price: inputValue8,
      brand: inputValue9
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
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Motherboard Name:
          </label>
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter motherboard name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Form Factor:
          </label>
          <input
            type="text"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter form factor"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Socket:</label>
          <input
            type="text"
            value={inputValue3}
            onChange={(e) => setInputValue3(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter socket type"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Ram Type:</label>
          <input
            type="text"
            value={inputValue4}
            onChange={(e) => setInputValue4(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter ram type"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Ramslots:</label>
          <input
            type="text"
            value={inputValue5}
            onChange={(e) => setInputValue5(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter number of ram slots"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">M.2 Slots:</label>
          <input
            type="text"
            value={inputValue6}
            onChange={(e) => setInputValue6(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter number of m.2 slots"
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Sataports:</label>
          <input
            type="text"
            value={inputValue7}
            onChange={(e) => setInputValue7(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter number of sata ports"
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Price:</label>
          <input
            type="text"
            value={inputValue8}
            onChange={(e) => setInputValue8(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter price"
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Brand: </label>
          <input
            type="text"
            value={inputValue9}
            onChange={(e) => setInputValue9(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter brand name"
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

export default WriteMotherboard;
