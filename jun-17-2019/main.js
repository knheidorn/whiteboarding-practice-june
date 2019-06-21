/* recursion
practiceit.cs.washington.edu*/

function writeChars(n) {
  if (n < 1) {
    return "invalid"
  } else if (n === 1) {
    return ("*")
  } else if (n === 2) {
    return ("**")
  } else {
    return ("<" + writeChars(n - 2) + ">")
  }
}

function factorial(n) {
  if (n === 0) {
    return "invalid"
  } else if (n === 1) {
    return n
  } else {
    return (n * factorial(n-1))
  }
}

function multiplyEvens(n) {
  if (n <= 0) {
    return "invalid"
  } else if (n === 1) {
    return 2
  } else {
    return (n * 2 * multiplyEven(n - 1))
  }
}

function starString(n) {
  if (n === 0) {
    return "*"
  } else if (n === 1) {
    return "**"
  } else {
    return starString(n - 1) + starString(n - 1)
  }
}

function sumTo(n) {
  if (n < 0) {
    return "invalid"
  } else if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return (1/n + sumTo(n-1))
  }
}

function writeNums(n) {
  if (n < 1) {
    return "invalid"
  } else if (n === 1){
    return "1"
  } else {
    return writeNums(n -1) + ", " + n
  }
}

// linked list
function reverse(list) {
  let current = list.head
  let previous = null
  let newList = {}

  while (current) {
    let temp = current.next
    current.next = previous
    previous = current
    current = temp
  }
  newList["head"] = previous
  return newList
}

function evenSum(list) {
  let current = list.head
  let answer = 0

  while (current.next) {
    answer = current.value + answer
    current = current.next.next
  }

  return answer + current.value
}

function switchPairs(list) {
  let current = list.head
  let previous = null

  while (current.next) {
    let temp = current.next
    current.next = current
    previous = temp
    current = current.next.next
  }
  return previous
}
