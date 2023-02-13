import styled from "styled-components";
import { LargeSizeWidth, LargeTileSize, TileSize } from "../../settings/constants";

export const Demon = styled.div`
    animation: demon-animation 1s steps(4) infinite;
    background-image: url('./assets/img/demon.png');
    background-repeat: no-repeat;
    background-size: ${LargeSizeWidth}px;
    height: ${LargeTileSize}px;
    position: absolute;
    width: ${LargeTileSize}px;

    @keyframes demon-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: -${LargeSizeWidth}px;
        }
    }
`