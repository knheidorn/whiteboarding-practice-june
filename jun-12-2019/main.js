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
