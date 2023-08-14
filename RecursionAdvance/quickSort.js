let arr = [23, 45, 24, 12, 7, 5, 39, 2, 53, 8]
let n = arr.length

let quickSort = (arr, low, high)=>{    
    if(low<high){
        let pivot = partitionFun(arr,low,high)
        quickSort(arr,low,pivot-1)
        quickSort(arr,pivot+1,high)
    }    
}
const partitionFun = (arr,low,high)=>{
    let pivot = arr[high]
    let i = low -1
    for(let j=low; j<high; j++){
        if(arr[j]<=pivot){
            i++
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
    i++
    let temp = arr[i]
    arr[i] = pivot
    arr[high] = temp
    return i;
}
quickSort(arr,0,n-1)
console.log(arr)