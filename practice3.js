/*
    Multiple Pointers Pattern

    Creating pointers or values that correspond to an index or position and move towards the biginning
    , end or middle based on a certain condition.

    Very efficient for solving problems with minimal space complexity as well

    Write a function called sumZero which accepts a sorted array of integers.
    The function should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero or undefinded if a pair does not exist.

    ex) 

    [-3,-2,-1,0,1,2,3]  [-3,3]
    [-2,-1,0,1,2,3]     undefinded
    [1,2,3]             undefinded
*/

//my expectation O(2n)

function sumZero(array){
    let firstPair = undefined;
    let object = {};
    for(let v of array){
        if(v<=0){ 
            object[-v] = (object[-v] || 0) + 1  

        } else {
            object[v] = (object[v] || 0) + 1  
        }
    } 
    // console.log(object)
    for(v in object){ 
        if(object[v] == 1 && v != 0){
            // console.log(object[v],v)
            // firstPair = undefined
        } else if(object[v] == 2) { 
            firstPair = [-v,parseInt(v)] 
        }
    } 

    return firstPair

}

//answer O(n)

function sumZero2(array){
    let left = 0;
    let right = array.length -1;
    while(left<right){
        let sum = array[left] + array[right];
        if(sum === 0){
            return [array[left],array[right]]
        } else if(sum>0){
            right--;
        } else {
            left++;
        }
    }


}



console.log(sumZero([-3,-2,-1,0,1,2,10])) // should return [-3,3] 
console.log(sumZero2([-2,-1,0,1,2]))
console.log(sumZero([-5,-2,1,4,10]),sumZero2([-5,-2,1,4,10]))
