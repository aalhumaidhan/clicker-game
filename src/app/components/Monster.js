"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

function Monster() {
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [maxHealth, setMaxHealth] = useState(100);

  function handleClick(damage) {
    setMonsterHealth((prev) => Math.max(prev - damage, 0));
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

  return (
    <div className="flex flex-col">
      <div className="items-center text-center">
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
          onClick={() => handleClick(10)}
        >
          <Image
            className="light:invert"
            src="https://www.svgrepo.com/show/323459/thor-hammer.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Kill the Monster!
        </a>
      </div>
    </div>
  );
}

export default Monster;
