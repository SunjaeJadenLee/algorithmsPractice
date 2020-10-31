// private var rowVisited: Array<BooleanArray> = arrayOf()
// private var colVisited: Array<BooleanArray> = arrayOf()
// private var diagonal1Visited: Array<BooleanArray> = arrayOf()
// private var diagonal2Visited: Array<BooleanArray> = arrayOf()
// private var mBoard = arrayOf<String>()
// private var totalCnt = 0


// private val distX = intArrayOf(0, 1, 1, 1, 0, -1, -1, -1)
// private val distY = intArrayOf(-1, -1, 0, 1, 1, 1, 0, -1)

// private fun solution(h: Int, w: Int, n: Int, board: Array<String>): Int {
//     var answer = -1
//     mBoard = board

//     rowVisited = Array(w) { BooleanArray(h) { false } }
//     colVisited = Array(w) { BooleanArray(h) { false } }
//     diagonal1Visited = Array(w) { BooleanArray(h) { false } }
//     diagonal2Visited = Array(w) { BooleanArray(h) { false } }

//     for (y in 0 until h) {
//         for (x in 0 until w) {
//             if (mBoard[y][x] == '0') continue
//             if (colVisited[x][y] && rowVisited[x][y] && diagonal1Visited[x][y] && diagonal2Visited[x][y]) continue

//             for (i in distX.indices) {
//                 val newX = x + distX[i]
//                 val newY = y + distY[i]

//                 if (newX < 0 || newY < 0 || newX >= w || newY >= h) continue

//                 if ((i == 0 || i == 4) && rowVisited[newX][newY]) continue
//                 if ((i == 2 || i == 6) && colVisited[newX][newY]) continue
//                 if ((i == 7 || i == 3) && diagonal1Visited[newX][newY]) continue
//                 if ((i == 1 || i == 5) && diagonal2Visited[newX][newY]) continue
//                 if (mBoard[newY][newX] == '0') continue

//                 dp(newX, newY, i, 2, n)
//             }
//         }
//     }

//     return totalCnt
// }
function solution(h, w, n, board) {
    var answer = -1;
    var rowVisited = new Array(h)
    var colVisited = new Array (h)
    var diagonal1Visited = new Array (h)
    var diagonal2Visited = new Array (h)
    var mBoard = []
    var totalCnt = 0
    var distX = [0,1,1,1,0,-1,-1,-1]
    var distY = [-1,-1,0,1,1,1,0,-1]
    for(let i = 0;i<w;i++){
        rowVisited[i] = new Array(w).fill(false)
        colVisited[i] =  new Array(w).fill(false)
        diagonal1Visited[i] =  new Array(w).fill(false)
        diagonal2Visited[i] =  new Array(w).fill(false)
        }
    
    mBoard = board

    for(let y = 0;y<h;y++){
        for(let x = 0;x<w;x++){
            if([...mBoard[y]][x] == '0')continue
            if(colVisited[x][y] && rowVisited[x][y] && diagonal1Visited[x][y] && diagonal2Visited[x][y])continue

            for(let i =0;i<distX.length;i++){
                var newX = x + distX[i]
                var newY = y + distY[i]

                if (newX < 0 || newY < 0 || newX >= w || newY >= h) continue 
                if ((i == 0 || i == 4) && rowVisited[newX][newY]) continue
                if ((i == 2 || i == 6) && colVisited[newX][newY]) continue
                if ((i == 7 || i == 3) && diagonal1Visited[newX][newY]) continue
                if ((i == 1 || i == 5) && diagonal2Visited[newX][newY]) continue
                if ([...mBoard[newY]][newX] == '0') continue

                dp(newX, newY, i, 2, n, h, w)
            }
        }
    }
    return totalCnt;

    function dp(x, y, dist, k, n, h, w) {
        if (dist == 0 || dist == 4) rowVisited[x][y] = true
        if (dist == 2 || dist == 6) colVisited[x][y] = true
        if (dist == 3 || dist == 7) diagonal1Visited[x][y] = true
        if (dist == 1 || dist == 5) diagonal2Visited[x][y] = true

        var newX = x + distX[dist]
        var newY = y + distY[dist]
        if (newX < 0 || newY < 0 || newX >= w || newY >= h) {
            if (k == n) {
                totalCnt += 1
            }
            return
        }
        if ([...mBoard[newY]][newX] == '0') {
            if (k == n) {
                totalCnt += 1
            }
            return
        }

        if ((dist == 0 || dist == 4) && rowVisited[newX][newY]) return 
        if ((dist == 2 || dist == 6) && colVisited[newX][newY]) return
        if ((dist == 7 || dist == 3) && diagonal1Visited[newX][newY]) return
        if ((dist == 1 || dist == 5) && diagonal2Visited[newX][newY]) return
        dp(newX, newY, dist, k + 1, n, h, w)
    }
}

console.log(solution(7, 9, 4, ["111100000", "000010011", "111100011", "111110011", "111100011", "111100010", "111100000"]))
// private fun dp(x: Int, y: Int, dist: Int, k: Int, n: Int) {
//     if (dist == 0 || dist == 4) rowVisited[x][y] = true
//     if (dist == 2 || dist == 6) colVisited[x][y] = true
//     if (dist == 3 || dist == 7) diagonal1Visited[x][y] = true
//     if (dist == 1 || dist == 5) diagonal2Visited[x][y] = true


//     val newX = x + distX[dist]
//     val newY = y + distY[dist]

//     if (newX < 0 || newY < 0 || newX >= rowVisited.size || newY >= rowVisited[0].size) {
//         if (k == n) {
//             totalCnt += 1
//         }
//         return
//     }
//     if (mBoard[newY][newX] == '0') {
//         if (k == n) {
//             totalCnt += 1
//         }
//         return
//     }

//     if ((dist == 0 || dist == 4) && rowVisited[newX][newY]) return
//     if ((dist == 2 || dist == 6) && colVisited[newX][newY]) return
//     if ((dist == 7 || dist == 3) && diagonal1Visited[newX][newY]) return
//     if ((dist == 1 || dist == 5) && diagonal2Visited[newX][newY]) return
//     dp(newX, newY, dist, k + 1, n)
// }