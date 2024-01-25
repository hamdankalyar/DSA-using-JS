class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }
    push(value){
        const newNode = new Node(value);
        if(this.head === null && this.tail === null){
            this.head= newNode;
            this.tail=this.head;
        
        }
        else{
            
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
        // using this keyword we can call the method chaining concept 
        // this also return the whole object on which it is working 
        //by using this we call call push(0).push(0) because of "this"
        /** 
         * Chaining: The returned object (this) can then be used to call another method on it immediately after the previous call. Because push returns this, which is the instance myLinkedList, you can call myLinkedList.push(8).push(12). The first push method returns myLinkedList, so the second push is called on myLinkedList as well.
        */
        
        
        // what is method chaining ....
        // Method chaining is a common design pattern in object-oriented programming that allows you to call multiple methods on the same object in a single line of code by having each method return the object itself. In JavaScript, this pattern is facilitated by the this keyword within class methods.
    }
}
let myLinkedList = new LinkedList(4);
myLinkedList.push(8)