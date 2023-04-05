import Character from '/Character.js'
import CharacterData from './data.js'


document.getElementById('attack-button').addEventListener('click', attack
)
function attack(){
    render()
}
function render(){
    document.getElementById(wizard.id).innerHTML = wizard.getCharacters()
    document.getElementById(orc.id).innerHTML = orc.getCharacters()  
}

const wizard = new Character(CharacterData.hero)
const orc = new Character(CharacterData.monster)
render()







