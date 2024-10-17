import React from "react";

function PlayerActions() {
  const [gold, setGold] = useState(0);

  function handleAttack() {}

  return (
    <>
      <p>{gold}</p>
      <button onClick={handleAttack}>Attack </button>
    </>
  );
}

export default PlayerActions;
