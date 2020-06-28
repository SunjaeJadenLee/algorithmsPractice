/*
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

function solution(numbers) { 
    var answer = ''; 

    numbers.sort((a,b)=>b-a);
    let byten = numbers.map(e=>parseInt(e.toString().substring(0,1)));
    let max = Math.max(...byten);
    let results = [];
    console.log('1번째 수: '+ byten);
    console.log('max: ' + max); 
    numbers.splice(byten.indexOf(max),1);
    // console.log(numbers);
    for(let i = 0;i<numbers.length;i++){
        let num = numbers.reduce((p,c)=>p.toString()+c.toString());
        console.log(num);
        results.push(max+num);
        numbers.push(numbers.shift()); 
    }

    console.log(results);
    
    answer = Math.max(...results); 
    return answer;
}


// answer
function solution2(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;
}

// console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution2([3, 30, 34, 5, 9]));
