import { useEffect, useState } from "react";

const MonsterMoviment = (initialPosition, moveTime) => {
    const [ monsterPosition, setMonsterPosition ] = useState(initialPosition);
    const [ monsterDirection, setMonsterDirection ] = useState('right'); 
    
    const randomIndex = Math.floor(Math.random()*4);

    useEffect(() => {

        const directions = { 
            left: 'left', 
            right: 'right', 
            up: 'up', 
            down: 'down' 
        };

        const monsterMove = setInterval(() => {
            const moviments = {
                up: { x:monsterPosition.x, y:Math.min(monsterPosition.y +1,17) },
                down: { x:monsterPosition.x, y:Math.max(monsterPosition.y -1,1) },
                right: { x:Math.min(monsterPosition.x +1,19), y:monsterPosition.y },
                left: { x:Math.max(monsterPosition.x -1,0), y:monsterPosition.y }
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
        
    return () => clearInterval(monsterMove);
}, [monsterPosition, moveTime, randomIndex]);

return { monsterPosition, monsterDirection }
}

export default MonsterMoviment;
