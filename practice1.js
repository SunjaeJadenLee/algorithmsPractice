/*
write a function that called same , which accepts two arrays.

The function should return true if every value in the array has it's corresponding value squared 
in the second array. The frequency of value must be the same.

ex  [1,2,3] [2,4,9] true
    [2,2,9,1] [4,9,4,2] false
    [2,2,3] [4,9] false
*/


// my expectation - O(n^2)
function same(array1,array2){   
    let answer = true
    if(array1.length!=array2.length){
        answer = false
    }
    array1.forEach((e,i)=>{
        let valueIndex =  array2.indexOf(e**2); 
        //indexOf method is a loop(n). so nested loop
        if(valueIndex== -1){answer=false}
    })
    return answer
}

// answer - O(n)
function same2(array1,array2){
    if(array1.length!==array2.length){
        return false;
    }
    let frequencyCounter1={}
    let frequencyCounter2={}

    for(let val of array1){  
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        // frequencyCounter1[val] = (frequencyCounter1[val] + 1) || 0 <--- incorrect


        // ===> frequencyCounter1[val] = 0 or ++1
    }

    for(let val of array2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false
        }

        if(frequencyCounter2[key**2] !== frequencyCounter1[key] ){
            return false
        }
    }

    return true
}

 // should return true
console.log('My expectation answer: '+same([2,2,4,1],[4,1,4,16]))
console.log('The real answer: '+same2([2,2,4,1],[4,1,4,16]));

// let ex = {a:1,b:2,c:3}  
// for(let e in ex){
//     console.log('d' in ex)
// }



// When counting value in array , use Object (key,value)