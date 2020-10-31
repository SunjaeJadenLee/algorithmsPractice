function solution(begin, target, words) {
    var answer = 0;
    // divide into a letter
    var begins = [...begin]
    var targets = [...target]
    var compareLength = begins.length -1 
    var checkSameTwoLettersWithTarget = false
    var checkWordBecameBegin = false
    var hasTarget = false
    // console.log(`-begins = ${begins}`)
    // console.log(`-targets = ${targets}`)
    var counts = 0
    //compare begin with words
    begins.map((value,index)=>{
        if(value == targets[index]){
            counts++;
        }
    })

    console.log(counts-1)


    loopWords()

    function loopWords (){
        for(let i = 0;i<words.length;i++){
            var word = words[i]
            var letters = [...word]
            // console.log(`--letters = ${letters}`)
            // console.log(`--isSame? = ${compare(letters)}`)
            if(compare(letters)){ 
            // console.log(`--letters = ${letters}`)
                if(checkSameTwoLettersWithTarget && letters != targets){
                    // console.log(`--- letters = ${letters}`)
                    // console.log(checkTarget(letters))
                    if(!checkWordBecameBegin){ 
                        checkWordBecameBegin = true
                        answer++;
                        words.splice(i, 1) 
                        begins = letters
                    } else if(checkWordBecameBegin&&checkTarget(letters)){ 
                        answer++;
                        begins = letters
                        hasTarget = true
                    }else {
                        words.splice(i,1)
                    }
                } else { 
                    if(checkTarget(letters)){
                        answer++;
                        hasTarget = true
                        return
                    } else {
                        answer++;
                        words.splice(i,1) 
                        begins = letters
                    }
                } 
                // console.log(`--- begins = ${begins}`)
                loopWords()
            }
        }
    }
    function checkTarget(lts){
        var isSameThreeLetters = 0

        lts.map((value,index)=>{
            if(value == targets[index]){
                isSameThreeLetters++;
            }
        })

        return isSameThreeLetters == compareLength+1
    }

    function compare(lts){
        
        var isSameTwoLettersAndDifferentALetterCount = 0
        var isSameWithTarget = 0
        //find if letters are the same with begin
        lts.map((value,index)=>{ 
            if(value == begins[index]){
                isSameTwoLettersAndDifferentALetterCount++;
            }

            if(value == targets[index]){
                isSameWithTarget++;
            }
        })

        if(isSameWithTarget == compareLength&&isSameTwoLettersAndDifferentALetterCount == compareLength){
            checkSameTwoLettersWithTarget = true
        }

        return isSameTwoLettersAndDifferentALetterCount == compareLength
    }
    if(!hasTarget){
        return 0
    }

    // console.log("temp answer : "+  (answer-counts) )

    return  answer
}

//4
console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log","fog","cog"]))

console.log("===================")
console.log(solution("gogt","cogt",["gots","harts","cogt","gott","gogt","gits"]))
console.log("===================")
//0
// console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log"]))

console.log(solution("hot","lot",["hot", "dot", "dog", "lot", "log"]))