import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DragonKing from "./GamePaths/DragonKing";

import "./App.css";
import Display from "./components/Display";
import Title from "./components/Title";
import { gamePath } from "./Context/GamePath";

function App() {
  const [pathState, setPathState] = useState({
    dragon: false,
    android: false,
    cowboy: false,
  });
  return (
    <>
      <gamePath.Provider value={{ pathState, setPathState }}>
        <Title />
        <Display />
        {/* <Routes> */}
        {/* <Route path="/dragonking" element={<DragonKing />} /> */}
        {/* </Routes> */}
      </gamePath.Provider>
    </>
  );
}

export default App;
