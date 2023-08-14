function perm(str,ans){
    if(str.length <= 0){
        console.log(ans)
        return
    }
    for(let i=0; i<str.length; i++){
        let newStr = str.substring(0,i)+str.substring(i+1)
        perm(newStr,ans+str[i])
    }
}
perm('abcde','')