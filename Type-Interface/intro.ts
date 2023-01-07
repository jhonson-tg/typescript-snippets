type Animal = {
    name: string;
}

type Herbivore = Animal & {
    consumePlant(plant: string): string;
}

class Cow implements Herbivore {
    name = "Cow"
    consumePlant = (plant: string): string => {
        return `${plant} waste`;
    }
}

const cow = new Cow();
console.log(cow.name);
console.log(cow.consumePlant("Grass"));