// Data와 pointer인 next, prev를 가지고 있는 Node 객체
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
  
// Head, tail, length를 가지고 있는 DoublyLinkedList 객체
class DoublyLinkedList {
    constructor() {
        let head = null;
        let tail = null;
        let length = 0;
        this.size = function () {
            return this.length;
        }
        this.printNode = function () {
            console.log("head -> ");
            for (let node = head; node != null; node = node.next) {
                console.log(`${node.data} ->`);
            }
            console.log("null");
        }
        this.printNodeInverse = function () {
            let temp = [];
            console.log("null <- ");
            for (let node = tail; node != null; node = node.prev) {
              temp.push(node.data);
            }
            for (let i = temp.length - 1; i >= 0; i--) {
              console.log(`${temp[i]} <-`);
            }
            console.log("tail");
        }
        this.append = function (value) {
            let node = new Node(value);
          
            if (head === null) {
              head = node;
              tail = node;
            } else {
              tail.next = node;
              node.prev = tail;
              tail = node;
            }
          
            length++;
        }
        this.insert = function (value, position = 0) {
            if (position < 0 || position > length) {
              return false;
            }
          
            let node = new Node(value);
            let current = head;
            let index = 0;
            let prev; // 이전 노드 값 저장
          
            if (position === 0) {
              if (head === null) {
                head = node;
                tail = node;
              } else {
                node.next = current;
                current.prev = node;
                head = node;
              }
            } else if (position === length) {
              current = tail;
              current.next = node;
              node.prev = current;
              tail = node;
            } else {
              while (index++ < position) {
                prev = current;
                current = current.next;
              }
              node.next = current;
              prev.next = node;
          
              current.prev = node;
              node.prev = prev;
            }
            length++
          
            return true;
        }
        this.remove = function (value) {
            let current = head;
            let prev = current;
          
            while (current.data != value && current.next != null) {
              prev = current;
              current = current.next;
            }
          
            if (current.data != value) {
              return null;
            }
          
            if (current === head) {
              head = current.next;
              if (length === 1) tail = null;
              else this.head.prev = null;
            } else if (current === tail) {
              tail = current.prev;
              tail.next = null;
            } else {
              prev.next = current.next;
              current.next.prev = prev;
            }
          
            length--;
          
            return current.data;
        }
        this.removeAt = function (position = 0) {
            if (position < 0 || position >= length) {
              return null;
            }
          
            let current = head;
            let index = 0;
            let prev;
          
            if (position === 0) {
              head = current.next;
              if (length === 1) tail = null;
              else head.prev = null;
            } else if (position === length - 1) {
              current = tail;
              tail = current.prev;
              tail.next = null;
            } else {
              while (index++ < position) {
                prev = current;
                current = current.next;
              }
              prev.next = current.next;
              current.next.prev = prev;
            }
          
            length--;
          
            return current.data;
        }
    }
}

const link = new DoublyLinkedList()
link.append(1)
link.append(2)
link.append(3)
link.insert(4,1)
link.printNode()
link.remove(2)
link.printNode()