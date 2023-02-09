import styled from "styled-components";
import { TileSize } from "../../settings/constants";

export const Hero = styled.div`
    animation: hero-animation 1s steps(4) infinite;
    background-image: url('./assets/img/hero.png');
    background-repeat: no-repeat;
    bottom: 48px;
    left: 0;
    height: 100px;
    position: absolute;
    width: ${TileSize}px;

    @keyframes hero-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -192px;
        }
    }
`