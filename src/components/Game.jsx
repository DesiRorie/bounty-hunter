import React from "react";
import { Link } from "react-router-dom";
import { gamePath } from "../Context/GamePath";
import { useContext } from "react";

const Game = () => {
  const { pathState, setPathState } = useContext(gamePath);
  const { dragon, android, cowboy } = pathState;
  const toggleDragon = () => {
    setPathState((prevState) => ({
      ...prevState,
      dragon: !prevState.dragon,
    }));
  };
  const toggleCowboy = () => {
    setPathState((prevState) => ({
      ...prevState,
      cowboy: !prevState.cowboy,
    }));
  };
  const toggleAndroid = () => {
    setPathState((prevState) => ({
      ...prevState,
      android: !prevState.android,
    }));
  };

  return (
    <div className="gameContainer">
      <h2>Welcome to Bounty Hunter</h2>
      <p>Which path would you like to take </p>
      <div className="pathContainer">
        <div className="paths">
          <h3 onClick={toggleDragon}>Dragon King</h3>
        </div>
        <div className="paths">
          <h3 onClick={toggleAndroid}>Android 115</h3>
        </div>
        <div className="paths">
          <h3 onClick={toggleCowboy}>Cowboy X</h3>
        </div>
      </div>
    </div>
  );
};

export default Game;
