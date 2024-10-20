"use client";

import { useState } from "react";
import Home from "../page";

function Upgrades({
  gold,
  setGold,
  damagePerClick,
  setDamagePerClick,
  goldMultiplier,
  setGoldMultiplier,
}) {
  const [upgrades, setUpgrades] = useState([
    { name: "Double the Damage Per Click", cost: 100, multiplier: 2 },
    {
      name: "Double the Gold Currency Gained Per Kill",
      cost: 1000,
      multiplier: 2,
    },
  ]);

  function handleBuyUpgrade(upgradeIndex) {
    const upgrade = upgrades[upgradeIndex];

    if (gold >= upgrade.cost) {
      setGold(gold - upgrade.cost);

      if (upgrade.name === "Double the Damage Per Click") {
        setDamagePerClick(damagePerClick * upgrade.multiplier);
      }

      if (upgrade.name === "Double the Gold Currency Gained Per Kill") {
        setGoldMultiplier(goldMultiplier * upgrade.multiplier);
      }

      const newUpgrades = [...upgrades];
      newUpgrades[upgradeIndex].cost = Math.floor(upgrade.cost * 1.5);
      setUpgrades(newUpgrades);
    } else {
      alert("Not enough gold to buy this upgrade!");
    }
  }

  return (
    <div className="upgrades flex-shrink flex-grow-0">
      <p className="font-semibold text-center text-3xl mb-5">Upgrades</p>
      <ul className="flex flex-col gap-4">
        {upgrades.map((upgrade, index) => (
          <li
            key={index}
            className="bg-zinc-800 p-4 flex gap-2 flex-col rounded-2xl flex-wrap w-96 justify-center items-start"
          >
            <div className="font-bold">{upgrade.name}</div>
            <div className="text-amber-400 font-semibold">
              {upgrade.cost} Gold
            </div>
            <button
              onClick={() => handleBuyUpgrade(index)}
              className="bg-green-500 px-10 py-1 hover:bg-green-400 rounded-full self-end font-semibold
              "
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Upgrades;
