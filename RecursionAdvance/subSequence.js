let str = 'abcd'
let arr = []
let subsequence = (str,ind,newStr)=>{
    if(str.length === ind){
        arr.push(newStr)
        return
    }
      subsequence(str,ind+1,newStr+str[ind])   
     subsequence(str,ind+1,newStr)    
}
subsequence(str,0,'')
console.log(arr.sort((a,b)=>a.localeCompare(b)).join("\n"))


