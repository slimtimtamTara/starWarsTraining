class Character {
    constructor(name, species, planet, id) {
        this.name = name;
        this.species = species;
        this.planet = planet;
        this.id = id
    }

    getDescription() {
        return `${this.name} is a ${this.species} from ${this.planet}.`;
    }
}

export default Character