import styled from "styled-components";
import { SmallSize, TileSize } from "../../settings/constants";

export const Chest = styled.div`
    animation: chest-animation 1s steps(3) infinite;
    background-image: url('./assets/img/chest.png');
    background-repeat: no-repeat;
    background-size: ${SmallSize}px;
    top: ${TileSize*5}px;
    left: ${TileSize*12}px;
    height: ${TileSize}px;
    position: absolute;
    width: ${TileSize}px;

    @keyframes chest-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -${SmallSize}px;
        }
    }
`