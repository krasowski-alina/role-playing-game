function generateDiceRoll(diceCount){
    return new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random()* 6) + 1  
    })
}
export {generateDiceRoll}

function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill(0).map(() => {
        return  `<div class="placeholder-dice"></div>`
    }).join('')
}
export {getDicePlaceholderHtml}
