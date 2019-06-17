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
