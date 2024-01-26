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

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {characters.map((character) => (
          <Link
            href={`/character-sheet/${character._id}`}
            key={character._id}
            className="border p-4"
            characterId={character._id}
          >
            <p className="mb-2">Name: {character.name}</p>
            <p className="mb-2">Agency: {character.Agency}</p>
            <p className="mb-2">Rank: {character.Rank}</p>
            <p className="mb-2">Id: {character._id}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
