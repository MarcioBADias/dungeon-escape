import React from "react";
import Board from "./components/board";
import Debugger from "./components/debugger";
import Global, { BoardArea, GameArea } from "./styles/global";

function App() {
  return (
    <>
      <Global/>
      <GameArea>
        <BoardArea>
          <Debugger/>
          <Board/>
        </BoardArea>
      </GameArea>
    </>

  );
}

export default App;
