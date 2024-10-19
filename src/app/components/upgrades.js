"use client";

import { useState } from "react";

function Upgrades({ gold, setGold, damagePerClick, setDamagePerClick }) {
  const [upgrades, setUpgrades] = useState([
    { name: "Double Click Damage", cost: 100, multiplier: 2 },
    {
      name: "Increase Hero Efficiency",
      cost: 200,
      multiplier: 1.5,
    },
  ]);

  const handleBuyUpgrade = (upgradeIndex) => {
    const upgrade = upgrades[upgradeIndex];

    // Check if the player has enough gold to buy the upgrade
    if (gold >= upgrade.cost) {
      // Deduct the cost from the player's gold
      setGold(gold - upgrade.cost);

      // Apply the upgrade (e.g., increase damage per click)
      if (upgrade.name === "Double Click Damage") {
        setDamagePerClick(damagePerClick * upgrade.multiplier);
      }

      // Optionally, you can increase the cost of the upgrade for future purchases
      const newUpgrades = [...upgrades];
      newUpgrades[upgradeIndex].cost = Math.floor(upgrade.cost * 1.5); // Increase cost by 50%
      setUpgrades(newUpgrades);
    } else {
      alert("Not enough gold to buy this upgrade!");
    }
  };

  return (
    <div className="upgrades">
      <h3>Upgrades</h3>
      <ul>
        {upgrades.map((upgrade, index) => (
          <li key={index}>
            {upgrade.name} - Cost: {upgrade.cost} Gold
            <button onClick={() => handleBuyUpgrade(index)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Upgrades;
