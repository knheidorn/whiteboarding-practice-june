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
