function quickSort(arr){
    quick(0,arr.length-1) 
    return arr
    function quick(start,end){
        if(start >= end) return
        let[key,i,j] = [start,start+1,end]
        while(i <= j){ //엇갈릴때까지 반복
            while(i <= end && arr[i] <= arr[key]) i++
            while(j > start && arr[j] >= arr[key]) j--
            if(i>j){
                const originValue = arr[key]
                arr[key] = arr[j]
                arr[j] = originValue
            }else{
                const originValue = arr[i]
                arr[i] = arr[j]
                arr[j] = originValue
            }
        }
        quick(start,j-1)
        quick(j+1,end)
    }
}

console.log(quickSort([2,1,4,5,7,9,0,8,3,3,3,2]))