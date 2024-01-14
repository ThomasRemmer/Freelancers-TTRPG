"use client";
import { useEffect, useState } from "react";

export default function CharacterList({ session }) {
  const [characters, setCharacters] = useState([]);

  const createChartacter = async () => {
    if (session) {
      const newCharacter = {
        name: "",
        imgURL: "",
        Pronoun: "",
        Agency: "",
        Rank: "",
        Vigour: 0,
        Speed: 0,
        Intuition: 0,
        Resolve: 0,
        Emotion: 0,
        Stamina: 0,
        currentStamina: 0,
        Stress: 0,
        currentStress: 0,
        Wounds: 0,
        currentWounds: 0,
        Callsign: "",
        Position: "",
        Talents: [],
        Recall: 0,
        RecallTags: [],
        Discern: 0,
        DiscernTags: [],
        Infer: 0,
        InferTags: [],
        Persuade: 0,
        PersuadeTags: [],
        Control: 0,
        ControlTags: [],
        Mend: 0,
        MendTags: [],
        Create: 0,
        CreateTags: [],
        Aim: 0,
        AimTags: [],
        Hide: 0,
        HideTags: [],
        Flex: 0,
        FlexTags: [],
        Fight: 0,
        FightTags: [],
        Thaum: 0,
        ThaumTags: [],
        MadeBy: session.user.email,
      };

      try {
        const response = await fetch("/api/character", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCharacter),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

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
      <div className="flex items-center justify-center min-h-screen">
        {characters.map((character) => (
          <div key={character._id}>
            <p>Name: {character.name}</p>
            <p>Agency: {character.agency}</p>
            <p>Rank: {character.rank}</p>
          </div>
        ))}
        <button
          onClick={createChartacter}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create Character
        </button>
      </div>
    </>
  );
}
