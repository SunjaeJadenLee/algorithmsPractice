
//[2,3,1,4] / 3
function solution(play_list, listen_time) {
    var answer = 0;
    var cnt = 0;
    var playList = play_list.map(it => {
        cnt += it
        return cnt
    })

    for(let i = 0; i<)
    var result = playList.map(it=> {
        return playListLine(cnt, playList, it)
    })
    console.log(result)

    return result.map(it =>{
        var max = ((it[0]-1)+ listen_time) 
    })
    //     result.map {
    //     val max = ((it.first() - 1) + listen_time)

    //     it.filter { time -> time < max }.size + 1
    // }.maxOrNull()?.let {
    //     answer = it
    // }
    return answer;


    function playListLine(n,play_list,index){
        var newWeek = Array(play_list.length)

        for(let i = 0;i<play_list.length;i++){
            if((index+i)<play_list.length){
                newWeek[i] = play_list[index +i]
            } else {
                newWeek[i] = play_list[(index +i) % play_list.length] + n
            }
        }
        console.log(newWeek)
        if(answer > play_list.length){ answer = play_list.length}
        return newWeek
    }

    // private fun playListLine(n: Int, play_list: IntArray, index: Int): IntArray {
//     val newWeek = IntArray(play_list.size)
//     for (i in play_list.indices) {
//         if ((index + i) < play_list.size) {
//             newWeek[i] = play_list[index + i]
//         } else {
//             newWeek[i] = play_list[(index + i) % play_list.size] + n
//         }
//     }
//     return newWeek
// }
}

console.log(solution([2, 3, 1, 4],3))

// private fun solution(play_list: IntArray, listen_time: Int): Int {
//     var answer = 0

//     var cnt = 0
//     val playList = play_list.map {
//         cnt += it
//         cnt
//     }
//     val result = playList.indices.map {
//         playListLine(cnt, playList.toIntArray(), it)
//     }
//     result.map {
//         val max = ((it.first() - 1) + listen_time)

//         it.filter { time -> time < max }.size + 1
//     }.maxOrNull()?.let {
//         answer = it
//     }

//     if(answer > play_list.size) answer = play_list.size
//     return answer
// }


