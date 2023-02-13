import { useEffect, useState } from "react";

const HeroMoviment = (initialPosition) => {
    const [ heroPosition, setHeroPosition ] = useState(initialPosition);
    const [ heroDirection, setHeroDirection ] = useState('right');

    useEffect(() => {
        const handleKeyUp = e => {
            const moviments = {
                ArrowUp: { x:heroPosition.x, y:heroPosition.y +1 },
                w: { x:heroPosition.x, y:heroPosition.y +1 },
                ArrowDown: { x:heroPosition.x, y:heroPosition.y -1 },
                s: { x:heroPosition.x, y:heroPosition.y -1 },
                ArrowRight: { x:heroPosition.x +1, y:heroPosition.y },
                d: { x:heroPosition.x +1, y:heroPosition.y },
                ArrowLeft: { x:heroPosition.x -1, y:heroPosition.y },
                a: { x:heroPosition.x -1, y:heroPosition.y }
            }
            const key = e.key;
          
            if(moviments.hasOwnProperty(key)) {
                const newPosition = moviments[key];
                setHeroPosition(newPosition);
                if(key === 'ArrowRight' || key === 'd'){
                    setHeroDirection('right');
                }else if(key === 'ArrowLeft' || key === 'a'){
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