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

  //adding the element at the end of the linkedlist
  shift(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
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
  printList(text) {
    if (this.head == null) {
      console.log("List is empty");
    } else {
      //1,2
      let temp = this.head; //1
      let i = 0;
      console.log(text + "\n\n\n\n");
      //   condition true
      while (temp !== null) {
        console.log(`Node ${i} value:`, temp.value);

        temp = temp.next;
        i++;
      }
    }
  }

  //enter index and get the value at that index
  get(index) {
    let temp = this.head;
    if (index > 0 && index <= this.length) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      console.log(`At node ${index} value:`, temp.value);
    } else {
      console.log("index is out of bounds");
    }
  }

  //enter the value at the index
  set(index, value) {
    const newNode = new Node(value);
    if (index > 0 && index <= this.length) {
      let temp = this.head;
      let pre = temp;
      for (let i = 0; i < index; i++) {
        pre = temp;
        temp = temp.next;
      }
      pre.next = newNode;
      newNode.next = temp;
      this.length++;
    } else {
      console.log("index is out of bounds");
    }
  }
  //change the value at the index
  changeValueAtIndex(index, value) {
    if (index > 0 && index <= this.length) {
      let temp = this.head;

      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      temp.value = value;
    } else {
      console.log("index is out of bounds");
    }
  }

  //delete the value at the index
  deleteAtIndex(index) {
    if (index > 0 && index <= this.length) {
      let temp = this.head;
      let pre = temp;
      for (let i = 0; i < index; i++) {
        pre = temp;
        temp = temp.next;
      }
      pre.next = temp.next;

      this.length--;
    } else {
      console.log("index is out of bounds");
    }
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(8).push(44).push(85);
myLinkedList.unshift(78).unshift(20).unshift(50);

myLinkedList.shift(70).shift(30);
myLinkedList.printList("after the change");
myLinkedList.get(2);
myLinkedList.changeValueAtIndex(2, 55);
myLinkedList.printList("check after the change value at the index ");
myLinkedList.deleteAtIndex(2);
myLinkedList.printList("check after the delete value at the index ");
