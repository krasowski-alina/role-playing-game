function Character(data){
    Object.assign(this, data)
    
    this.getCharacters = function(){
        const {id, name, health, diceCount, image} = this 
        const diceHtml = getDiceHtml(diceCount)
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