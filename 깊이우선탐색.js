const DFS = function(graph,start,length){
    // 탐색을 위한 스택
    let stack = graph[start]
    // 방문처리 배열
    const visited = new Array(length+1).fill(0)
    // 방문 초기화
    visited[0] = visited[start] = 1
    // 방문 순서 확인
    const route = [start]

    while(stack.length){
        // 스택에서 하나씩 빼기
        const element = stack.pop()
        // 방문했다면 스킵
        if(visited[element]) continue
        route.push(element)
        visited[element] = 1
        for(const e of graph[element]){
            stack.push(e)
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

console.log(DFS(g,1,8))