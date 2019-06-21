// functional programming / higher-order functions

let animals = [
  { name: 'Rafa', species: 'dog'},
  { name: 'Harley', species: 'dog'},
  { name: 'Aella', species: 'cat'},
  { name: 'Ursula', species: 'fish'},
  { name: 'Jimmy', species: 'rabbit'}
]
/* filter out all just the dog species in this array
1st example is a traditional for loop
*/

function filterDogs(array) {
  let dogs = []

  for (let i = 0; i < array.length; i++) {
    if (array[i].species === 'dog') {
      dogs.push(array[i])
    }
  }

  return dogs
}

// functional programming example
function filterAnimals(array) {
  let isDog = function(animal) {
    return animal.species === 'dog'
  }

  let dogs = array.filter(isDog)

  return (dogs)
}
