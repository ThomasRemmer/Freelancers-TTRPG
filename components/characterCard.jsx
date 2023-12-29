"use client";
import { useState } from "react";
export default function CharacterCard() {
  const [hasURL, setHasURL] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [aliases, setAliases] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
      <div className="cursor-pointer group perspective col-span-1 row-span-1">
        <div
          className={`relative preserve-3d ${
            isFlipped ? "my-rotate-y-180" : ""
          } w-full h-full duration-1000`}
        >
          <div className="absolute backface-hidden w-full h-full">
            <div className=" bg-gray-700 grid grid-rows-[1fr,6fr,1fr,1fr] h-full border border-black p-4 gap-y-2">
              <div className="border border-black text-center">
                <p>[Freelancer Card]</p>
                <button onClick={() => setIsFlipped(!isFlipped)}>flip</button>
              </div>
              <div className="border border-black mb-2">
                {hasURL ? (
                  <img src={imgURL} alt="" className="h-full w-full" />
                ) : (
                  <>
                    <input
                      type="text"
                      className="text-center"
                      placeholder="img url"
                      onChange={(e) => setImgURL(e.target.value)}
                    />{" "}
                    <button onClick={() => setHasURL(true)}>submit</button>{" "}
                  </>
                )}
              </div>
              <input
                type="text"
                className="border border-black w-full"
                placeholder="Aliases"
              />
              <input
                type="text"
                className="border border-black w-full"
                placeholder="Job Title"
              />
            </div>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">
            <div className=" bg-gray-700 grid grid-rows-[1fr,6fr,1fr,1fr] h-full border border-black p-4 gap-y-2">
              <div className="border border-black text-center">
                <p>[Freelancer Card]</p>
                <button onClick={() => setIsFlipped(!isFlipped)}>flip</button>
              </div>
              <div className="border border-black mb-2">
                {hasURL ? (
                  <img src={imgURL} alt="" className="h-full w-full" />
                ) : (
                  <>
                    <input
                      type="text"
                      className="text-center"
                      placeholder="img url"
                      onChange={(e) => setImgURL(e.target.value)}
                    />{" "}
                    <button onClick={() => setHasURL(true)}>submit</button>{" "}
                  </>
                )}
              </div>
              <input
                type="text"
                className="border border-black w-full"
                placeholder="Aliases"
              />
              <input
                type="text"
                className="border border-black w-full"
                placeholder="Job Title"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
