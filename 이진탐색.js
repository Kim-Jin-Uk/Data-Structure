const binarySearch = function(arr,key){
    let start = 0
    let end = arr.length-1
    while(start < end){
        const mid = Math.ceil((start+end)/2)
        console.log(arr,start,mid,end)
        if(arr[mid] > key) end = mid-1
        else if(arr[mid] < key) start = mid
        else return mid
    }
    return start
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,33],33))