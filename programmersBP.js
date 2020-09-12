function solution(brown, yellow) {
    var answer = [];
    
    for(let i=3; i<brown/2;i++){
        for(let j=3; j<=i;j++){
            if(((brown+yellow)==i*j) && (brown == 2*i+2*j-4)){
                answer.push(i)
                answer.push(j)
            }
        }
    }


    return answer;
}

console.log(solution(24,24))