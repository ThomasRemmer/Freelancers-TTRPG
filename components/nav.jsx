import React from "react";

export default function Nav() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        DND 5e Character Creator
      </h1>
      <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
        Items List
      </button>
      <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
        Monster List
      </button>
      <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
        Spells List
      </button>
    </div>
  );
}
