import styled from "styled-components";

export const Hero = styled.div`
    background-image: url('./assets/img/hero.png');
    background-repeat: no-repeat;
    height: 100px;
    width: 300px;

    @keyframes hero-animation {
        from{
            background-position-x: 0;
        }
        
        to{
            background-position-x: 192px;
        }
    }
`