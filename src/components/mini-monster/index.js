import React from "react";
import { MediumSize, TileSize } from "../../settings/constants";
import MonsterMoviment from "../hooks/monsterMoviment";
import * as C from './styles'

const MiniMonster = ({ initialPosition }) => {
    const { monsterPosition, monsterDirection } = MonsterMoviment(initialPosition,.5);


    return (
        <C.MiniMonster
            style={{
                top: `${TileSize*monsterPosition.y-MediumSize}px`,
                left: `${TileSize*monsterPosition.x}px`,
                transform: `scaleX(${monsterDirection === 'right'? 1 : -1})`
        }}/>
    )
}

export default MiniMonster;