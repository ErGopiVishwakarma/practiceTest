let arr = [23, 45, 24, 12, 7, 5, 39, 2, 53, 8]
let n = arr.length

let mergeSort = (A, low, high) => {
    if (low >= high) {
        return
    }
    let mid = Math.floor((low + high)/2)
    mergeSort(A, low, mid);
    mergeSort(A, mid + 1, high);
    merge(A, low, mid, high);
}

var merge = (A, l, m, h) => {
    const n1 = m - l + 1;
    const n2 = h - m;
    let Arr1 = new Array(n1);
    let Arr2 = new Array(n2);
    // copy the array and paste inside the newly created array 
    for(let i=0; i<n1; i++){
        Arr1[i] = A[l+i]
    }
    for(let i=0; i<n2; i++){
        Arr2[i] = A[m+1+i]
    }

    let i = 0,j=0,k=l;
    while(i<n1 && j<n2){
        if(Arr1[i] <= Arr2[j]){
            A[k] = Arr1[i]
            i++;
        }else{
            A[k] = Arr2[j]
            j++
        }
        k++
    }

    while(i<n1){
        A[k] = Arr1[i]
        i++
        k++
    }

    while(j<n2){
        A[k] = Arr2[j]
        j++
        k++
    }
};
mergeSort(arr,0,n-1)
console.log(arr)
