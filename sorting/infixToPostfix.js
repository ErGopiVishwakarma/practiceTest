const str = "(a-b/c)*(d+A*r)"

let prec = (oper) => {
    if (oper === '^') {
        return 3;
    } else if (oper === '/' || oper === '*') {
        return 2
    } else if (oper === '-' || oper === '+') {
        return 1
    } else {
        return -1
    }
}

let main = (str) => {
    let ans = ''
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (!str[i].toLowerCase().match(/[^a-z]/g)) {
            ans += str[i]
        } else if (str[i] === '(') {
            stack.push()
        }else if(str[i] === ')'){
            while(stack.length !== 0 && stack[stack.length-1] !== '(' ){
                ans += stack[stack.length -1]
                stack.pop()
            }
            if(stack.length !== 0){
                stack.pop()
            }
        }else {
            while(stack.length !== 0 && prec(stack[stack.length -1]) >= prec(str[i])){
                ans += stack[stack.length-1]
                stack.pop()
            }
            stack.push(str[i])
        }
    }
    while(stack.length !== 0){
        ans += stack[stack.length -1]
        stack.pop()
    }

    return ans
}
console.log(main(str))