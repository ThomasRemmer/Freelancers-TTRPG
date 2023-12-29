"use client";
import { useState } from "react";

export default function TraitsCard() {
  const [talents, setTalents] = useState([]);

  return (
    <div className="col-span-1 row-span-1 bg-gray-700 grid grid-rows-[1fr,6fr,1fr]">
      <div className="border border-black">Talents</div>
      <div className="border border-black grid grid-rows-[repeat(auto-fill, 1fr)]">
        {" "}
        {talents.map((talent, index) => (
          <textarea
            key={index}
            value={talent}
            className="border border-black w-full h-full bg-gray-700"
            onChange={(e) => {
              const newTalents = [...talents];
              newTalents[index] = e.target.value;
              setTalents(newTalents);
            }}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setTalents([...talents, ""]);
        }}
      >
        New Talent
      </button>
    </div>
  );
}
