import styled from "styled-components";
import { TileSize } from "../../settings/constants";

export const Chest = styled.div`
    animation: chest-animation 1s steps(3) infinite;
    background-image: url('./assets/img/chest.png');
    background-repeat: no-repeat;
    background-size: ${TileSize*3}px;
    bottom: ${TileSize*5}px;
    left: ${TileSize*12}px;
    height: 100px;
    position: absolute;
    width: ${TileSize}px;

    @keyframes chest-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -${TileSize*3}px;
        }
    }
`