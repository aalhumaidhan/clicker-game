import React from "react";
import Monster from "./Monster";

function PlayerActions({
  gold,
  setGold,
  monsterHealth,
  handleClick,
  damagePerClick,
}) {
  function handleAttack() {
    handleClick(damagePerClick);
  }

  return (
    <>
      <p>Gold: {gold}</p>
      <button onClick={handleAttack}>
        Attack (Damage per Click: {damagePerClick})
      </button>
    </>
  );
}

export default PlayerActions;
