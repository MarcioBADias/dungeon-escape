import React from "react";
import { TileSize } from "../../settings/constants";
import MonsterMoviment from "../hooks/monsterMoviment";
import * as C from './styles';

const Demon = ({ initialPosition }) => {
    const { monsterPosition, monsterDirection } = MonsterMoviment(initialPosition,1);

    return (
        <C.Demon
            style={{
            top: `${TileSize*monsterPosition.y}px`,
            left: `${TileSize*monsterPosition.x}px`,
            transform: `scaleX(${monsterDirection === 'right'? 1 : -1})`
        }}/>
    )
}

export default Demon;