import React from "react";
import Start from "./Start";
import { useState } from "react";
import Game from "./Game";
import DragonKing from "../GamePaths/DragonKing";
import { gamePath } from "../Context/GamePath";
import { useContext } from "react";

const Display = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const handleGameStart = (start) => {
    setGameStarted(start);
  };

  const { pathState, setPathState } = useContext(gamePath);
  const { dragon, android, cowboy } = pathState;

  return (
    <div className="displayContainer">
      <div className="display">
        {!dragon && !gameStarted && <Start onStart={handleGameStart} />}
        {!dragon && gameStarted && <Game />}
        {dragon ? <DragonKing /> : null}
      </div>
    </div>
  );
};

export default Display;
