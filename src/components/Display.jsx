import React from "react";
import Start from "./Start";
import { useState } from "react";
import Game from "./Game";

const Display = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const handleGameStart = (start) => {
    setGameStarted(start);
  };

  return (
    <div className="displayContainer">
      <div className="display">
        {!gameStarted && <Start onStart={handleGameStart} />}
        {gameStarted && <Game />}
      </div>
    </div>
  );
};

export default Display;
