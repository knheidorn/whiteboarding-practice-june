class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let node = new Node(value)
    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
}

function addTwoNumbers(l1, l2) {
    let current1 = l1.head
    let current2 = l2.head
    let num1 = []
    let num2 = []

    while(current1) {
        num1.unshift(current1.data)
        current1 = current1.next
    }

    while(current2) {
        num2.unshift(current2.data)
        current2 = current2.next
    }

    let sum = parseFloat(num1.join("")) + parseFloat(num2.join(""))

    let answer = sum.toString().split("").reverse()
    let answerList = new LinkedList

    for(let i = 0; i < answer.length; i++){
      answerList.add(parseFloat(answer[i]))
    }
    return answerList
};
