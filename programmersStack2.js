function solution(bridge_length, weight, truck_weights) {
   let answer = 0;
   let inTheBridge = []; 
    while(truck_weights.length != 0){   
        if(inTheBridge.length ==0 && truck_weights[0]+truck_weights[1]<weight){ 
            inTheBridge.push(truck_weights.shift());  
            answer += 1; 
        }  else if(inTheBridge.length != 0 &&inTheBridge.reduce((a,b)=>a+b) + truck_weights[0]<weight){
            inTheBridge.push(truck_weights.shift());
            answer += 1; 
        }else {
            truck_weights.shift();
            inTheBridge.shift();  
            answer += bridge_length+1; 
        } 
    }
 
   return answer;
}

//  console.log(solution(2,10,[7,4,4,5]));
console.log(solution(2,10,[7,4,5,6]))
// console.log(solution(100,100,[10]));
// console.log(solution(100,100,[10,10,10,10,10,10,10,10,10,10]));