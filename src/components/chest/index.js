import React from "react";
import { TileSize } from "../../settings/constants";
import * as C from './styles'

const Chest = ({ initialPosition }) => {
    return (
        <C.Chest
            style={{
                top: `${TileSize*initialPosition.y}px`,
                left: `${TileSize*initialPosition.x}px`,
        }}/>
    )
}

export default Chest;