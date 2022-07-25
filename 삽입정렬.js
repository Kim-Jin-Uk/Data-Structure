function insertionSort(arr){
    for(let idx = 0; idx < arr.length; idx++){
        let insertIdx = idx
        while(insertIdx >= 0 && arr[insertIdx] > arr[insertIdx+1]){
            const originValue = arr[insertIdx+1]
            arr[insertIdx+1] = arr[insertIdx]
            arr[insertIdx] = originValue
            insertIdx--
        }
    }
    return arr
}

console.log(insertionSort([2,1,4,5,7,9,0,8,3,3,3,2]))