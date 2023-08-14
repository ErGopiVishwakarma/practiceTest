let arr = [7,4,3,5,6,2,1,3,4,9]
// let init = new Date()
// for(let i =0; i<1000000000; i++){
//     console.log('gopi')
// }
let n = arr.length
for(let i=0; i<n; i++){
    let swap = false
    for(let j = 0; j<n-i-1; j++){
        if(arr[j]<arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            swap = true
        }
    }
    if(swap == false){
        break
    }
}
// console.log(new Date() - init)
console.log(arr)