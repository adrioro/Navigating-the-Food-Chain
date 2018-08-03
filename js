// change the values of `eatsPlants` and `eatsAnimals` to test your code

var eatsPlants = false;
var eatsAnimals = false;


var category = eatsPlants ? (eatsAnimals ? 'omnivore' : 'herbivore') : (eatsAnimals ? 'carnivore' : '');

console.log(category);
