"use client";

import Image from "next/image";
import Upgrades from "./components/Upgrades";
import Monster from "./components/Monster";
import { useState } from "react";
import Tools from "./components/Tools";

export default function Home() {
  const [damagePerClick, setDamagePerClick] = useState(10);
  const [gold, setGold] = useState(0);
  const [goldMultiplier, setGoldMultiplier] = useState(1);
  const [monsterHealth, setMonsterHealth] = useState(100);

  return (
    <>
      <a
        className="flex justify-center text-background text-3xl text-white font-extrabold mt-10 mr-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="light:invert"
          src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-gold-bag-png-image_6025082.png"
          alt="gold"
          width={40}
          height={40}
        />
        Gold: {gold}{" "}
      </a>
      <div className="flex flex-col justify-center items-center min-h-screen p-6 gap-8 sm:p-10 w-full">
        <main className="flex justify-between items-center w-full">
          <Upgrades
            gold={gold}
            setGold={setGold}
            damagePerClick={damagePerClick}
            setDamagePerClick={setDamagePerClick}
            goldMultiplier={goldMultiplier}
            setGoldMultiplier={setGoldMultiplier}
          />
          <div className="">
            <Monster
              damagePerClick={damagePerClick}
              gold={gold}
              setGold={setGold}
              setDamagePerClick={setDamagePerClick}
              goldMultiplier={goldMultiplier}
              className={"flex-grow w-full mx-16"}
            />
          </div>
          <Tools
            damagePerClick={damagePerClick}
            setDamagePerClick={setDamagePerClick}
            gold={gold}
            setGold={setGold}
            monsterHealth={monsterHealth}
            setMonsterHealth={setMonsterHealth}
          />
        </main>
      </div>
    </>
  );
}
