import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-around h-16 bg-gray-800 text-white">
      <Link href="/">
        <h1 className="text-4xl font-bold text-center text-red-400">
          Freelancers Character Creator
        </h1>
      </Link>
      <div>
        <Link href="/character-sheet">
          <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
            Characters
          </button>
        </Link>
        <button
          className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700"
          href
        >
          Campaigns
        </button>
        <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
          Profile
        </button>
      </div>
    </nav>
  );
}
