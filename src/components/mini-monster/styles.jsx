import styled from "styled-components";
import { MediumSizeHeight, MediumSizePosition, MediumSizeWidth, TileSize } from "../../settings/constants";

export const MiniMonster = styled.div`
    animation: miniMonster-animation 1s steps(4) infinite;
    background-image: url('./assets/img/mini-monster.png');
    background-position-y: -${MediumSizePosition}px;
    background-repeat: no-repeat;
    background-size: ${MediumSizeWidth}px;
    height: ${MediumSizeHeight}px;
    position: absolute;
    width: ${TileSize}px;

    @keyframes miniMonster-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -${MediumSizeWidth}px;
        }
    }
`