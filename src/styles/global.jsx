import styled, { createGlobalStyle } from "styled-components";
import { GameSize } from "../settings/constants";

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Press+Start+2P&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --bg-color: #b92a44;
    }

    body{
        background-color: var(--bg-color);
        background-image: url('./assets/bg-rpgGameBody.svg');
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export const GameArea = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

export const BoardArea = styled.div`
    position: relative;
    height: ${GameSize}px;
    width: ${GameSize}px;
`;

export default Global;