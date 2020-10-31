function solution(s) {
    var answer = 0;
    var length = s.length 
    var prev = ''
    var minLength = []


    for(let i = 1; i <= length ; i++){
        let temp = s
        let tempPrev = ''
        var count = 1
        
        prev = s.substring(0,i)
        console.log("i: " + i + "=============================")
        console.log('prev: '+ prev)
        for(let j = i;j<length;j+=i){ 
            let substr = s.substring(j,i+j)
            console.log('substr: '+ substr)
            let rest = s.substring(i+j,length) 
           if(prev == substr){
               count+=1
               console.log("tempPrev: "+tempPrev+"  count:  "+count+"   rest: "+rest)
               temp =  tempPrev + count+ prev + rest
                
               console.log("temp: "+temp)
           } else {
               count = 1
               prev = substr
               console.log('changed prev: '+ prev)
               console.log("tempPrev : " + temp)
            //    tempPrev = temp.substring(0,i+j-1)
           }
            console.log(`substr(${j},${i+j}): `+ substr, 'rest: ' + rest)
        }
        console.log("total temp: "+temp)
        minLength.push(temp.length)
    }
    console.log('min length: '+ minLength)
    return Math.min(...minLength);
}

// console.log(solution("abababaa"))
// console.log(solution("aabbaccc"))
// console.log(solution("ababcdcdababcdcd"))
console.log(solution("abcabcabcabcdededededede"))