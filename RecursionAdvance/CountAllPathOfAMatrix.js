//In this problem we have given a problem and your task is to count the number of paths to reach (0,0) to (n,m)
//there is one condition a applied that your can move eighter right or down not left and top 
//follow all the instruction of the question and solve it

let countpath = (i,j,n,m)=>{
    if(i == n || j == m){
        return 0
    }

    if(i == n-1 || j == m-1){
        return 1
    }
    let downPath = countpath(i+1,j,n,m)
    let rightPath = countpath(i,j+1,n,m)
    return downPath+rightPath
}

console.log(countpath(0,0,4,4))