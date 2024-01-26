"use client";
import React, { useState, useEffect } from "react";
export default function StatsCard({ character }) {
  const [currentWounds, setCurrentWounds] = useState(0);
  const [currentStress, setCurrentStress] = useState(0);
  const [currentStamina, setCurrentStamina] = useState(0);
  const [maxStamina, setMaxStamina] = useState(0);
  const [maxStress, setMaxStress] = useState(0);
  const [maxWounds, setMaxWounds] = useState(0);
  const [currentVigour, setCurrentVigour] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [currentIntuition, setCurrentIntuition] = useState(0);
  const [currentResolve, setCurrentResolve] = useState(0);
  const [currentEmotion, setCurrentEmotion] = useState(0);
  const [name, setName] = useState("");

  console.log(character);
  useEffect(() => {
    if (character) {
      setName(character.name); // Set name to character.name once character is fetched
    }
  }, [character]); // Add character as a dependency

  return (
    <>
      <div className="col-span-1 row-span-1 bg-gray-700 grid grid-rows-[4fr,15fr] grid-cols-2 gap-2 p-4 gap-y-2">
        <div className="col-span-2 border border-black grid grid-cols-[2fr,1fr] grid-rows-2 gap-2 p-1">
          <input
            type="text"
            className="border border-black w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            className="border border-black w-full"
            placeholder="Pronouns"
          />
          <input
            type="text"
            className="border border-black w-full"
            placeholder="Agency"
          />
          <input
            type="text"
            className="border border-black w-full"
            placeholder="Rank"
          />
        </div>
        <div className="border border-black grid grid-cols-[2fr,1fr] grid-rows-5 gap-x-2 gap-y-9 p-1">
          <div className="border border-black">Vigour</div>
          <input
            type="text"
            value={currentVigour}
            className="w-full text-center"
            onChange={(e) => setCurrentVigour(e.target.value)}
          />
          <div className="border border-black">Speed</div>
          <input
            type="text"
            value={currentSpeed}
            className="w-full text-center"
            onChange={(e) => setCurrentSpeed(e.target.value)}
          />
          <div className="border border-black">Intution</div>
          <input
            type="text"
            value={currentIntuition}
            className="w-full text-center"
            onChange={(e) => setCurrentIntuition(e.target.value)}
          />
          <div className="border border-black">Resolve</div>
          <input
            type="text"
            value={currentResolve}
            className="w-full text-center"
            onChange={(e) => setCurrentResolve(e.target.value)}
          />
          <div className="border border-black">Emotion</div>
          <input
            type="text"
            value={currentEmotion}
            className="w-full text-center"
            onChange={(e) => setCurrentEmotion(e.target.value)}
          />
        </div>
        <div className="border border-black grid grid-rows-3 gap-2 p-1">
          <div className=" grid grid-cols-2 grid-rows-2 ">
            <div className="border border-black col-span-2">Stamina</div>
            <div className="border border-black grid grid-cols-2 grid-rows-2 grid-cols-[2fr,1fr]">
              {" "}
              <input
                type="text"
                value={currentStamina}
                onChange={(e) => setCurrentStamina(e.target.value)}
                className="border border-black row-span-2 w-full"
              />
              <button
                onClick={() =>
                  setCurrentStamina((prevNumber) => prevNumber + 1)
                }
              >
                &#x2191;
              </button>
              <button
                onClick={() =>
                  setCurrentStamina((prevNumber) => Math.max(prevNumber - 1, 0))
                }
              >
                &#x2193;
              </button>
            </div>
            <input
              type="text"
              value={maxStamina}
              className="w-full text-center"
              onChange={(e) => setMaxStamina(e.target.value)}
            />
          </div>
          <div className=" grid grid-cols-2 grid-rows-2 ">
            <div className="border border-black col-span-2">Stress</div>
            <div className="border border-black grid grid-cols-2 grid-rows-2 grid-cols-[2fr,1fr]">
              {" "}
              <input
                type="text"
                value={currentStress}
                onChange={(e) => setCurrentStress(e.target.value)}
                className="border border-black row-span-2 w-full"
              />
              <button
                onClick={() => setCurrentStress((prevNumber) => prevNumber + 1)}
              >
                &#x2191;
              </button>
              <button
                onClick={() =>
                  setCurrentStress((prevNumber) => Math.max(prevNumber - 1, 0))
                }
              >
                &#x2193;
              </button>
            </div>

            <input
              type="text"
              value={maxStress}
              className="w-full text-center"
              onChange={(e) => setMaxStress(e.target.value)}
            />
          </div>
          <div className="  grid grid-cols-2 grid-rows-2 ">
            <div className="border border-black col-span-2">Wounds</div>
            <div className="border border-black grid grid-cols-2 grid-rows-2 grid-cols-[2fr,1fr]">
              {" "}
              <input
                type="text"
                value={currentWounds}
                onChange={(e) => setCurrentWounds(e.target.value)}
                className="border border-black row-span-2 w-full"
              />
              <button
                onClick={() => setCurrentWounds((prevNumber) => prevNumber + 1)}
              >
                &#x2191;
              </button>
              <button
                onClick={() =>
                  setCurrentWounds((prevNumber) => Math.max(prevNumber - 1, 0))
                }
              >
                &#x2193;
              </button>
            </div>
            <input
              type="text"
              value={maxWounds}
              className="w-full text-center"
              onChange={(e) => setMaxWounds(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
