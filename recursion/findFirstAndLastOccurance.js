let str = 'abcdaaaefghiaalmnoaab'
let first = -1;
let last = -1;
let findOccurance = (str,ind,ele) =>{
    if(ind === str.length){
        return 
    }
    if(str[ind]  === ele){
        if(first == -1){
            first = ind
        }else{
            last = ind
        }
    }
    findOccurance(str,ind+1,ele)
}
findOccurance(str,0,'a')
console.log(first,last)