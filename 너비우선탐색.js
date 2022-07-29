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

const BFS = function(graph,start,length){
    // 탐색을 위한 큐
    let queue = new Queue()
    for(const element of graph[start]){
        queue.add(element)
    }
    // 방문처리 배열
    const visited = new Array(length+1).fill(0)
    // 방문 초기화
    visited[0] = visited[start] = 1
    // 방문 순서 확인
    const route = [start]
    while(queue.size()){
        // 큐에서 하나씩 빼기
        const element = queue.popleft()
        // 방문했다면 스킵
        if(visited[element]) continue
        route.push(element)
        visited[element] = 1
        for(const e of graph[element]){
            queue.add(e)
        }
    }
    return route
}


const g = {
    1:[8,3,2],
    2:[7,1],
    3:[5,4,1],
    4:[5,3],
    5:[4,3],
    6:[7],
    7:[8,6,2],
    8:[7,1]
}

console.log(BFS(g,1,8))