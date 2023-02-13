import styled from "styled-components";
import { MediumSizeHeight, MediumSizePosition, MediumSizeWidth, TileSize } from "../../settings/constants";

export const Hero = styled.div`
    animation: hero-animation 1s steps(4) infinite;
    background-image: url('./assets/img/hero.png');
    background-position: 0 -${MediumSizePosition}px;
    background-repeat: no-repeat;
    background-size: ${MediumSizeWidth}px;
    height: ${MediumSizeHeight}px;
    position: absolute;
    width: ${TileSize}px;
    z-index: 1;

    @keyframes hero-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -${MediumSizeWidth}px;
        }
    }
`