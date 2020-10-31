function solution(n) {
    var answer = '';
    var nums = [4,1,2];
    var add = false;
    var temp = 0;
    // console.log('n : '+n)
    // console.log('n/3 : ' + n /3)
    // console.log('n%3 :' + n % 3)

    for(let i = 1; i<n+1;i++){
        console.log('i : '+i)
        console.log('i%3 :' + i % 3)
        console.log(' ')
        // console.log('nums[i%3] : '+nums[(i%3)])

        if(add){
            answer = answer + temp
        } else {
            temp = nums[i/3]
        }

        if(i % 3 == 0){
            add = true
        } else {
            add = false
        }
        
    }

    return answer;
}

// 1
// console.log(solution(1))

// 12
console.log(solution(5))

// 42
// console.log(solution(11))