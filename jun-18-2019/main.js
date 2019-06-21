//linked list and binary trees

//deleting node from linked list

function deletingNode(list, index) {
  let current = list.head
  let count = 0

  while (current) {
    if (count < index) {
      count += 1
      current = current.next
    } else if (count === index) {
      let temp = current.next
      current.next = current.next.next
      current = temp
    } else {
      current = current.next
    }
  }
}

function deletingNodeInList(value) {
  let current = this.head

  if (current.value === value) {
    this.head = this.head.next
  } else {
    
  }
}
