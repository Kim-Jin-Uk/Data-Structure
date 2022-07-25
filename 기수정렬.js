function radixSort(arr){
    const maxDigits = mostDigits(arr);

    for(let k = 0; k < maxDigits; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
        let digit = getDigit(arr[i], k)
        digitBuckets[digit].push(arr[i])
        }
        arr = [].concat(...digitBuckets)
    }
    return arr

    function getDigit(num, i) {
        return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
    }

    function digitCount(num) {
        return num.toString().length
    }

    function mostDigits(nums) {
        let maxDigits = 0;
        for (let i = 0; i < nums.length; i++) {
          maxDigits = Math.max(maxDigits, digitCount(nums[i]))
        }
        return maxDigits
    }
}

console.log(radixSort([2,12,33,76,43,4,5,7,9]))