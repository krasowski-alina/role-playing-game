// import Character from '/Character.js'
const hero = {
    id: "hero",
    name: 'Wizard',
    health: 60,
    diceCount: 3,
    image: 'images/wizard.png',
    
}
const monster = {
    id: "monster",
    name: 'Orc',
    health: 10,
    diceCount: 1,
    image: 'images/orc.png',
    
}
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
function render(){
    const wizard = new Character(hero)
    document.getElementById('hero').innerHTML = wizard.getCharacters()
    
    const orc = new Character(monster)
    document.getElementById('monster').innerHTML = orc.getCharacters()
    
}
render()

function generateDiceRoll(diceCount){
    return new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random()* 6) + 1  
    })

}





