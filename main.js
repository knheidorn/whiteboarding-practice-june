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
