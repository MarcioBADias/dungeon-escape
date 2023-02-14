import React from "react";
import { TileSize } from "../../../settings/constants";
import * as C from './styles';

const colorMap = {
    0: 'green',
    1: 'red'
};
  
const getColorTile = (marking) => colorMap[marking] || 'unknown';

const Tile = ({ position, marking }) => {
    const color = getColorTile(marking);

    return (
        <C.Tile 
            style={{
                left: TileSize * position.x,
                top: TileSize * position.y,
                color: color,
                border: `1px solid ${color}`
            }}
        >
            {marking}
        </C.Tile>
    )
}


export default Tile;