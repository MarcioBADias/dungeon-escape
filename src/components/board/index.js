import React from "react";
import Hero from "../hero";
import Chest from "../chest";
import * as C from './styles';

const Board = () => {
    return (
        <div>
            <Hero />
            <Chest />
            <C.Board src='./assets/img/tileset.gif' alt="Tabuleiro"/>
        </div>
    )
}

export default Board;