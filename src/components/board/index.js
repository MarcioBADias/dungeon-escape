import React, { useEffect, useState } from "react";
import Hero from "../hero";
import Chest from "../chest";
import * as C from './styles';
import Demon from "../demon";
import MiniMonster from "../mini-monster";
import Trap from "../trap";
import { gridRules } from "../../settings/constants";

const getElementsOnMap = () => {
  return gridRules.map((gridY, y) => {
    return gridY.map((gridYX, x) => {
      const position = { x, y };
      const marking = gridYX;
      const key = `${x}-${y}`;
      if (marking === 3) {
        return <Trap key={key} initialPosition={position} />;
      }
      if (marking === 4) {
        return <MiniMonster key={key} initialPosition={position} />;
      }
      if (marking === 5) {
        return <Demon key={key} initialPosition={position} />;
      }
      if (marking === 6) {
        return <Chest key={key} initialPosition={position} />;
      }
      if (marking === 7) {
        return <Hero key={key} initialPosition={position} />;
      }
      return null; // É necessário retornar algo em todos os casos
    });
  }).flat(); // É necessário "achatar" o array de elementos
};

const Board = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(getElementsOnMap());
  }, []);

  return (
    <div>
      {elements}
      <C.Board src='./assets/img/tileset.gif' alt="Tabuleiro"/>
    </div>
  );
};

export default Board;
