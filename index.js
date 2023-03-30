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
function generateDiceRoll(diceCount){
    return new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random()* 6) + 1  
    })

}
function getDiceHtml(diceCount){
    return generateDiceRoll(diceCount).map(dice => {
        return `<div class="dice">${dice}</div>`
    }).join('')
}
function renderCharacters(data){
    const {id, name, health, diceCount, image} = data
    const diceHtml = getDiceHtml(diceCount)

    document.getElementById(id).innerHTML =
`<div class="character-card">
        <h4 class="name"> ${name}</h4>
        <img class="avatar" src="${image}"/>
        <div class="health"> health: <b> ${health} </b></div>
        <div class="dice-container">
        ${diceHtml}
        </div>
</div>  
`
}
renderCharacters( hero)
renderCharacters( monster)




