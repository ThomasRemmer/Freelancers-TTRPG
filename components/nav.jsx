"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-around h-16 bg-gray-800 text-white">
      <Link href="/">
        <h1 className="text-4xl font-bold text-center text-red-400">
          Freelancers Portal
        </h1>
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div
        className={`fixed top-0 right-0 w-full h-full bg-gray-800 transform transition-transform ease-in-out duration-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0 md:w-auto flex items-center justify-center md:items-start md:flex-row md:justify-end`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 absolute top-0 right-0 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="space-y-10 flex flex-col md:flex-row md:space-y-0 md:space-x-4 md:items-center">
          <Link href="/character-list">
            <button className="px-8 py-4 text-4xl  font-bold text-white bg-gray-800 rounded hover:bg-gray-700 md:px-4 md:py-2 md:text-base">
              Characters
            </button>
          </Link>
          <button className="px-8 py-4 text-4xl  font-bold text-white bg-gray-800 rounded hover:bg-gray-700 md:px-4 md:py-2 md:text-base">
            Campaigns
          </button>
          <button className="px-8 py-4 text-4xl font-bold text-white bg-gray-800 rounded hover:bg-gray-700 md:px-4 md:py-2 md:text-base">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
}
