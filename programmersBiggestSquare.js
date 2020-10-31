function solution(board) {
    var answer = 1;
    var width = board[0].length
    var height = board.length
    console.log(width,height)

    for(let i = 1; i<board.length; i++){
        for(let j = 1; j<board[0].length; j++){  
           
            board[i][j] = Math.min(board[i-1][j-1],board[i-1][j],board[i][j-1]) +1
        }
    }
    console.log(board)

    // console.log(board)
    return answer;
}


//9
// console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]))
console.log(solution([[1,0,0,1],[1,1,1,0],[0,1,1,0],[0,0,0,1]]))