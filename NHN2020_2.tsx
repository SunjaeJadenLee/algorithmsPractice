function solution111(day,width,blocks){
    // console.log(day,width,blocks)
    var conc = []
    for(let i = 0; i<blocks.length; i++){
        let currentStart = 0;
        let end = blocks[i].length-1;
        let currentConc = [0]
        // console.log(blocks[i])
        for(let j = 0;j<blocks[i].length;j++){
            // console.log(blocks[i][j])
            if(blocks[i][j]>blocks[i][currentStart]){ 
                
                for(let k = currentStart+1; k<j;k++){
                    currentConc.push((blocks[i][currentStart]-blocks[i][k]))
                }
                currentStart = j
                currentConc.push(0)
            } else { 
                if(j == blocks[i].length-1){
                    for(let k = currentStart +1; k<blocks[i].length-1;k++){ 
                            currentConc.push((blocks[i][blocks[i].length-1]-blocks[i][k])) 
                    }
                    currentConc.push(0)
                }
            }
        }
        if(i != blocks.length-1){
            console.log(blocks[i].map((v,index)=>v+currentConc[index]))
            blocks[i+1] = blocks[i].map((v,index)=>v+currentConc[index])
        } 
    }

    console.log(conc)

}


console.log(solution111(2,6,[[6,2,11,0,3,5],[6,3,0,9,0,5]]))



