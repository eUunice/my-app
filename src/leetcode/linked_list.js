const printLinkedList = () => {
    // for (let i = 0; i < input.length; i++){
    //   console.log(input[i]);
    // }

    let node = MyLinkedList.prototype.head;

    for (; node != null;) {
        console.log(node.val)
        /////
        node = node.next
    }
}



/////////////////////////////////////

let input = ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]

var MyLinkedList = function (val) {
    this.head = null
    this.tail = null
    //
    this.val = val
    this.next = null
};

/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function (index) {
    const newNode = new MyLinkedList(index)
    if (index < 0) {
        let curNode = this.head;
        let cont = 0;
        while (index > cont) {
            cont++;
        };

    }
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new MyLinkedList(val)

    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head

    }
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new MyLinkedList(val)
    //
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
    const newNode = new MyLinkedList(val)

  let node = this.head;
  console.log(node.next);
  let prevNode = null;

  for (let i = 0; i < index; i++) {
      if (node !== null) {
          prevNode = node;
          node = node.next;
      } else {
          break;

      }
  }

  if (index != 0) {
    prevNode.next = newNode;
    newNode.next = node;
}

};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0)
        return;

    let node = this.head;
    let prevNode = null;

    for (let counter = 0; counter < index; counter++) {
        if (node != null) {
            prevNode = node;
            node = node.next;
        } else {
            break;
        }
    }

    if (index == 0) {// is head
        this.head = node.next
    } else if (node.next == null) {// is tail
        this.tail = prevNode
        prevNode.next = null
    } else {// is middle
        prevNode.next = node.next
    }

    // console.log("target", node.val)
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/

/////////////////////////////////////

const testLinkedLists = () => {
    input.forEach(item => {
        MyLinkedList.prototype.addAtTail(item)
    })

    printLinkedList()
    console.log('');

    MyLinkedList.prototype.addAtIndex(2, 'HI')
    printLinkedList()
}

window.MyLinkedList = MyLinkedList

