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
  if(newString.length % 2 === 0){
   for (let i = 0; i < values.length; i++){
     if(values[i] % 2 !== 0){
       return false
     }
   }
 } else {
   let count = 0
   for (let i = 0; i < values.length; i++) {
     if(values[i] % 2 !== 0){
       count++
     }
   } if (count > 1) {
     return false
   }
 }
 return true
}

// const string = "race  cart"
// palindromeCheck(string)
