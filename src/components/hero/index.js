import React, { useEffect, useState } from "react";
import { TileSize } from "../../settings/constants";
import * as C from './styles'

const positionInicital = {
    x:4,
    y:10
}
const Hero = () => {
    const [ heroPosition, setHeroPosition ] = useState(positionInicital);
    const [ heroDirection, setHeroSirection ] = useState('right');

    useEffect(() => {
      const handleKeyUp = e => {
        if(e.key === 'ArrowUp' || e.key === 'w'){
          const newPosition = { x:heroPosition.x, y:++heroPosition.y };
          setHeroPosition(newPosition);
        }
        if(e.key === 'ArrowDown' || e.key === 's'){
          const newPosition = { x:heroPosition.x, y:--heroPosition.y };
          setHeroPosition(newPosition);
        }
        if(e.key === 'ArrowRight' || e.key === 'd'){
          const newPosition = { x:++heroPosition.x, y:heroPosition.y };
          setHeroPosition(newPosition);
          setHeroSirection('right');
        }
        if(e.key === 'ArrowLeft' || e.key === 'a'){
          const newPosition = { x:--heroPosition.x, y:heroPosition.y };
          setHeroPosition(newPosition);
          setHeroSirection('left')
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
            transform: `scaleX(${heroDirection === 'right'? 1 : -1})`
        }}/>
    )
}

export default Hero;