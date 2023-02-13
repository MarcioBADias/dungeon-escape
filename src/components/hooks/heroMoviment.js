import { useEffect, useState } from "react";

const HeroMoviment = (initialPosition) => {
    const [ heroPosition, setHeroPosition ] = useState(initialPosition);
    const [ heroDirection, setHeroDirection ] = useState('right');

    useEffect(() => {
        const handleKeyUp = e => {
            const moviments = {
                ArrowUp: { x:heroPosition.x, y:Math.min(heroPosition.y +1,17) },
                w: { x:heroPosition.x, y:Math.min(heroPosition.y +1,17) },
                ArrowDown: { x:heroPosition.x, y:Math.max(heroPosition.y -1,1) },
                s: { x:heroPosition.x, y:Math.max(heroPosition.y -1,1) },
                ArrowRight: { x:Math.min(heroPosition.x +1,19), y:heroPosition.y },
                d: { x:Math.min(heroPosition.x +1,19), y:heroPosition.y },
                ArrowLeft: { x:Math.max(heroPosition.x -1,0), y:heroPosition.y },
                a: { x:Math.max(heroPosition.x -1,0), y:heroPosition.y }
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