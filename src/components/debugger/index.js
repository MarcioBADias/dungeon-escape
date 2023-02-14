import React from "react";
import { gridRules } from "../../settings/constants";
import Tile from "./tile";

const getGridMap = () => {
    return gridRules.map((gridY, y) => {
      return gridY.map((gridYX, x) => {
        const position = { x, y };
        const marking = gridYX;
        const key = `${x}-${y}`;
        return <Tile key={key} position={position} marking={marking} />;
      });
    });
  };
  

const Debugger = () => {
    const tiles = getGridMap();
    return(
        <div>
           {tiles}
        </div>
    )
}

export default Debugger;