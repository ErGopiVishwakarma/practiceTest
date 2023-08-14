let arr = [9,3,2,3,4,3,4,4]
let k = 5
let n = arr.length

let max_sum = 0

for(let i=0; i<k; i++){
    max_sum += arr[i]
}

let windwo_sum = max_sum

for(let i=k; i<n; i++){
    windwo_sum = windwo_sum-arr[i-k] + arr[i]
    max_sum = Math.max(windwo_sum,max_sum)
}
console.log(max_sum)