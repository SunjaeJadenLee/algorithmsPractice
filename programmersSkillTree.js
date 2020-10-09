function solution(skill, skill_trees) {
    var answer = 0;
    var skills = [...skill]
    for(let i = 0; i<skill_trees.length;i++){
        let skills_in_tree = [...skill_trees[i]]
        skills_in_tree = skills_in_tree.filter((value,index)=>skills.includes(value))

        let tempIndex = 0
        if(skills_in_tree.length != 0){
            for(let j = 0; j<skills_in_tree.length;j++){
                if(skills_in_tree[tempIndex] == skills[tempIndex]){
                    tempIndex += 1
                } else {
                    tempIndex = -1
                }
            }
            if(tempIndex !=-1 && tempIndex !=0){
                answer += 1;
            }
        } else {
            answer += 1;
        }
        
    }


    return answer;
}

//2
console.log(solution("CBD",["BACDE", "CBADF", "AECB", "BDA"]))