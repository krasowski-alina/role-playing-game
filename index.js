import Character from '/Character.js'
import CharacterData from './data.js'


document.getElementById('attack-button').addEventListener('click', attack
)
function attack(){
    wizard.getDiceHtml()
    orc.getDiceHtml()
    render()
}
function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacters()
    document.getElementById('monster').innerHTML = orc.getCharacters()  
}

const wizard = new Character(CharacterData.hero)
const orc = new Character(CharacterData.monster)
render()







