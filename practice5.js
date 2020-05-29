/*
    Sliding Window

    This pattern involves creating a window which can either be an array or a number from one position to another
    
    Depending on a certain condition, the window can increases or closes (and a new window is created).

    Very useful for keeping track of a subset of data in an array/string etc.


    Write a function called maxSubarraySum which accepts an array of integers or number called n. 
    The function should calculate the maximum sum of n consecutive elements in the array.
*/

// My expectation (O(2n)) 
function maxSubarraySum(array,n){
    let ob = {}

    for(let v of array){
        ob[v] = (ob[v] || 0) +1
    }
    let keys = Object.keys(ob); 
    let sum = 0;
    for(let i =0; i<=n-1;i++ ){
        // console.log(keys.length)
        // console.log(keys[keys.length-i-1])
        sum = sum + parseInt(keys[keys.length-i-1])
        // console.log(keys[n-i])
    }
    return sum
    
    // console.log(ob);
}

console.log(maxSubarraySum([1,4,6,3,5,2],2)); // should be 6+5 = 11
console.log(maxSubarraySum([1,4,6,3,5,2,4,3,7],4)); // should be 7+6+5+4 = 22
console.log(maxSubarraySum([1,4,6,3,5,2,6],2)); // should be 6+6 = 12