//In this problem we have to given a floor of n*m and we need to filled the floor with the tiles of size 1*m
//your task is to find the number of way to fill the tiles on floor 

let tiles = (n,m)=>{
    if(n == m){
        return 2
    }
    if(n<m){
        return 1
    }

    let veritcalPlacement = tiles(n-m,m)
    let horizontalPlacement = tiles(n-1,m)
    return veritcalPlacement+horizontalPlacement
}

console.log(tiles(4,2))
