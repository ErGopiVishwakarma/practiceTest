let printNum = (n)=>{
    if(n == 0){
        return 
    }
    console.log(n)
    printNum(n-1)
   
}
printNum(5)