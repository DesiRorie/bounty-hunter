import React from "react";

const Game = () => {
  return (
    <div className="gameContainer">
      <h2>Welcome to Bounty Hunter</h2>
      <p>Which path would you like to take </p>
      <div className="pathContainer">
        <div className="paths">Dragon King</div>
        <div className="paths">Android 115</div>
        <div className="paths">Cowboy X</div>
      </div>
    </div>
  );
};

export default Game;
