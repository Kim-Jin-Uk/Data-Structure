class Queue {
    constructor() {
        this.storage = {}
        this.front = 0
        this.rear = 0
    }
    
    size() {
        if (this.storage[this.rear] === undefined) {
            return 0
        } else {
            return this.rear - this.rear + 1
        }
    }
    
    add(value) {
        if (this.size() === 0) {
            this.storage['0'] = value
        } else {
            this.rear += 1
            this.storage[this.rear] = value
        }
    }
    
    popleft() {
        let temp;
        if (this.front === this.rear) {
            temp = this.storage[this.front]
            delete this.storage[this.front]
            this.front = 0
            this.rear = 0
        } else {
            temp = this.storage[this.front]
            delete this.storage[this.front]
            this.front += 1
        }
        return temp
    }
}

const queue = new Queue()
queue.push(1)
queue.print()
queue.push(2)
queue.print()
queue.push(3)
queue.print()
queue.pop()
queue.print()
queue.push(4)
queue.print()
queue.push(5)
queue.print()
queue.pop()
queue.print()