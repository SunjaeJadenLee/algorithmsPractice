class Stack {
    constructor(){
        this.store = []
    }

    push(item){
        this.store.push(item)
    }

    pop(){
        return this.store.pop()
    }
}

const stack = new Stack();

console.log(stack.store)