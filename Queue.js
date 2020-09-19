class Queue {
    constructor(){
        this.store = []
    }

    enqueue (item){
        this.store.push(item)
    }

    dequeue(){
        this.store.shift()
    }
}


const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.enqueue(4)
queue.enqueue(5)
queue.dequeue()
queue.dequeue()

console.log(queue.store)