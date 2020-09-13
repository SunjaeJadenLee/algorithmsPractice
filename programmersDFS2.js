function solution(n, computers) {
    var answer = 0;
    
    //DFS로 푸는 문제
    const len = computers.length;
    for (let i = 0; i < len; i++) { //갯수만큼 loop
        if (computers[i][i] != -1) { //방문한 Node인지 체크
            answer++; //현재 시작하는 Node가 Root Node가 됨
            dfs(computers, i, n);
        }
    }
    
    function dfs(computers, idx, n) {
        for (let j = 0; j < n; j++) { //다른 Node에 대하여 전부 탐색해야함
            if (computers[idx][j] == 1 && computers[idx][j] != -1) {
                computers[idx][j] = computers[j][idx] = -1; //탐색한 경우 -1로 설정
                dfs(computers, j, n);
            }
        }
    }
    
    return answer;
}

console.log(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]))