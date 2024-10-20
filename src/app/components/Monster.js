"use client";

import creature1 from "../creature1.gif";
import creature2 from "../creature2.gif";
import creature3 from "../creature3.gif";
import creature4 from "../creature4.gif";
import creature5 from "../creature5.gif";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

function Monster({ damagePerClick, setGold, goldMultiplier }) {
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [maxHealth, setMaxHealth] = useState(100);

  function handleClick(damage) {
    setMonsterHealth((prev) => Math.max(prev - damage, 0));
    if (monsterHealth - damage <= 0) {
      setGold((prev) => prev + 50 * goldMultiplier);
    }
  }

  useEffect(() => {
    if (monsterHealth === 0) {
      handleNewMonster();
    }
  }, [monsterHealth]);

  function handleNewMonster() {
    const newHealth = Math.floor(Math.random() * 200 + 100);
    console.log(newHealth);
    setMaxHealth(newHealth);
    setMonsterHealth(newHealth);
  }

  const healthPercentage = (monsterHealth / maxHealth) * 100;

  const creatures = [creature1, creature2, creature3, creature4, creature5];
  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomCreatures = creatures[randomInt(creatures.length)];

  return (
    <div className="flex flex-col justify-center items-center">
      <Image className="mb-10" src={randomCreatures} width={100} height={100} />
      <div>
        <div className="text-center items-center">
          <div className="health-bar">
            <div
              className="health-bar-inner"
              style={{ width: `${healthPercentage}%` }}
            ></div>
          </div>
          <p className="text-4xl">Monster Health: {monsterHealth}</p>
          <br />
        </div>
        <div className="items-center sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(damagePerClick)}
          >
            <Image
              className="light:invert"
              src="https://www.svgrepo.com/show/323459/thor-hammer.svg"
              alt="hammer"
              width={20}
              height={20}
            />
            Kill the Monster!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Monster;
