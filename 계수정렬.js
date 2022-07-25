function countingSort(arr){
    const counter = new Array(Math.max(...arr)+1).fill(0)
    for(const num of arr){
        counter[num] ++
    }
    let start = 0
    for(let count = 0; count < counter.length; count++){
        for(let idx = 0; idx < counter[count]; idx++){
            arr[start+idx] = count 
        }
        start += counter[count]
    }
    return arr
}

console.log(countingSort([2,1,4,5,7,9,0,8,3,3,3,2]))