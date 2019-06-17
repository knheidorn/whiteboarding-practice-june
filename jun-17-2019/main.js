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
