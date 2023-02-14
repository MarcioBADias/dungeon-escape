import styled from "styled-components";
import { LargeSizeWidth, TileSize } from "../../settings/constants";

export const Trap = styled.div`
    animation: trap-animation 1s steps(8) infinite;
    background-image: url('./assets/img/trap.png');
    background-repeat: no-repeat;
    background-size: ${LargeSizeWidth}px;
    top: ${TileSize*8}px;
    left: ${TileSize*5}px;
    height: ${TileSize}px;
    position: absolute;
    width: ${TileSize}px;

    @keyframes trap-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -${LargeSizeWidth}px;
        }
    }
`