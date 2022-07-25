class Queue {
    constructor(){
        let queueArr = []
        this.push = function(element){
            queueArr = [element].concat(queueArr)
        }
        this.pop = function(){
            queueArr.pop()
        }
        this.print = function(){
            const copy = [...queueArr]
            console.log(copy .reverse())
        }
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