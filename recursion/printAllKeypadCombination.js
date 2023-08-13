let str = '23'
let arr = ['.','abc','def','ghi','jkl','mno','pqrs','tu','vx','yz']
function combination(str,ind,comb){
    if(str.length === ind){
        console.log(comb)
        return
    }
    let char = str[ind]
    let map = arr[+char]
    for(let i=0; i<map.length; i++){
        combination(str,ind+1,comb+map[i])
    }
}
combination('2',0,'')