"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CharacterList({ session }) {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await fetch("api/getCharacter", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCharacters(data.characterList);
    console.log(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const deleteCharacter = async (characterId) => {
    const res = await fetch(`/api/deleteCharacter?_id=${characterId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      getCharacters();
    } else {
      console.error(`Error: ${res.status}`);
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {characters.map((character) => (
          <div key={character._id} className="relative border p-4 ">
            <button
              onClick={() => deleteCharacter(character._id)}
              className="absolute top-0 right-0 m-2  "
            >
              Delete
            </button>
            <Link href={`/character-sheet/${character._id}`} className="group">
              <p className="mb-2">Name: {character.name}</p>
              <p className="mb-2">Agency: {character.Agency}</p>
              <p className="mb-2">Rank: {character.Rank}</p>
              <p className="mb-2">Id: {character._id}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
