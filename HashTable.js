class HashTable{
    constructor(size){
        this.store = []

        if(size){
            this.size = size
        } else {
            this.size = 100
        }
    }

    hash = (key) => {
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    insert (key,value){
        let index = this.hash(key)

        if(this.store[index] === undefined){
            this.store[index] = [[key,value]]
        } else {
            let storeFlag = false
            for(let i = 0; i < this.store[index].length; i++){
                if(this.store[index][i][0] === key){
                    this.store[index][i][1] = value;
                    storeFlag = true;
                }
            }
            if(!storeFlag){
                this.store[index].push([key,value]);
            }
        }
    }

    delete = (key) => {
        let index = this.hash(key);
        if(this.store[index] === undefined){
            return false;
        }
        else if(this.store[index].length === 1 && this.store[index][0][0] === key){
            this.store.splice(index,1);
            return true;
        }
        else{
            for(let i = 0; i < this.store[index].length; i++){
                if(this.store[index][i][0] === key){
                    this.store[index].splice(i,1)
                    return true;
                }
            }
            return false;
        }
    }

    search = (key) => {
        let index = this.hash(key);
        if(this.store[index] === undefined){
            return false;
        }
        else if(this.store[index].length === 1 && this.store[index][0][0] === key){
            return this.store[index][0][1];
        }
        else{
            for(let i = 0; i < this.store[index].length; i++){
                if(this.store[index][i][0] === key){
                    return this.store[index][i][1];
                }
            }
            return false;
        } 
    }
}

let data = new HashTable(100);
data.insert(1,5);
data.insert('1',17);
data.insert('asd', 12);
data.insert(213,14);
data.insert('a', 'b');
data.insert('213', '12');
data.insert(999,0)
// console.log(data.search('1'));
// console.log(data.search(213));
data.delete(1);
// console.log(data.search(1));
data.insert(1,10)
data.insert(12,'11')
data.insert(213,4)
data.delete('a');
// console.log(data.search(1));
console.log(data.store)
console.log(data.store.length)