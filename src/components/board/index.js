import React from "react";
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
        return marking === 7 && <Hero key={key} initialPosition={position} />;
      });
    });
  };

const hero = getElementsOnMap();

const Board = () => {
    return (
        <div>
            {hero}
            <Trap />
            <Demon />
            <MiniMonster />
            <MiniMonster />
            <MiniMonster />
            <MiniMonster />
            <Chest />
            <C.Board src='./assets/img/tileset.gif' alt="Tabuleiro"/>
        </div>
    )
}

export default Board;