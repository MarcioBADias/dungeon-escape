import styled from "styled-components";
import { TileSize } from "../../../settings/constants";

export const Tile = styled.div`
    /* visibility: hidden; */
    position: absolute;
    width: ${TileSize}px;
    height: ${TileSize}px;
    z-index: 2;
`;
