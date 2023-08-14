let arr = [1,2,3,4]
let max = -Infinity
for(let i=0 ;i<arr.length; i++){
    let x = arr[i]
    let low = i+1
    let high = arr.length-1
   while(low<high){
    let product = x*arr[low]*arr[high]
    if(product>max){
        max=product
    }
    low++
   }
}
console.log(max)