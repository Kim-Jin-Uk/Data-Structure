class BinaryTree {
    constructor(){
        class Node {
            constructor(element){
                this.data = element
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
                        break
                    }
                    else if(selectedNode.rightChild === null){
                        selectedNode.rightChild = node
                        break
                    }
                    else{
                        if(selectedNode.leftChild) current.push(selectedNode.leftChild)
                        if(selectedNode.rightChild)current.push(selectedNode.rightChild)
                    }
                }
            }
            current = [root]
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

const binaryTree = new BinaryTree()
binaryTree.push(1)
binaryTree.push(2)
binaryTree.push(3)
binaryTree.push(4)
binaryTree.push(5)
binaryTree.push(6)
binaryTree.push(7)
binaryTree.push(8)
binaryTree.printPre() 
binaryTree.printIn() 
binaryTree.printPost()