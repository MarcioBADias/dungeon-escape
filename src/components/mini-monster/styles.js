import styled from "styled-components";
import { TileSize } from "../../settings/constants";

export const MiniMonster = styled.div`
    animation: miniMonster-animation 1s steps(4) infinite;
    background-image: url('./assets/img/mini-monster.png');
    background-repeat: no-repeat;
    background-size: ${TileSize*4}px;
    bottom: ${TileSize*12}px;
    left: ${TileSize*2}px;
    height: 100px;
    position: absolute;
    width: ${TileSize}px;

    @keyframes miniMonster-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -${TileSize*4}px;
        }
    }
`