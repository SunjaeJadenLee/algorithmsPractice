function solution(table) {
    var answer = 0;
    var tables = [...table].map((value,index)=>[...value])
    // console.log(tables)
    var json = {}
    var index = 0


    function find(index){
        for(let i = 0;i<tables.length;i++){
            console.log(tables[i])
            for(let j = 0;j<tables[i].length;j++){
                console.log(tables[i][j])
                if(tables[i][j] == "O"){
                    tables[i][j]
                    // if(json[i] == undefined){
                    //     json[i] = [j]
                    // } else {
                    //     json[i].push(j)
                    // }
                }
            }
        }
    }
    console.log(json)
    return answer;
}


// 2
console.log(solution(["XOXO", "OXXO", "XXOX", "XOOO"]))

// // 3
// console.log(solution(["OXXO", "XOXO", "XXOO"]))

// // 1
// console.log(solution(["OXOXO", "OOOOO", "XOXOX"]))

