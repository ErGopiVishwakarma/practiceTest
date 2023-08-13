let str = 'aaaa'
let arr = []
let set = new Set()
let subsequence = (str,ind,newStr)=>{
    if(str.length === ind){
        if(set.has(newStr)){
            return
        }else{
            console.log(newStr)
            set.add(newStr)
            return
        }
    }
      subsequence(str,ind+1,newStr+str[ind])   
     subsequence(str,ind+1,newStr)    
}
subsequence(str,0,'')
// console.log(arr.sort((a,b)=>a.localeCompare(b)).join("\n"))