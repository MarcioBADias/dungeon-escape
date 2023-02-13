import { useEffect, useState } from "react";

const MonsterMoviment = (initialPosition, moveTime) => {
    const [ monsterPosition, setMonsterPosition ] = useState(initialPosition);
    const [ monsterDirection, setMonsterDirection ] = useState('right');
    const randomIndex = Math.floor(Math.random()*4);

    const directions = { 
        left: 'left', 
        right: 'right', 
        up: 'up', 
        down: 'down' 
    }; 
    
    useEffect(() => {
        const interval = setInterval(() => {
                const moviments = {
                    up: { x:monsterPosition.x, y:monsterPosition.y +1 },
                    down: { x:monsterPosition.x, y:monsterPosition.y -1 },
                    right: { x:monsterPosition.x +1, y:monsterPosition.y },
                    left: { x:monsterPosition.x -1, y:monsterPosition.y }
                }
                const moveDirection = Object.keys(directions)[randomIndex];
              
                if(moviments.hasOwnProperty(moveDirection)) {
                    const newPosition = moviments[moveDirection];
                    setMonsterPosition(newPosition);
                    if(moveDirection === 'right'){
                        setMonsterDirection('right');
                    }else if(moveDirection === 'left'){
                        setMonsterDirection('left');
                    }
                }
            }
        ,moveTime*1000);
        
        return () => clearInterval(interval);
    }, [monsterPosition, directions, moveTime, randomIndex]);

    return { monsterPosition, monsterDirection }
}

export default MonsterMoviment;
