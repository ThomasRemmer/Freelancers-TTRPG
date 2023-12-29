"use client";

import { useState } from "react";
import CharacterCard from "./characterCard";
import StatsCard from "./statsCard";
import TraitsCard from "./traitsCard";
import SkillsCard from "./skillsCard";

export default function FreelancerCard() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-[3fr,1fr] w-9/10 h-screen w-full gap-4">
        <CharacterCard />
        <StatsCard />
        <TraitsCard />
        <SkillsCard />
      </div>
    </>
  );
}
