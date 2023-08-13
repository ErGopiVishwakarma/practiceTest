let arr = [1,2,3,4,5,6]

let isSorted = (arr,ind)=>{
    if(arr.length-1 === ind){
        return true
    }
    if(arr[ind] < arr[ind+1]){
        return isSorted(arr,ind+1)
    }else{
        return false
    }
}

console.log(isSorted(arr,0))