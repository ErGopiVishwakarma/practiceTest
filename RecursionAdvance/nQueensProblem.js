function nQueens(chess,row,ansArray){
    if(row >= chess.length){
        saveChess(chess,ansArray)
        return
    }
    for(let i =0; i<chess.length; i++){
        // console.log(isChessSet(chess,row,i))
        if(isChessSet(chess,row,i)){
            chess[row][i] = 'Q'
            nQueens(chess,row+1,ansArray)
            chess[row][i] = '.'
        }else{
        }
    }
}

function saveChess(chess,ansArray){
    let str = ""
    let newChess = []
    for(let i=0; i<chess.length; i++){
        str = ''
        for(let j=0; j<chess[i].length; j++){
            if(chess[i][j] === 'Q'){
                str += 'Q'
            }else{
                str+='.'
            }
        }
        newChess.push(str)
    }
    ansArray.push(newChess)
}

function isChessSet(chess, row, col) {
    for (let i = 0; i < chess.length; i++) {
        if (chess[row][i] === 'Q') {
            return false;
        }
    }
    for (let i = 0; i < chess.length; i++) {
        if (chess[i][col] === 'Q') {
            return false;
        }
    }
    // left upper diagonal
    for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
        if (chess[r][c] === 'Q') {
            return false;
        }
    }

    // left bottom diagonal
    for (let r = row, c = col; r < chess.length && c >= 0; r++, c--) {
        if (chess[r][c] === 'Q') {
            return false;
        }
    }

    // right upper diagonal
    for (let r = row, c = col; r >= 0 && c < chess.length; r--, c++) {
        if (chess[r][c] === 'Q') {
            return false;
        }
    }

    // right bottom diagonal
    for (let r = row, c = col; r < chess.length && c < chess.length; r++, c++) {
        if (chess[r][c] === 'Q') {
            return false;
        }
    }

    return true;
}

let arr = [['.','.','.','.'],['.','.','.','.'],['.','.','.','.'],['.','.','.','.']]
let ansArray = []
nQueens(arr,0,ansArray)
