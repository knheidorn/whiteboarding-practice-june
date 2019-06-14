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

  while (current) {
    seen[current.value] = true
    if (seen[current.next.value]){
      if (current.next.next) {
        let temp = current.next
        current.next = temp.next
        temp.next = null
      } else {
        current.next = null
      }
    }
    current = current.next
  }
  return list
}

function reverseList(list) {
  let current = list.head
  let previous = null

  while (current) {
    next = current.next
    current.next = previous
    previous = current
    current = next
  }
  return previous
}

let list = {
    head: {
        value: 12,
        next: {
            value: 99,
            next: {
                value: 37,
                next: null
            }
        }
    }
};
