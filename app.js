import data from './data/characters.json' assert {type: 'json'}
import Character from './models/character.js'

function main() {
    console.log("Hello World!")

    const characterOptions = data.characters

    for (let i = 0; i < characterOptions.length; i++){
        var currentCharacter = characterOptions[i]
        console.log(currentCharacter)
        var formatCharacterData = new Character("","","","")

        if (currentCharacter.name == "Ben"){
            formatCharacterData.name = currentCharacter.name
            formatCharacterData.species = "Human"
            formatCharacterData.planet = currentCharacter.planet
            formatCharacterData.id = "2"
        } else {
            // do something
        }
        console.log(formatCharacterData)
    }
  
}
// run node app.js in terminal to test
main()