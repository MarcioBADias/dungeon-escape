import React from "react";
import { TileSize } from "../../settings/constants";
import MonsterMoviment from "../hooks/monsterMoviment";
import * as C from './styles'

const MiniMonster = () => {
    const { monsterPosition, monsterDirection } = MonsterMoviment({x:2,y:12},.5);


    return (
        <C.MiniMonster
            style={{
                bottom: `${TileSize*monsterPosition.y}px`,
                left: `${TileSize*monsterPosition.x}px`,
                transform: `scaleX(${monsterDirection === 'right'? 1 : -1})`
        }}/>
    )
}

export default MiniMonster;