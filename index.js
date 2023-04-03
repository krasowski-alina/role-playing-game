import Character from '/Character.js'
import CharacterData from './data.js'

function render(){
    const wizard = new Character(CharacterData.hero)
    document.getElementById(wizard.id).innerHTML = wizard.getCharacters()
    
    const orc = new Character(CharacterData.monster)
    document.getElementById(orc.id).innerHTML = orc.getCharacters()
    
}
render()







