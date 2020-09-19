class PriorityQueue{
    constructor(){
        this.store = []
    }

    enqueue (item) {
        this.store.push(item)
    }

    dequeue (){
        let entry = 0 
        for(let i = 0; i<this.store.length;i++){
            if(this.store[entry].score < this.store[i].score){
                entry = i
            }
        } 
        return this.store.splice(entry,1)
    }
}

class Student {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }

const priorityQueue = new PriorityQueue();
const pengsoo = new Student('Pengsoo', 5);
const kim = new Student('MJKim', 10);
const ryu = new Student('Ryu', 3);

priorityQueue.enqueue(pengsoo);
priorityQueue.enqueue(kim);
priorityQueue.enqueue(ryu);

priorityQueue.dequeue();

console.log(priorityQueue.store)