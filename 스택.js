class Stack {
    constructor(){
        const stackArr = []
        this.push = function(element){
            stackArr.push(element)
        }
        this.pop = function(){
            return stackArr.pop()
        }
        this.print = function(){
            console.log(stackArr)
        }
    } 
}

const stack = new Stack()
stack.push(1)
stack.print()
stack.push(2)
stack.print()
stack.push(3)
stack.print()
stack.pop()
stack.print()
stack.push(4)
stack.print()
stack.push(5)
stack.print()
stack.pop()
stack.print()