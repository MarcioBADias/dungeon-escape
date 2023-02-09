import React from "react";
import { Container } from "reactstrap";
import Hero from "../hero";

const Board = () => {
    return (
        <Container>
            <Hero />
            <img src='./assets/img/tileset.gif' alt="Tabuleiro"/>
        </Container>
    )
}

export default Board;