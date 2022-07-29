const arr2graph = function(arr){
    // element => [start, end, distance]
    const graph = {}
    arr.forEach(([start,end,distance])=>{
        if(graph[start]) graph[start].push([end,distance])
        else graph[start] = [[end,distance]]
    })
    return graph
}

const g = arr2graph([[0,1,1],[0,2,1],[0,3,2],[1,2,2],[1,3,3],[2,1,1],[2,0,2],[2,3,1]])
for(const key in g){
    console.log(key,g[key])
}