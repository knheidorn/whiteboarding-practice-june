//Linked List Notes

class LinkedList {
  constructor() {
      this.head = null;
  }
}

class Node {
  constructor(){
    this.value = value;
    this.next = null;
  }
}

function findDuplicates(list) {
  let current = list.head
  let seen = {}
  while (current.next !== null) {
    seen[current.value] = true
    if (seen[current.next.value]){
      let temp = current.next
      current.next = temp.next
      temp.next = null
    }
    current = current.next
  }
  return list
}

function reverseList(list) {
  let current = list.head
  let previous = null

  while (current) {
    let temp = current.next.value
    current.next.value = previous
    let previous = current
    current = temp
  }
  list.head = previous
  return list
}
