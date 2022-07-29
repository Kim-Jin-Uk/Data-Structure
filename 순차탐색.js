const sequentialSearch = function(arr,key){
    let answer = 0
    arr.forEach((element, idx) => {
        if(element === key){
            answer = idx
        }
    })
    return answer
}

console.log(sequentialSearch([1,2,3,4,5,6,7,8,9,33,55],6))