"use client";

import { useState, useEffect } from "react";
import CharacterCard from "./characterCard";
import StatsCard from "./statsCard";
import TraitsCard from "./traitsCard";
import SkillsCard from "./skillsCard";

export default function FreelancerCard({ characterId }) {
  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(`/api/getCharacterId?_id=${characterId}`);
      const data = await res.json();
      setCharacter(data.characterList);
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchCharacter();
  }, [characterId]);

  if (loading) {
    return <div>Loading...</div>; // Render loading message while data is being fetched
  }

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-[3fr,1fr] w-9/10 h-screen w-full gap-4">
        <CharacterCard character={character} />
        <StatsCard character={character} />
        <TraitsCard character={character} />
        <SkillsCard character={character} />
      </div>
    </>
  );
}
