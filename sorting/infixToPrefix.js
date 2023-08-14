const str = "(a-b/c)*(d+A*r)"

const prec = (oper)=>{
    if(oper === '^'){
        return 3
    }else if(oper === '/' || oper === '*'){
        return 2
    }
    else if(oper === '+' || oper === '-'){
        return 1
    }
    else {
        return -1
    }
}

const main = (s)=>{
    let str = ''
    let stack = []
    let ans = ''
    for(let i = s.length-1; i>=0; i--){
        str += s[i]
    }
    for(let i=0; i<str.length; i++){
        if(!str[i].toLowerCase().match(/[^a-z]/g)){
            ans += str[i]
        }else if(str[i] === ")"){
            stack.push(str[i])
        }else if(str[i] === '('){
            while(stack.length>0 && stack[stack.length-1] !== ')'){
                ans+= stack.pop()
            }
            if(stack.length>0){
                stack.pop()
            }
        }else{
            while(stack.length>0 && prec(stack[stack.length-1]) >= prec(str[i])){
                ans+= stack.pop()
            }
            stack.push(str[i])
        }
    }
    while(stack.length>0){
        ans+=stack.pop()
    }

    let finalAns = ''
    for(let i = ans.length-1; i>=0; i--){
        finalAns += ans[i]
    }
    return finalAns
}
console.log(main(str))