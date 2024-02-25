class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  //push at the end of list
  push(value) {
    const newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //remove at the end of list
  pop() {
    if (this.head === null) {
      console.log("Nothing is in the LinkedList");
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      let pre = this.head;

      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      return temp;
      //if we want to get the popped value then we can return the temp
    }
    // return this;
    //for same chaining concept we can use here
    this.length--;
  }

  //remove the head node element
  shift() {
    if (this.head === null) {
      return;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return this;
  }

  //adding the element at the start of the linkedlist
  unshift(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //printing the node
  printList() {
    if (this.head == null) {
      console.log("List is empty");
    } else {
      //1,2
      let temp = this.head; //1
      let i = 0;
      //   condition true
      while (temp !== null) {
        console.log(`Node ${i} value:`, temp.value);

        temp = temp.next;
        i++;
      }
    }
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(8).push(44).push(85);
myLinkedList.unshift(78).unshift(20).unshift(50);

myLinkedList.shift(70).shift(30);
myLinkedList.printList();
