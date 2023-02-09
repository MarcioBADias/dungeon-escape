import React from "react";
import { Container } from "reactstrap";
import Hero from "../hero";
import * as C from './styles';

const Board = () => {
    return (
        <div>
            <Hero />
            <C.Board src='./assets/img/tileset.gif' alt="Tabuleiro"/>
        </div>
    )
}

export default Board;