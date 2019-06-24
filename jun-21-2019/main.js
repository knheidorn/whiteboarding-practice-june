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

/*map examples - more functional programming
1st is the for-loop version next will be the map
*/
function getNames(array) {
  let names = []

  for (let i = 0; i < array.length; i++) {
    names.push(array[i].name)
  }
  return names
}

function getNamesMap(array) {
  let names = array.map((animal) => animal.name)
  return names
}

/* reduce example
1st is the for-loop version - next will be the reduce
*/

let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

function sumNums(array) {
  let total = 0

  for(let i = 0; i < array.length; i++) {
    total += array[i].amount
  }
}

function sumNumsReduce(array) {
  let total = array.reduce((sum, order) => {
    return sum + order.amount
  }, 0)
}

/* more details on whiteboarding questions in general
Specifically working on the twoSums problem - focusing on
making sure that given an array and a target number
it will check and give different returns

main method to solve these is hashes!!
*/
/* this one returns the INDEX of the pairs
also assumes that only ONE pair in the array MAX */

function twoSum(nums, target) {
  let hash = {}
  let answer = []

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]

    if (hash[difference.toString()] !== undefined) {
      let differenceIndex = hash[difference.toString()]
      answer.push(differenceIndex, i)
      return answer
    }
    hash[nums[i].toString()] = i
  }

  return false
};

/* this one returns the pairs
may return more than one pair of sums */

function twoSum(array, target) {
  let hash = {}
  let answer = []

  for (let i = 0; i < array.length; i++) {
    let difference = target - array[i]

    if (hash[difference.toString()] !== undefined) {
      answer.push(array[i], difference)
    }
    hash[array[i].toString()] =  i
  }

  if (answer.length !== 0) {
    return answer
  } else {
    return false
  }
}
