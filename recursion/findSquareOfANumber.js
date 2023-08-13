let square  =(a,b)=>{
    if(a == 0){
        return 0
    }
    if(a == 1 || b == 0){
        return 1
    }
    return a*square(a,b-1)
}

console.log(square(2,50))

// second method 
let sqr = (a,b)=>{
    if(a == 0){
        return 0
    }
    if(a == 1 || b == 0){
        return 1
    }

    if(b%2 == 0){
        return sqr(a,b/2)*sqr(a,b/2)
    }else{
        return sqr(a,Math.floor(b/2))*sqr(a,Math.floor(b/2))*a
    }
}

console.log(sqr(2,500))