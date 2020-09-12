function solution(numbers, target) {
    var answer = 0;
    
    function searchNode(index,sum){
        if(index == numbers.length){
            if(sum == target){
                answer += 1
            } 
            return 
        }
        searchNode(index+1,sum + numbers[index]);
        searchNode(index+1,sum - numbers[index]);
    }

    searchNode(0,0)

    return answer;
}

console.log(solution([1,1,1,1,1],3))