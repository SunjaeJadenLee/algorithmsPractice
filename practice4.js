/*
    Count unique values

    Implement a function called countUniqueValues, which accepts a sorted array, 
    and counts the unique values in the array.
    There can be negative numbers in the array, but it will always be sorted.

*/

// My expectation (O(n))

function countUniqueValues(array){
    let ob = {}

    for(let v of array){  
        ob[v] = (ob[v] || 0) +1
    }

    return Object.keys(ob).length
}

//Answer (O(n))

function countUniqueValues2(array){
    let i = 0;
    for(let j = 0; j<array.length -1; j++){
        if(array[i] !== array[j]){
            i++;
            array[i] = array[j]
        }
    }
    return i+1
}

console.log(countUniqueValues([2,3,4,4,4,4,2,3,5]))
console.log(countUniqueValues([1,1,1,1,1,1,-1]))