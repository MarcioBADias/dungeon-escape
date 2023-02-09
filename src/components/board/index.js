import React from "react";
import Hero from "../hero";
import Chest from "../chest";
import * as C from './styles';
import Demon from "../demon";
import MiniMonster from "../mini-monster";

const Board = () => {
    return (
        <div>
            <Hero />
            <Demon />
            <MiniMonster/>
            <Chest />
            <C.Board src='./assets/img/tileset.gif' alt="Tabuleiro"/>
        </div>
    )
}

export default Board;