class Droid extends Character {
    constructor(name, model, id, primaryFunction) {
        super(name, 'Droid', 'N/A', id); // Droids don't have homeworld
        this.model = model;
        this.primaryFunction = primaryFunction;
    }
}