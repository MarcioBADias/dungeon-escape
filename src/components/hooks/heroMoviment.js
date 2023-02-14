import { useEffect, useState } from "react";
import { checkValidMoviment } from "../../settings/constants";

const HeroMoviment = (initialPosition) => {
    const [ heroPosition, setHeroPosition ] = useState(initialPosition);
    const [ heroDirection, setHeroDirection ] = useState('right');

    useEffect(() => {
        const handleKeyUp = e => {
            const moviments = {
                ArrowUp: { x:heroPosition.x, y:heroPosition.y -1 },
                w: { x:heroPosition.x, y:heroPosition.y -1 },
                ArrowDown: { x:heroPosition.x, y:heroPosition.y +1 },
                s: { x:heroPosition.x, y:heroPosition.y +1 },
                ArrowRight: { x:heroPosition.x +1, y:heroPosition.y },
                d: { x:heroPosition.x +1, y:heroPosition.y },
                ArrowLeft: { x:heroPosition.x -1, y:heroPosition.y },
                a: { x:heroPosition.x -1, y:heroPosition.y }
            }
            const nextPosition = moviments[e.key];
          
            if(nextPosition && checkValidMoviment(nextPosition)){
                setHeroPosition(nextPosition);
                if(nextPosition === 'ArrowRight' || nextPosition === 'd'){
                    setHeroDirection('right');
                }else if(nextPosition === 'ArrowLeft' || nextPosition === 'a'){
                    setHeroDirection('left');
                }            
            }
        };

        window.addEventListener('keydown', handleKeyUp);
        
        return () => {
            window.removeEventListener('keydown', handleKeyUp);
        };
    }, [heroPosition]);

    return { heroPosition, heroDirection }
}

export default HeroMoviment;