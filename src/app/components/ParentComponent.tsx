"use client";

import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const favoriteColors = ["Purple", "Pink", "Yellow", "Blue", "Red"];
  const favoriteDishes = ["Biryani", "Pizza", "Pasta", "Burger", "BBQ"];

  // Counter state
  const [counter, setCounter] = useState(0);

  // Increment counter
  const increment = () => setCounter((prev) => prev + 1);

  // Decrement counter
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 text-white p-6">
      <h1 className="text-4xl font-bold mb-8">My Favorites</h1>

      {/* Counter Section */}
      <div className="mb-8 p-6 bg-white text-black rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Number Counter</h2>
        <p className="text-3xl font-bold mb-4">{counter}</p>
        <div className="flex space-x-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
          >
            Ascend
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
          >
            Descend
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Passing Colors to Child Component */}
        <ChildComponent
          title="Favorite Colors"
          items={favoriteColors}
          isColorList={true}
        />
        {/* Passing Dishes to Child Component */}
        <ChildComponent
          title="Favorite Dishes"
          items={favoriteDishes}
          isColorList={false}
        />
      </div>
    </div>
  );
};

export default ParentComponent;
