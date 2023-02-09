import styled from "styled-components";
import { TileSize } from "../../settings/constants";

export const Trap = styled.div`
    animation: trap-animation 1s steps(8) infinite;
    background-image: url('./assets/img/trap.png');
    background-repeat: no-repeat;
    background-size: ${TileSize*8}px;
    bottom: ${TileSize*8}px;
    left: ${TileSize*5}px;
    height: 100px;
    position: absolute;
    width: ${TileSize}px;

    @keyframes trap-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -${TileSize*8}px;
        }
    }
`