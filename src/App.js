import React from "react";
import { Container } from "reactstrap";
import Board from "./components/board";
import { GameSize } from "./settings/constants";
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
