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

  pop() {
    if (this.head === null) {
      console.log("Nothing is in the LinkedList");
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let temp = this.head;
      let pre = this.head;

      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      return temp;
      //if we want to get the popped value then we can return the temp
    }
    // return this;
    //for same chaining concept we can use here
  }
}
let myLinkedList = new LinkedList(4);
myLinkedList.push(8).push(44).push(85);
console.log(myLinkedList);
let returnPopValue = myLinkedList.pop();
console.log(returnPopValue);
