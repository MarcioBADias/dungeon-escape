import React from "react";
import { TileSize } from "../../settings/constants";
import * as C from './styles'

const Trap = ({ initialPosition }) => {
    return (
        <C.Trap
            style={{
                top: `${TileSize*initialPosition.y}px`,
                left: `${TileSize*initialPosition.x}px`,
            }}/>
    )
}

export default Trap;