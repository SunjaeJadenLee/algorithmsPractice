function solution(tickets) {
    var answer = [];
    
    tickets.sort();

    const  dfs = (depth, ticket, visited, temp) => {
        // if(tickets.length == temp.length){
        //     console.log(depth,'ticket: '+ticket)
        // }
        // console.log(depth,visited,temp)
        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i]) {
                if (ticket[1] == tickets[i][0]) {
                    temp.push(tickets[i][1])
                    visited[i] = true
                    
                    
                    dfs(depth + 1, tickets[i],visited,temp)
                }
            }
        }

    }
    
    for (let i = 0; i < tickets.length; i++) {
        var visited = Array(tickets.length).fill(false)
        let temp = []
        if (tickets[i][0] == 'ICN') {
            temp.push(...tickets[i])
            
            visited[i] = true
            dfs(0, tickets[i],visited,temp)
        }
        
    }

   
    return answer
}


// console.log(solution([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL', 'SFO']]))
console.log(solution([["ICN", "COO"], ["ICN", "BOO"], ["COO", "ICN"], ["BOO", "DOO"]]))