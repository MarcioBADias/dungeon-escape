import styled from "styled-components";
import { TileSize } from "../../settings/constants";

export const Demon = styled.div`
    animation: demon-animation 1s steps(4) infinite;
    background-image: url('./assets/img/demon.png');
    background-repeat: no-repeat;
    background-size: ${TileSize*8}px;
    bottom: ${TileSize*6}px;
    left: ${TileSize*16}px;
    height: 100px;
    position: absolute;
    width: ${TileSize*2}px;

    @keyframes demon-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -${TileSize*8}px;
        }
    }
`