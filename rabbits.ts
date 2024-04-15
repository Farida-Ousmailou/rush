function bunnyroad(instructions: string[]): { x: number, y: number } {
    let x = 0
    let y = 0
    for (let i : number = 0; i <= instructions.length;i++){
    
    if(instructions[i]===("droite")){
        x+=1

    } else if(instructions[i]===("gauche")) {
        x -= 1
    }

    if(instructions[i]===("nord")){
        y+=1
        
    } else if(instructions[i]===("sud")) {
        y -= 1
       
    }

    }
    return { x, y }
}

const inst = ['droite', 'droie', 'gauche', 'droite', 'nord', 'sud', 'nord','sud']
const positionFinale = bunnyroad(inst);
console.log(`Le lapin est à la position (${positionFinale.x}, ${positionFinale.y})`);
