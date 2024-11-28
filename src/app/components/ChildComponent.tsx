"use client";

import React from "react";

interface ChildComponentProps {
  title: string;
  items: string[];
  isColorList: boolean; // To differentiate styling for colors and other items
}

const ChildComponent: React.FC<ChildComponentProps> = ({
  title,
  items,
  isColorList,
}) => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`px-4 py-2 rounded shadow ${
              isColorList
                ? "text-white" // For colors, set text color to white
                : "bg-gradient-to-r from-pink-500 to-yellow-400 text-white"
            }`}
            style={isColorList ? { backgroundColor: item.toLowerCase() } : {}}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
