import React, { useEffect, useState } from "react";
import { TileSize } from "../../settings/constants";
import * as C from './styles'

const positionInicital = {
    x:4,
    y:10
}
const Hero = () => {
    const [ heroPosition, setHeroPosition ] = useState(positionInicital);

    useEffect(() => {
        const handleKeyUp = (event) => {
          if(event.key === 'ArrowUp' || event.key === 'w'){
            const newPosition = { x:4, y:heroPosition.y++ };
            setHeroPosition(newPosition);
          }
          if(event.key === 'ArrowDown' || event.key === 's'){
            const newPosition = { x:4, y:heroPosition.y-- };
            setHeroPosition(newPosition);
          }
          if(event.key === 'ArrowRight' || event.key === 'd'){
            const newPosition = { x:heroPosition.x++, y:heroPosition.y };
            setHeroPosition(newPosition);
          }
          if(event.key === 'ArrowLeft' || event.key === 'a'){
            const newPosition = { x:heroPosition.x--, y:heroPosition.y };
            setHeroPosition(newPosition);
          }
        };
      
        window.addEventListener("keyup", handleKeyUp);
      
        return () => {
          window.removeEventListener("keyup", handleKeyUp);
        };
    }, [heroPosition.x, heroPosition.y]);
      

    return (
        <C.Hero
        style={{
            bottom: `${TileSize*heroPosition.y}px`,
            left: `${TileSize*heroPosition.x}px`,
        }}/>
    )
}

export default Hero;