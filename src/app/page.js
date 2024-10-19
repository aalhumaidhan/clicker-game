"use client";

import Image from "next/image";
import Upgrades from "./components/Upgrades";
import Monster from "./components/Monster";
import { useState } from "react";

export default function Home() {
  const [damagePerClick, setDamagePerClick] = useState(10);
  const [gold, setGold] = useState(0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Monster
          damagePerClick={damagePerClick}
          gold={gold}
          setGold={setGold}
        />
        <Upgrades
          gold={gold}
          setGold={setGold}
          damagePerClick={damagePerClick}
          setDamagePerClick={setDamagePerClick}
        />
      </main>
    </div>
  );
}
