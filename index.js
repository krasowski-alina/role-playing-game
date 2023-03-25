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
function renderCharacters(data){
    const {id, name, health, diceCount, image} = data
    document.getElementById(id).innerHTML +=
`<div class="character-card">
        <h4 class="name"> ${name}</h4>
        <img class="avatar" src="${image}"/>
        <p class="health">health: <b> ${health}</b></p>
        <div class="dice-container"><div class="dice">${diceCount}</div></div>
</div>  
`
}
renderCharacters( hero)
renderCharacters( monster)




