function selectionSort(arr){
    for(let start = 0; start < arr.length; start++){
        let minValue = arr[start]
        let minIdx = start
        for(let end = start+1; end < arr.length; end++){
            if(minValue > arr[end]){
                minValue = arr[end]
                minIdx = end
            }
        }
        arr[minIdx] = arr[start]
        arr[start] = minValue
    }
    return arr
}

console.log(selectionSort([2,1,4,5,7,9,0,8,3,3,3,2]))