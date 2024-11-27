import React,{ useState } from 'react';
import {app} from "../../firebase/firebase";
import {getDatabase, ref, set,push} from "firebase/database";



function Write() {

  let [inputValue1,setInputValue1] = useState("");
  let [inputValue2,setInputValue2] = useState("");
  let [inputValue3,setInputValue3] = useState("");
  let [inputValue4,setInputValue4] = useState("");
  let [inputValue5,setInputValue5] = useState("");
  let [inputValue6,setInputValue6] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "Processors/Intel"));
    set(newDocRef, {
        name: inputValue1,
        generation: inputValue2,
        socket: inputValue3,
        cores: inputValue4,
        threads: inputValue5,
        price: inputValue6
    }).then(()=>{
      alert("data saved Successfully")
    }).catch((error) =>{
      alert("error: ", error.message)
    })
  }
               
  return (
    <div>
      <div className="space-y-4">
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700">Processor Name:</label>
    <input
      type="text"
      value={inputValue1}
      onChange={(e) => setInputValue1(e.target.value)}
      className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      placeholder="Enter processor name"
    />
  </div>

  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700">Generation:</label>
    <input
      type="text"
      value={inputValue2}
      onChange={(e) => setInputValue2(e.target.value)}
      className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      placeholder="Enter generation"
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
    <label className="text-sm font-medium text-gray-700">Cores:</label>
    <input
      type="text"
      value={inputValue4}
      onChange={(e) => setInputValue4(e.target.value)}
      className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      placeholder="Enter number of cores"
    />
  </div>

  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700">Threads:</label>
    <input
      type="text"
      value={inputValue5}
      onChange={(e) => setInputValue5(e.target.value)}
      className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      placeholder="Enter number of threads"
    />
  </div>

  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700">Price:</label>
    <input
      type="text"
      value={inputValue6}
      onChange={(e) => setInputValue6(e.target.value)}
      className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      placeholder="Enter price"
    />
  </div>
  <br/>
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
  )
}

export default Write
