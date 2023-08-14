let arr = [1,2,3,4,5,4,3,4,5,6,7,8,9,8,7,6,7,8,9]
let n = arr.length
let k=5;
let ans = ""
for(let i=0;i <n-k; i++){
    let max = arr[i]
    for(let j=1; j<k; j++){
        if(arr[i+j] > max){
            max = arr[i+j]
        }
    }
    ans+=max+" "
}
console.log(ans)