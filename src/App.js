import React from "react";
import Board from "./components/board";
import Global, { BoardArea, GameArea } from "./styles/global";

function App() {
  return (
    <>
      <Global/>
      <GameArea>
        <BoardArea>
          <Board/>
        </BoardArea>
      </GameArea>
    </>

  );
}

export default App;
