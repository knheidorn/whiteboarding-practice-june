function addTwo(array, target){
  let obj = {}
  let answer = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < target){
      obj[array[i]] = i
      let subtract = target - array[i]
      if (obj[subtract]!== undefined) {
        answer.push(obj[subtract])
        answer.push(i)
      }
    }
  }
  return answer
}
// const array = [2, 11, 15, 7, 3]
// addTwo(array, 9)


function palindromeCheck(string) {
  let array = string.split(" ")
  let newString = array.join("")
  let obj = {}

  for(let i = 0; i < newString.length; i++) {
    if(obj[newString[i]] !== undefined){
      obj[newString[i]] += 1
    } else {
      obj[newString[i]] = 1
    }
  }

  let values = Object.values(obj)
