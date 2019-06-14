//javascript codewars practice

function tickets(peopleInLine){
  var count25 = 0
  var count50 = 0

  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 100) {
      if (count25 >= 1 && count50 >= 1) {
        count25 --
        count50 --
      } else if (count25 >= 3) {
        count25 -= 3
      } else {
        return "NO"
      };
    } else if (peopleInLine[i] === 50) {
      if (count25 >= 1) {
        count25 --
        count50 ++
      } else {
        return "NO"
      }
    } else {
      count25 ++
    };
  };
  return "YES";
}

function isValidWalk(walk) {
  xx = 0
  yy = 0
  count = walk.length

  if (count === 10) {
    for (let i = 0; i < count; i++) {
      let direction = walk[i]

      if (direction === 'e') {
        xx++
      } else if (direction === 'w') {
        xx--
      } else if (direction === 'n') {
        yy++
      } else {
        yy--
      }
    }
    if (xx === 0 & yy === 0) {
      return "true"
    }
  };
}

function isTriangle(a,b,c)
{
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false
  }
  return true
}

function likes(names) {
  let length = names.length

  switch (length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names} likes this`;
    case 2:
      return `${names.join(" and ")} like this`
    case 3:
      let lastTwo = names.splice(Math.max(length - 2, 1))
      return `${names}, ${lastTwo.join(" and ")} like this`
    default:
      let remainder = names.splice(Math.max(2, 1))
      return `${names.join(", ")} and ${remainder.length} others like this`
  }
}

function spinWords(sentence){
  let answer = ""
  let array = sentence.split(" ")

  array.map(word => {
    if (word.length >= 5) {
      let reverseArray = word.split("")
      let temp = reverseArray.reverse()
      let reverse = temp.join("")
      answer += `${reverse} `
    } else {
      answer += `${word} `
    }
  })

  return answer.trim()
}

function getCount(str) {
  var vowelsCount = 0;
  let vowel = ["a", "e", "i", "o", "u"]

  for (i = 0; i < str.length; i++){
    if (vowel.includes(str[i])){
      vowelsCount += 1
    }
  }

  return vowelsCount;
}

function  closest(strng) {
  let array = strng.split(" ")
  let modifiedArray = []
  let potentialAns = []
  let objAns = {}

  array.forEach (num => {
    modifiedArray.push(parseFloat(num))
  })


  for (let i = 0; i < modifiedArray.length; i++) {
    let sum = 0
    let number = modifiedArray[i]

    while (number) {
      sum += number % 10
      number = Math.floor(number / 10)
    }
    potentialAns.push([sum, i, modifiedArray[i]])
  }

  potentialAns.sort((a, b) => a[0] - b[0])
  let ending = potentialAns.length - 1

  for (let i = 0; i < ending; i++){
    let start = potentialAns[i][0]
    let next = potentialAns[i + 1][0]
    let difference = next - start

    if (objAns[difference] === undefined){
      objAns[difference] = [potentialAns[i], potentialAns[i + 1]]
    }
  }
  let answer = Object.values(objAns)[0]
  return answer
}
