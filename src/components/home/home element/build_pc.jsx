import React, { useState } from "react";
import jsPDF from "jspdf";

const BuildPC = () => {
  const [selectedParts, setSelectedParts] = useState({});

  const partsOptions = {
    CPU: [
      { name: "Intel i5-12400", price: 180 },
      { name: "Intel i7-13700K", price: 400 },
      { name: "AMD Ryzen 5 5600X", price: 200 },
    ],
    GPU: [
      { name: "NVIDIA RTX 3060", price: 300 },
      { name: "NVIDIA RTX 4070", price: 600 },
      { name: "AMD RX 6700 XT", price: 400 },
    ],
    RAM: [
      { name: "Corsair Vengeance 16GB", price: 80 },
      { name: "G.Skill Trident Z 32GB", price: 150 },
      { name: "Kingston Fury 16GB", price: 70 },
    ],
    STORAGE: [
      { name: "Samsung 970 EVO 1TB", price: 120 },
      { name: "Crucial MX500 1TB", price: 100 },
      { name: "WD Black 2TB", price: 180 },
    ],
    MotherBoard: [
      { name: "ASUS ROG STRIX B550-F", price: 180 },
      { name: "MSI MAG Z690 TOMAHAWK", price: 250 },
      { name: "Gigabyte B450 AORUS", price: 150 },
    ],
    COOLER: [
      { name: "Cooler Master Hyper 212", price: 40 },
      { name: "NZXT Kraken X63", price: 140 },
      { name: "Noctua NH-D15", price: 90 },
    ],
    PSU: [
      { name: "Corsair RM750", price: 120 },
      { name: "EVGA Supernova 850W", price: 140 },
      { name: "Seasonic Focus GX-750", price: 130 },
    ],
    CASING: [
      { name: "NZXT H510", price: 80 },
      { name: "Lian Li PC-O11 Dynamic", price: 130 },
      { name: "Cooler Master TD500", price: 100 },
    ],
  };

  const handlePartChange = (partType, partName) => {
    const selectedPart = partsOptions[partType].find((part) => part.name === partName);
    setSelectedParts((prev) => ({ ...prev, [partType]: selectedPart }));
  };

  const calculateTotal = () => {
    return Object.values(selectedParts).reduce((total, part) => total + (part?.price || 0), 0);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("PC Build Receipt", 10, 10);

    // Add selected parts
    doc.setFontSize(12);
    let y = 20;
    Object.entries(selectedParts).forEach(([partType, part]) => {
      if (part) {
        doc.text(`${partType}: ${part.name} - $${part.price}`, 10, y);
        y += 10;
      }
    });

    // Add total price
    y += 10;
    doc.setFontSize(14);
    doc.text(`Total: $${calculateTotal()}`, 10, y);

    // Save PDF
    doc.save("PC_Build_Receipt.pdf");
  };

  return (
    <div className="p-4 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Build Your PC</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Selection Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {Object.keys(partsOptions).map((partType) => (
            <div key={partType} className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700 capitalize w-1/4">
                {partType}:
              </label>
              <select
                onChange={(e) => handlePartChange(partType, e.target.value)}
                defaultValue=""
                className="w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="" disabled>
                  Select a {partType}
                </option>
                {partsOptions[partType].map((part) => (
                  <option key={part.name} value={part.name}>
                    {part.name} (${part.price})
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Your Build Summary</h2>
          <ul className="space-y-2 text-sm">
            {Object.entries(selectedParts).map(([partType, part]) =>
              part ? (
                <li key={partType} className="flex justify-between">
                  <span className="capitalize">{partType}:</span>
                  <span>
                    {part.name} - ${part.price}
                  </span>
                </li>
              ) : null
            )}
          </ul>
          <div className="mt-4 border-t pt-3 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
          {/* Download PDF Button */}
          <button
            onClick={generatePDF}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
          >
            Download PDF Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuildPC;
