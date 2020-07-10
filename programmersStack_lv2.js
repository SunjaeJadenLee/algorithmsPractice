/*
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 
각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 
각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
*/


// progresses: int[], speed: int[]
function solution(progresses, speeds) {
    var answer = []; 
    let obj = {};
    let currentDaysArray = [];
    for(let i = 0; i<progresses.length;i++){
        let restPer = 100 - progresses[i];
        let days = restPer/speeds[i];
         
        if(i == 0){
            if(Number.isInteger(days)){
                obj[days] = (obj[days] || 0) + 1;
            } else {
                obj[parseInt(days)+1] = (obj[parseInt(days)+1] || 0) + 1;
            }
            
           
        } else {
            if(Math.max(...currentDaysArray)>=days){
                if(Number.isInteger(Math.max(...currentDaysArray))){
                    obj[Math.max(...currentDaysArray)] = (obj[Math.max(...currentDaysArray)] || 0) + 1;
                } else {
                    obj[parseInt(Math.max(...currentDaysArray))+1] = (obj[parseInt(Math.max(...currentDaysArray))+1] || 0) + 1; 
                }
                // obj[Math.max(...currentDaysArray)] = (obj[Math.max(...currentDaysArray)] || 0) + 1;
            } else {
                if(Number.isInteger(days)){
                    obj[days] = (obj[days] || 0) + 1;
                } else {
                    obj[parseInt(days)+1] = (obj[parseInt(days)+1] || 0) + 1;
                }
            }
        }

        currentDaysArray.push(days);
        
    } 

    return Object.values(obj)
}

console.log(solution([93,30,55],[1,30,5]));
// console.log(solution([5, 5, 5], [21, 25, 20]));
// console.log(solution( [95, 95, 95, 95], [4, 3, 2, 1]));
// console.log(solution([99,1],[1,99]));

// console.log(solution([40, 93, 30, 55, 60, 65],[60, 1, 30, 5 , 10, 7]))
// console.log(solution([93, 30, 55, 60, 40, 65],[1, 30, 5 , 10, 60, 7]))