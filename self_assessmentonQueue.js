function createQueue(){
    const queue = [];
    return {
        enqueue(elm){
            queue.unshift(elm);
        },
        dequeue(){
            if(queue.length == 0){
                return undefined
            }
            queue.pop();
        },
        peek(){
            if(queue.length == 0){
                return undefined
            }
            return queue[queue.length - 1];
        },
        get length (){
            return queue.length;
        },
        isEmpty(){
            if(queue.length == 0){
                return true
            }
            return false;
        }
    }
}

// only Queue 
/*
const q = createQueue();

console.log('is empty:', q.isEmpty());

q.enqueue("A");
q.enqueue("B");
q.enqueue("C");

console.log('is empty: ', q.isEmpty());
console.log('Queue length: ', q.length);
console.log('peek element is: ', q.peek());
console.log('dequeing.....');
q.dequeue();
console.log('peek element is: ', q.peek());
*/
/* ========================= Priority Queue ================================= */

function createPriorityQueue(){
    const highPriorityQueue = createQueue();
    const lowPriorityQueue = createQueue();
    return {
        enqueue(item, isHighPriority = false){
            isHighPriority
            ? highPriorityQueue.enqueue(item)
            : lowPriorityQueue.enqueue(item)
        },
        dequeue(){
            if(!highPriorityQueue.isEmpty()){
                return highPriorityQueue.dequeue()
            }
            return lowPriorityQueue.dequeue()
        },
        isEmpty(){
            return highPriorityQueue.length == 0 && lowPriorityQueue.length == 0
        },
        peek(){
            if(!highPriorityQueue.isEmpty()){
                return highPriorityQueue.peek()
            }
            return lowPriorityQueue.peek()
        },
        get length(){
            return highPriorityQueue.length + lowPriorityQueue.length;
        }
    }
    
}
const q = createPriorityQueue();

console.log('is empty:', q.isEmpty());

q.enqueue("A");
q.enqueue("B");
q.enqueue("C");

console.log('is empty: ', q.isEmpty());
console.log('Queue length: ', q.length);
console.log('peek element is: ', q.peek());
console.log('dequeing.....');
q.dequeue();
console.log('peek element is: ', q.peek());

q.enqueue('Priority Task!', true);
console.log('peek element is: ', q.peek());
