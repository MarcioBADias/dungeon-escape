import React from "react";
import { TileSize } from "../../settings/constants";
import MonsterMoviment from "../hooks/monsterMoviment";
import * as C from './styles';

const Demon = () => {
    const { monsterPosition, monsterDirection } = MonsterMoviment({x:20,y:9},1);

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