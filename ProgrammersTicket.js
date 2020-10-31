// function solution(tickets) {
//     var answer = [];
//     var current = 1;
//     var index = 0;
    
//     for(let i = 0; i<tickets.length; i++){
//         if(tickets[i][0] == 'ICN'){
//             if(answer.length == 0){
//                 answer.push(...tickets[i])
//                 index = i
//             } else {
//                 if(tickets[i][1] < answer[1]){
//                     answer = [...tickets[i]] 
//                     index = i
//                 }
//             }
//         }
//     }
//     tickets.splice(index,1);
//     addRoute()
//     function addRoute(){ 
//         for(let i = 0; i<tickets.length; i++){
//             if(answer[current] == tickets[i][0]){
//                 if(!answer[current+1]){
//                     answer = [...answer,tickets[i][1]]
//                     index = i
//                 } else{
//                      if(answer[answer.length -1] > tickets[i][1]){
//                         answer[current +1] = tickets[i][1]
//                         index = i
//                     }
//                 }
//             }
//         }
//         console.log(tickets)
//         tickets.splice(index,1)
//         index = 0
//         current= current + 1;
//         if(tickets.length != 0){
//             addRoute()
//         }
//     } 
//     // console.log(tickets)
//     return answer;
// }

const dfs = (tickets, temp, currentTicket) => {
    if (tickets.length === temp.length) {
      //마지막 도착지를 더해줌
      temp.push(tickets[currentTicket][1]);
      //처음답은 그냥 넣고  그 다음 부터는 알파벳 비교
      if (answer.length === 0) {
        answer = temp.slice();
      } else if (answer > temp) {
        answer = temp.slice();
      }
      temp.pop(tickets[currentTicket][1]);
      return;
    }
    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[currentTicket][1] === tickets[i][0]) {
        visited[i] = true;
        temp.push(tickets[i][0]);
        dfs(tickets, temp, i);
        visited[i] = false;
        temp.pop();
      }
    }
  };

var answer = [];
const visited = [];
function solution(tickets){
    for (let i = 0; i < tickets.length; i++) {
        let temp = [];
        if (tickets[i][0] !== "ICN") continue;
        visited[i] = true;
        temp.push(tickets[i][0]);
        dfs(tickets, temp, i);
        visited[i] = false;
        temp.pop();
      }
    
    return answer
}

// console.log(solution([["ICN", "COO"], ["ICN", "BOO"], ["COO", "ICN"], ["BOO", "DOO"]]))


//[ICN, JFK, HND, IAD]
// console.log(solution([['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']]))

//[ICN, ATL, ICN, SFO, ATL, SFO]
// console.log(solution([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL','SFO']]))

