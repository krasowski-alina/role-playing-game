import { generateDiceRoll } from './utils.js'
function Character(data){
    Object.assign(this, data)
    
    this.getDiceHtml = function(diceCount){
        return generateDiceRoll(diceCount).map(dice => {
            return `<div class="dice">${dice}</div>`
        }).join('')
    }
    this.getCharacters = function(){
        const {id, name, health, diceCount, image} = this 
        const diceHtml = this.getDiceHtml(diceCount)
    return `<div class="character-card">
                <h4 class="name"> ${name}</h4>
                <img class="avatar" src="${image}"/>
                <div class="health"> health: <b> ${health} </b></div>
                <div class="dice-container">
                ${diceHtml}
            </div>`
    }
}
export default Character