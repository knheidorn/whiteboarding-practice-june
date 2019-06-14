class Node {
    // constructor
    constructor(data)
    {
        this.value = data;
        this.next = null
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    add(value) {
    // creates a new node
    var node = new Node(value);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
        // iterate to the end of the
        // list
        while (current.next) {
            current = current.next;
        }
        // add node
        current.next = node;
    }
    this.size++;
  }
}

let list=new LinkedList
list.add(1)
list.add(8)
list.add(5)
list.add(6)
list.add(2)


function sumList(list, listTwo) {
  let firstNum = getNumber(list)
  let secNum = getNumber(listTwo)
  let answer = firstNum + secNum

  let answerArray  = answer.split("")
}

function reverseList(list) {
  let current = list.head
  let previous = null
  let array = []

  while (current) {
    array.unshift(current.value)
    next = current.next
    current.next = previous
    previous = current
    current = next
  }
  let number = parseFloat(array.join(""))
  return number
}

function switchPairs(array) {
  for (let i = 0; i < array.length; i += 2) {
    let temp = array[i]
    array[i] = array[i + 1]
    array[i + 1] = temp
  }
  return array
}

function setList(index, value, list) {
  let current = list.head
  let count = 0

  while (count < index) {
    count++
    current = current.next
  }

  current.value = value

  return list
}

function toString(list) {
  let current = list.head
  let string = "[ "

  while (current.next !== null) {
    string += current.value + ", "
    current = current.next
  }

  string += current.value + "]"

  return string
}

function deleteLast(list) {
  let current = list.head

  while (current.next.next) {
    current = current.next
  }

  let saved = current.next
  current.next = null
  return saved.value
}

function takeLower(list) {
  let item1 = this.head
  let item2 = list.head

  if (item1.data > item2.data) {
    this.head = item2
    list.head = item1
  }
  while(item1.next && item2.next) {
    if (item1.next.data > item2.next.data){
      let next = item1.next
      item1.next = item2.next
      item2.next = next
    }
    item1 = item1.next
    item2 = item2.next
  }

  return item1
}
