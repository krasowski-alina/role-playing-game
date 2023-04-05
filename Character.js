import { generateDiceRoll, getDicePlaceholderHtml } from './utils.js'

function Character(data){
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(){
        this.currentDiceScore = generateDiceRoll(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }
    this.getCharacters = function(){
        const {name, health, image, diceArray} = this 

    return `<div class="character-card">
                <h4 class="name"> ${name}</h4>
                <img class="avatar" src="${image}"/>
                <div class="health"> health: <b> ${health} </b></div>
                <div class="dice-container">
                ${diceArray}
            </div>`
    }
}
export default Character