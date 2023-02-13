import React from "react";
import { TileSize } from "../../settings/constants";
import MonsterMoviment from "../hooks/monsterMoviment";
import * as C from './styles';

const initialPosition = {
    x:Math.floor(Math.random()*20),
    y:Math.floor(Math.random()*17)
}

const Demon = () => {
    const { monsterPosition, monsterDirection } = MonsterMoviment(initialPosition,1);

    return (
        <C.Demon
            style={{
            bottom: `${TileSize*monsterPosition.y}px`,
            left: `${TileSize*monsterPosition.x}px`,
            transform: `scaleX(${monsterDirection === 'right'? 1 : -1})`
        }}/>
    )
}

export default Demon;