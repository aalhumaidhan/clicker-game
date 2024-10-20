import React from "react";
import { useState } from "react";
import Home from "../page";
import Upgrades from "./Upgrades";
import Monster from "./Monster";

function Tools({
  damagePerClick,
  setDamagePerClick,
  gold,
  setGold,
  monsterHealth,
  setMonsterHealth,
}) {
  const [selectedTool, setSelectedTool] = useState([
    {
      name: "Sword",
      description: "A sword that slashes the monsters and deals more damage!",
      damage: 2.5,
      cost: 1500,
    },
    {
      name: "Ray Gun",
      description:
        "A ray gun that shoots laser beams and blinds the monster momentarily!",
      damage: 5,
      cost: 5000,
    },
    {
      name: "Flamethrower",
      description: "A flamethrower, the name speaks for itself!",
      damage: 10,
      cost: 10000,
    },
  ]);

  function scaleMonsterHealth(newDamagePerClick) {
    const scalingFactor = 1 + Math.log2(newDamagePerClick / 10);
    const increasedHealth = Math.floor(monsterHealth * scalingFactor);
    setMonsterHealth(increasedHealth);
  }

  function handleToolUpgrade(toolIndex) {
    const toolUpgrade = selectedTool[toolIndex];

    if (gold >= toolUpgrade.cost) {
      setGold(gold - toolUpgrade.cost);
      const newDamagePerClick = Math.floor(damagePerClick * toolUpgrade.damage);
      setDamagePerClick(newDamagePerClick);
      scaleMonsterHealth(newDamagePerClick);
    } else {
      alert("Not enough gold to buy this upgrade!");
    }
  }

  return (
    <div className="upgrades flex-shrink flex-grow-0">
      <p className="font-semibold text-center text-3xl mb-5">Tool Upgrades </p>
      <ul className="flex flex-col gap-4">
        {selectedTool.map((tool, index) => (
          <li
            key={index}
            className="bg-zinc-800 p-4 flex gap-2 flex-col rounded-2xl flex-wrap w-96 justify-center items-start"
          >
            {tool.name}: {tool.description}
            <div className="text-amber-400 font-semibold">{tool.cost} Gold</div>
            <button
              onClick={() => handleToolUpgrade(index)}
              className="bg-green-500 px-10 py-1 hover:bg-green-400 rounded-full self-end font-semibold
            "
            >
              Purchase
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tools;
