class PriorityQueue {
    constructor(){
        class Node {
            constructor(element){
                this.data = element
                this.parent = null
                this.leftChild = null
                this.rightChild = null
                this.index = -1
            }
        }
        let root = null
        let current = null
        let len = 0 
        let printNode = []
        this.length = function(){
            return len
        }
        this.push = function(element){
            const node = new Node(element)
            node.index = len++
            if(root === null) root = node
            else{
                while(current.length){
                    const selectedNode = current.shift()
                    if(selectedNode.leftChild === null){
                        selectedNode.leftChild = node
                        node.parent = selectedNode
                        break
                    }
                    else if(selectedNode.rightChild === null){
                        selectedNode.rightChild = node
                        node.parent = selectedNode
                        break
                    }
                    else{
                        if(selectedNode.leftChild) current.push(selectedNode.leftChild)
                        if(selectedNode.rightChild)current.push(selectedNode.rightChild)
                    }
                }
            }
            const heapQue = [node]
            while(heapQue.length){
                const heap = heapQue.shift()
                const parent = heap.parent
                if(heap && heap.parent){
                    if(heap.data > parent.data){
                        const tmp = heap.data
                        heap.data = parent.data
                        parent.data = tmp
                        heapQue.push(parent)
                    } 
                }
            }
            current = [root]
        }
        this.pop = function(){
            const result = root.data
            root.data = - Number.MAX_VALUE
            const elements = [root]
            while(elements.length){
                this.printIn()
                const t = elements.shift()
                if(t.leftChild && t.rightChild){
                    if(t.leftChild.data < t.rightChild.data){
                        const tmp = t.data
                        t.data = t.rightChild.data
                        t.rightChild.data = tmp
                        elements.push(t.rightChild)
                    }else{
                        const tmp = t.data
                        t.data = t.leftChild.data
                        t.leftChild.data = tmp
                        elements.push(t.leftChild)
                    }
                }else if(t.leftChild){
                    const tmp = t.data
                    t.data = t.leftChild.data
                    t.leftChild.data = tmp
                    elements.push(t.leftChild)
                }else if(t.rightChild){
                    const tmp = t.data
                    t.data = t.rightChild.data
                    t.rightChild.data = tmp
                    elements.push(t.rightChild)
                }else{
                    const parent = t.parent
                    if(parent.leftChild && parent.leftChild.data === -Number.MAX_VALUE){
                        parent.leftChild = null
                    }else if(parent.rightChild && parent.rightChild.data === -Number.MAX_VALUE){
                        parent.rightChild = null
                    }
                } 
            }
            
            return result
        }
        this.printPre = function(){
            if(current === null) return console.log('none node')
            printNode = []
            this.preorder(current[0])
            console.log(printNode.join())
            printNode = []
        }
        this.printIn = function(){
            if(current === null) return console.log('none node')
            printNode = []
            this.inorder(current[0])
            console.log(printNode.join())
            printNode = []
        }
        this.printPost = function(){
            if(current === null) return console.log('none node')
            printNode = []
            this.postorder(current[0])
            console.log(printNode.join())
            printNode = []
        }
        this.preorder = function(node){
            if(node === null) return
            printNode.push(node.data)
            this.preorder(node.leftChild)
            this.preorder(node.rightChild)
        }
        this.inorder = function(node){
            if(node === null) return
            this.inorder(node.leftChild)
            printNode.push(node.data)
            this.inorder (node.rightChild)
        }
        this.postorder = function(node){
            if(node === null) return
            this.postorder(node.leftChild)
            this.postorder (node.rightChild)
            printNode.push(node.data)
        }
    }
}

const priorityQueue = new PriorityQueue()
priorityQueue.push(1)
priorityQueue.push(2)
priorityQueue.push(3)
priorityQueue.push(4)
priorityQueue.push(5)
priorityQueue.push(6)
priorityQueue.push(7)
priorityQueue.push(8)
priorityQueue.printIn() 
const max = priorityQueue.pop()
priorityQueue.printIn() 
