function Node(value){
	this.value = value;
	this.next = null;
	this.previous = null;
}

function LinkedList(){
	this.head = null;
	this.tail = null;
	this.length = 0;
}

// push - This function should add a node to the end of the LinkedList. It should return the new the list so that the method can be chained.

LinkedList.prototype.push = function(value){
	let node = new Node(value);

	if (!this.head && !this.tail){
		this.head = node;
		this.tail = this.head;
	} else {
		node.previous = this.tail;
		this.tail.next = node;
		this.tail = this.tail.next;
	}

	this.length++;

	return this;
}

// pop - This function should remove a node at the end of the LinkedList. It should return the node removed.

LinkedList.prototype.pop = function(){
	if (this.head === null){
		return undefined;
	}

	if (this.length === 1){
		let value = this.head.value;
		this.head = null;
		this.tail = null;
		this.length--;
		return value;
	}
	
	let node = this.tail;
	let previous = this.tail.previous;

	previous.next = null;
	node.previous = null;
	this.tail = previous;
	this.length--;

	return node.value;
}

// unshift - This function should add a node to the beginning of the LinkedList. It should return the list so that the method can be chained.

LinkedList.prototype.unshift = function(value){
	if (this.length === 0){
		this.push(value);
		return this
	}

	let node = new Node(value);

	node.next = this.head;
	this.head.previous = node;
	this.head = node;
	this.length++;

	return this;
}

// shift - This function should remove a node at the beginning of the LinkedList. It should return the node removed.

LinkedList.prototype.shift = function(){
	if (this.head === null) {
		return undefined;
	}

	if (this.length === 1){
		let value = this.head.value;
		this.head = null;
		this.tail = null;
		this.length--;
		return value;
	}

	let newHead = this.head.next;
	let element = this.head;
	element.next = null;
	this.head = newHead;
	this.head.previous = null;
	this.length--;

	return element.value;
}

// count - returns the total number of elemets
LinkedList.prototype.count = function(){
  let count = 0;
  let node = this.head;

  if (node !== null) {
    count += 1;
  } else {
    return 0;
  }

  while (node.next !== null) {
    count++;
    node = node.next;
  }

  return this.length;
}

// set - This function should find a node and replace its val or return undefined if the node is not found.

LinkedList.prototype.set = function(index, value){
	if (index > this.length - 1){
		return null;
	}

	if (index < this.length / 2){
		let current = this.head;
		let next = this.head;
		let count = -1;

		while(current){
			if (index === count){
				current.value = value;
				return;
			}

			current = next;
			next = current.next;
			count++;
		}
	} else {
		let current = this.tail;
		let previous = this.tail;
		let count = this.length;

		while (current){
			if (index === count){
				current.value = value;
				return;
			}

			current = previous;
			previous = current.previous;
			count--;
		}
	}

}

// get - This internal/helper function should find a node at a specified index in a LinkedList. It should return the found node.

LinkedList.prototype.get = function(index){
	if (index > this.length - 1){
		return null;
	}

	if (index < this.length / 2){
		let current = this.head;
		let next = this.head;
		let count = -1;

		while(current){
			if (index === count){
				return current.value;
			}

			current = next;
			next = current.next;
			count++;
		}
	} else {
		let current = this.tail;
		let previous = this.tail;
		let count = this.length;

		while (current){
			if (index === count){
				return current.value;
			}

			current = previous;
			previous = current.previous;
			count--;
		}
	}
}

// insert - This internal/helper function should insert a node at a specified index in a LinkedList. It should return the new length of the LinkedList.

LinkedList.prototype.insert = function(index, value){
	if (index > this.length - 1){
		return null;
	}

	let node = new Node(value);

	if (index === 0){
		this.unShift(value);
		return this.length;
	}

	if (index === this.length - 1){
		this.push(value);
		return this.length;
	}

	if (index < this.length / 2){
		let current = this.head;
		let next = this.head;
		let count = -1;

		while(current){
			if (index === count){
				let previous = current.previous;
				previous.next = node;
				current.previous = node;
				node.next = current;
				node.previous = previous;
				this.length++;
				return this.length;
			}

			current = next;
			next = current.next;
			count++;
		}
	} else {
		let current = this.tail;
		let previous = this.tail;
		let count = this.length;

		while (current){
			if (index === count){
				let next = current.next;
				previous.next = node;
				current.previous = node;
				node.next = current;
				node.previous = previous;
				this.length++;
				return this.length;
			}

			current = previous;
			previous = current.previous;
			count--;
		}
	}

}

// delete - Removes a specific node

LinkedList.prototype.delete = function(val){
  if (this.head.value === val) {
    return this.shift();
  }

  if (this.tail.value === val) {
    return this.pop();
  }

  let current = this.head;
  let next = this.head.next;
  let index = 0;

  while (current) {
    if (current.value === val) {
      return this.remove(index);
    } else {
      current = next;
      next = current.next;
      index++;
    }
  }

}

// remove - This function should remove a node at a specified index in a LinkedList. It should return the removed node.

LinkedList.prototype.remove = function(index){
	if (index > this.length - 1){
		return null;
	}

	if (index === 0){
		let node = this.shift();
		return node;
	}

	if (index === this.length - 1){
		let node = this.pop();
		return node;
	}

	if (index < this.length / 2){
		let current = this.head;
		let next = this.head;
		let count = -1;

		while(current){
			if (index === count){
				let previous = current.previous;
				previous.next = next;
				next.previous = previous;
				current.next = null;
				current.previous = null;
				this.length--;
				return current;
			}

			current = next;
			next = current.next;
			count++;
		}
	} else {
		let current = this.tail;
		let previous = this.tail;
		let count = this.length;

		while (current){
			if (index === count){
				let next = current.next;
				previous.next = next;
				next.previous = previous;
				current.next = null;
				current.previous = null;
				this.length--;
				return current;
			}

			current = previous;
			previous = current.previous;
			count--;
		}
	}

}

// reverse - This function should reverse all of the nodes in a LinkedList. It should return the reversed LinkedList.

LinkedList.prototype.reverse = function(){
	if (this.length === 2) {
		let temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.head.next = temp;
	}

	let tempList = [];
	let current = this.head;

	while (current){
		tempList.push(current.value);
		current = current.next;
	}

	let count = 0;

	while (tempList.length > 0){
		this.set(count, tempList.pop());
		count++;
	}

	return this.printValues();
}

// printValues - A helper function to neatly display the values in the linked list.

LinkedList.prototype.printValues = function(){
	let nodeValues = [];
	let node = this.head;

	while (node) {
		nodeValues.push(node.value);
		node = node.next;
	}

	return nodeValues;
}

module.exports = LinkedList;
