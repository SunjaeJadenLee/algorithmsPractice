function solution(n,edges){
    let answer = 0;
   
    for(let i = 0; i<n-1; i++){
        let visited = Array(n).fill(false)
        let temp = []
        if(edges[i][0] == 0){
            temp.push(edges[i])
            dfs(0,visited,edges[i],temp)
        }
        
    }
    function dfs(depth, visited, edge,temp) {  
        console.log(depth,edge)
        for (let i = 0; i < n - 1; i++) {
            if (!visited[i]) {
                if (edge[1] == edges[i][0]) {
                    visited[i] = true
                    temp.push(edges[i])
                    dfs(depth+1,visited,edges[i],temp)
                }
            }

    }
}
    return answer
}


console.log(solution(19,[[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6], [3, 7], [3, 8], [3, 9], [4, 10], [4, 11], [5, 12], [5, 13], [6, 14], [6, 15], [6, 16], [8, 17], [8, 18]]))