/*
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word. Anagram is a word, phrase, or name formed by rearranging the letters of another, 
such as cinema, formed from iceman.

ex) 'aaa' 'aaa'  true
    ''     ''    true
    'asd' 'dda'  false
    'aaz' 'zaa'  true
*/


// my expectation O(3n)

function anagram(string1,string2){
    let string1Object = {}
    let string2Object = {}
    if(string1.length!==string2.length){
        return false
    }
    for(let w of string1){
        string1Object[w] = (string1Object[w] || 0) +1
    }

    for(let w of string2){
        string2Object[w] = (string2Object[w] || 0) +1
    }

    for(let s in string2Object){
        if(!string1Object[s]){
            return false
        } 
        if(string1Object[s]!==string2Object[s]){
            return false
        }
    }

    return true
    // console.log(string1Object,string2Object);
}

//answer O (2n)

function anagram2(string1,string2){
    if(string1.length!==string2.length){
        return false
    }

    let lookup = {}

    for(let i;i< string1.length;i++){
        let letter = string1[i];
        lookup[letter]? lookup[letter]+1: lookup[letter] = 1;
    }

    for(let i;i< string2.length;i++){
        let letter = string2[i];
        
        if(!lookup[letter]){
            return false
        } else {
            console.log(lookup);
            lookup[letter] -= 1;
        }
    }
    return true
}
console.log(anagram2('awesome','someaew'))