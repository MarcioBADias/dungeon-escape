import React from "react";
import { TileSize } from "../../settings/constants";
import HeroMoviment from "../hooks/heroMoviment";
import * as C from './styles'

const initialPosition = {
  x:4,
  y:10
}

const Hero = () => {
  const { heroPosition, heroDirection } = HeroMoviment(initialPosition);

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