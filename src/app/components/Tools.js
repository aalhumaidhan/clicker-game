import React from "react";
import { useState } from "react";
import Home from "../page";

function Tools({ damagePerClick, setDamagePerClick }) {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    {
      name: "Sword",
      description: "A sword that slashes the monsters and deals more damage!",
      damage: 25,
      name: "Ray Gun",
      description:
        "A ray gun that shoots laser beams and blinds the monster momentarily!",
      damage: 50,
      name: "Flamethrower",
      description: "A flamethrower, the name speaks for itself!",
      damage: 100,
    },
  ];

  function handleTool(tool) {
    setSelectedTool(tool);
    setDamagePerClick(tool.damage);
  }
  return (
    <div className="upgrade-options-container p-4 border rounded-lg shadow-md max-w-md text-center">
    <h2 className="text-2xl font-bold mb-4">Get ready to supercharge your game!</h2>
    <p className="mb-6 text-gray-700">
      Players can spend their hard-earned currency to unlock upgrades that make their clicks more powerful, reduce costs
    </p>

    <div className="tool-selection">
      <h3 className="text-xl font-semibold mb-3">Choose your tool to raid the monster:</h3>
      <div className="grid grid-cols-1 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={tool-item p-3 border rounded-lg cursor-pointer hover:bg-gray-200 ${
              ...selectedTool.name === tool.name ? "bg-green-200" : "";
            }
            onClick={() => handleTool(tool)}
          >
            <h4 className="font-bold">{tool.name}</h4>
            <p className="text-gray-600">{tool.description}</p>
            <p className="text-sm">Damage: {tool.damage}</p>
          </div>
        ))}
      </div>
    </div>
    {selectedTool && (
      <div className="mt-4 p-2 text-sm text-green-800 bg-green-100 rounded">
        You've selected the <strong>{selectedTool.name}</strong> with a damage of <strong>{selectedTool.damage}</strong>!
      </div>
    )}
  </div>
  
  
  );
}

export default Tools;
