const hero = {
    id: "hero",
    name: 'Wizard',
    health: 60,
    diceCount: 3,
    diceRoll: [2, 5, 1],
    image: 'images/wizard.png',
    
}
const monster = {
    id: "monster",
    name: 'Orc',
    health: 10,
    diceCount: 1,
    diceRoll: [3],
    image: 'images/orc.png',
    
}
function renderCharacters(data){
    const {id, name, health, diceCount, diceRoll, image} = data
    const diceHtml = diceRoll.map(dice => {
        return  `<div class="dice">${dice}</div>`
    }).join(' ')

    document.getElementById(id).innerHTML +=
`<div class="character-card">
        <h4 class="name"> ${name}</h4>
        <img class="avatar" src="${image}"/>
        <p class="health">health: <b> ${health}</b></p>
        <div class="dice-container">
        ${diceHtml}
        </div>
</div>  
`
}
renderCharacters( hero)
renderCharacters( monster)




