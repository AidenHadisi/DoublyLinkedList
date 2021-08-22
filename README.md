## DoublyLinkedList

> A lightweight doubly linked list library for JavaScript.

A Doubly Linked List library that allows insertion and deletion both at the end and the front of the list in constant time complexity. The library also provides pointers to both front and end of the list which allows easy traversal in either direction.

## Install

```
$ npm install @aidenhadisi/doublylinkedlist
```

Or using **yarn**

```
$ yarn add @aidenhadisi/doublylinkedlist
```

## Usage

### Adding Elements

```js
import { LinkedList } from "@aidenhadisi/doublylinkedlist";

//Specify data type you want to store in the list, for example number:
let list = new LinkedList<number>();

//Add an element to the end of the list
list.push(3)

//Add an element to the front of the list
list.unshift(5)

//Prints 2
console.log(list.length)
```

### Removing Elements

```js
//Remove an element from the end of the list
let element = list.pop();

//Remove an element from the front of the list
let element = list.shift();
```

### Accessing Data

```js
let element = list.pop();

// Value stored in the node
element.val;

// A pointer to the next element
element.next;

// A pointer to the previous element
element.prev;
```

### Traversal

Traverse the list from the front:

```js
let head = list.head;

while (head !== null) {
	console.log(head.val);
	head = head.next;
}
```

Traverse the list from the end:

```js
let tail = list.tail;

while (tail !== null) {
	console.log(tail.val);
	tail = tail.prev;
}
```

### Length

You can get the size of the list at any point using the `.length` getter. This property is stored and not computed; therefore, it has a constant time complexity.

```js
//Get the size of the list
console.log(list.length);
```

### toArray()

You can get a copy of the linkedlist in array format by calling the `toArray()` method. Note that time complexity of this method is O(n) as it needs to traverse through entire list.

```js
let array = list.toArray();
```
