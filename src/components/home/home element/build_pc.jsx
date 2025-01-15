import React, { useState, useEffect } from "react";
import { get, ref, getDatabase } from "firebase/database";
import jsPDF from "jspdf";

function BuildPC() {
  const [componentsData, setComponentsData] = useState({});
  const [selectedComponents, setSelectedComponents] = useState({});

  const customCategoryOrder = [
    "Processors",
    "Motherboards",
    "Cooler",
    "Ram",
    "Storage",
    "GPU",
    "PSU",
    "Casing",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const dbRef = ref(db);
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setComponentsData(data);
        } else {
          console.error("No data found in the database.");
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectionChange = (category, itemKey) => {
    const selectedCategory = componentsData[category];
    let selectedItem = null;

    if (selectedCategory) {
      if (category === "Motherboards") {
        selectedItem = selectedCategory[itemKey];
      } else {
        Object.values(selectedCategory).forEach((subcategory) => {
          if (subcategory[itemKey]) {
            selectedItem = subcategory[itemKey];
          }
        });
      }
    }

    setSelectedComponents((prev) => ({
      ...prev,
      [category]: selectedItem,
    }));
  };

  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce((total, item) => total + (item?.price || 0), 0);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Set page width
    const pageWidth = doc.internal.pageSize.width;
    
    // Title: Centered "PC Build Receipt"
    const textWidth = doc.getTextWidth("PC Build Receipt");
    const xPosition = (pageWidth - textWidth) / 2;
    const textWidth1 = doc.getTextWidth("Innovia");
    const x1Position = (pageWidth - textWidth1) / 2;
    doc.setFontSize(20);
    doc.text("Innovia", x1Position, 10);
    doc.setFontSize(16);
    doc.text("PC Build Receipt", xPosition, 15);

    // Set font size for components and total
    doc.setFontSize(12);
    let y = 25; // Start content below title

    // Loop through the selected components and add to PDF
    Object.entries(selectedComponents).forEach(([category, component]) => {
      if (component) {
        doc.text(`${category}: ${component.name} - ${component.price} BDT`, 10, y);
        y += 10; // Space for next component
      }
    });

    // Add a line before the total price
    doc.setLineWidth(0.5);
    doc.line(10, y, pageWidth - 10, y); // Horizontal line
    y += 5; // Add some space after the line

    // Add total price section
    doc.setFontSize(14);
    doc.text(`Total: ${calculateTotal()} BDT`, 10, y);

    // Save the PDF
    doc.save("PC_Build_Receipt.pdf");
};




  return (
    <div className="p-4 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Build Your PC</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Selection Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {customCategoryOrder.map((category) => (
            <div key={category} className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700 capitalize w-1/4">
                {category}:
              </label>
              <select
                onChange={(e) => handleSelectionChange(category, e.target.value)}
                defaultValue=""
                className="w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="" disabled>
                  Select a {category}
                </option>
                {componentsData[category] ? (
                  category === "Motherboards"
                    ? Object.entries(componentsData[category]).map(([itemKey, item]) => (
                        <option key={itemKey} value={itemKey}>
                          {item.name} - {item.price} BDT
                        </option>
                      ))
                    : Object.entries(componentsData[category]).flatMap(([subcategoryKey, items]) =>
                        Object.entries(items).map(([itemKey, item]) => (
                          <option key={itemKey} value={itemKey}>
                            {item.name} - {item.price} BDT
                          </option>
                        ))
                      )
                ) : null}
              </select>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Your Build Summary</h2>
          <ul className="space-y-2 text-sm">
            {customCategoryOrder.map((category) => {
              const item = selectedComponents[category];
              if (item) {
                return (
                  <li key={category} className="flex justify-between">
                    <span className="capitalize">{category}:</span>
                    <span>
                      {item.name} - {item.price} BDT
                    </span>
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <div className="mt-4 border-t pt-3 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>{calculateTotal()} BDT</span>
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
}

export default BuildPC;
