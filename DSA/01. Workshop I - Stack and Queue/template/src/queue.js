import LinkedListNode from "./linked-list-node.js";

export default class Queue {
    back
    front
    count
    constructor() {
    
        this.back = null
        this.front = null
        this.count = 0
    }

    enqueue(value) {
        const newNode = new LinkedListNode(value)
        
        if(!this.front) {
            this.front = newNode
        } else {
            this.back.next = newNode
        }
        this.count++
        this.back = newNode
        
    }

    dequeue() {
        if(!this.front) {
            throw new Error ('Queue is empty')
        }
        const el = this.front.value
        this.front = this.front.next
        this.count--
        return el
    }

    peek() {
        if(!this.front) {
            throw new Error ('Queue is empty')
        }

        return this.front.value
        
    }

    get Count() {
        if(!this.front) {
            return 0
        } else {
            return this.count
        }
        
    }

    get isEmpty() {
        if(!this.front) {
            return this.count === 0
        } else {
            return this.count === 0
        }
        
    }
}