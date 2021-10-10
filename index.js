//Linked List

//Always start with a node

//The node points to the value and the next and prev values

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null; //value if not next then its null
    this.prev = prev || null; //ditto above just for prev this time
  }
}

//LINKEDLIST
//set size of the linked list
//point to the first node
//point to the last node
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  //The linked list functions go below

  //PREPEND
  //adds to front of list
  //passes through a value parameter
  //iterates the list
  //Creates entry as a new node
  //and sets the address of the node to head
  //declares if there is no head,
  //set the value as the head
  //and then return this
  prepend(value) {
    this.size++;
    const node = new Node(value, this.head);
    this.head = node;
    if (!this.head) this.head = value;
    return this;
  }
  //APPEND
  //adds to the end of the list (implement a counter)
  //passes through a value parameter
  //iterates the list
  //Creates entry as a new node
  //and sets the address of the node to tail
  //declares if there is no tail,
  //set the value as the tail
  //and then return this
  append(value) {
    this.size++;
    const node = new Node(value, this.tail);
    this.tail = node;
    if (!this.tail) this.tail = value;
    return this;
  }
  //SEARCH
  //allows you to find a value in the list
  //passes through a value parameter
  //if value === value[i]
  //return value
  //To do this:
  //set a variable for match to head
  //while variable is true and
  //if variable value === target value
  //return that variable
  //if variable is not a match move to .next of that variable
  //if variable is never found, return null
  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  //FIND
  //initialize counter (index) to represent position of found node relative to head node, set it to 0
  //initialize currentNode and set it to head
  //traverse the linked list using a while loop
  //keep iterating while currentNode.value isn't met by target value
  //and while currentNode is not empty
  //reassign currentNode pointer to point to next currentNode (currentNode.next)
  //increment counter
  //
  //return (counter >= 0 ? counter : -1)
  find(value) {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode.value !== value && currentNode) {
      //while curr value is not equal to target value and curr node exists
      currentNode = currentNode.next;
      counter++;
    }
    return counter >= 0 ? counter : -1;
  }
  //REMOVE
  //is the SLL empty?
  //is there a previous and next value?
  //are we removing the head
  //are we removing the tail
  //are we removing in the middle?
  //find the node we want to remove
  //want to identify the previous node and the next node
  //after the node is removed, do we need to change the head and the tail?

  //DELETE HEAD
  //simple command that just deletes the HEAD of list
  deleteHead() {}

  //DELETE TAIL
  //simple command that just deletes the TAIL of list
  deleteTail() {}

  //PUSH
  //adds node to the end of the list
  //passes the value as parameter
  push(value) {}

  //POP
  //removes node from end of the list
  pop() {}

  //SHIFT
  //removes first item in the list
  shift() {}

  //UNSHIFT
  //you can also unshift the shift
  unshift() {}

  //GETNODEATINDEX
  //return node at given index
  //passes index as a parameter
  getNodeAtIndex(index) {}

  //PRINT
  //prints the:
  //Head - Tail - and list size
  print() {
    console.log('HEAD:', this.head);
    console.log('TAIL:', this.tail);
    console.log('SIZE:', this.size);
    console.log(JSON.stringify(this, null, 2));
  }
}

//Declare and instantiate the linkedlist
const list = new LinkedList();

console.log(list.prepend(10));
console.log(list.prepend(20));
console.log(list.prepend(30));
console.log(list.prepend(40));
console.log(list.append(20));
console.log(list.search(20));
