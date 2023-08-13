let rst = (str,n,ans) =>{
    if(str.length == n){
        return ans
    }
    ans = str[n] + ans
   return rst(str,n+1,ans)
    
}

console.log(rst('abcde',0,''))