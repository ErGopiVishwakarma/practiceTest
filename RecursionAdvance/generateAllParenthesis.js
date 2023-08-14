function gen(s,open,close,n){
    if(s.length === 2*n){
        console.log(s)
        return
    }
    if(open<n){
        gen(s+'(',open+1,close,n)
    }
    if(open>close){
        gen(s+")",open,close+1,n)
    }
}
gen('',0,0,3)