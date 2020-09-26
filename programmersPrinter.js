function solution(priorities, location) {
    var answer = 0;
    var count = 0;
    var max = Math.max(...priorities)
    console.log("location: " + location)
    console.log("length: "+ priorities.length)
    var locationPriority = priorities[location]

    console.log("location priority: "+locationPriority)

    const printMax = () =>{
        for(let i = 0; i<priorities.length;i++){
            
            if(priorities[i] == max && priorities[i] != -1){
                console.log(priorities)
                priorities[i] = -1
                max = Math.max(...priorities)
                count ++;
                if(i == location){
                    answer = count
                }

            }
        }
        if(Math.max(...priorities) > 0){
            console.log('max: ' + Math.max(...priorities))
          printMax()  
        }
    }

    printMax()

    return answer;
}

//1
// console.log(solution([2, 1, 3, 2],2))

//5
console.log(solution([1, 1, 9, 1, 1, 1],0))