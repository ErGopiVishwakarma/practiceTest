// you have given a array and target value k you need to find if the target value in exist in the array then simply return index of the element if not present
// then return the index of the value where it should be come in the order 

let arr = [1,3,4,5,9,10]
let n = arr.length;

let missing = (n,arr,k)=>{
    let low =0;
    let high =n-1;
    let mid;
    while(low<=high){
        mid = Math.floor((low+high)/2)
        if(arr[mid] == k){
            return mid
        }else if(arr[mid] > k){
            high--
        }else{
            low++
        }
    }
    if(low<n){
        return mid
    }else{
        return mid+1
    }
}

console.log(missing(n,arr,11))