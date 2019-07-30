/*
create a new data structure: a priority queue. 
A priority queue allows the user to add items to the queue that are deemed to be high priority, and get moved ahead in the line. 
This added complexity is simple to achieve and is a good example of how we can build up complexity through the use of data structures.
*/

// copied queue_ds.js manullly as import export doesn't support until node 10 and current node is 8.1

// Using closure for lowPriorityQueue , highPriorityQueue

function createQueue(){
    const queue =[];
    return{
        enqueue(x){
            queue.unshift(x);
        },
        dequeue(){
            if(queue.length === 0){
                return undefined;
            }
            queue.pop();
        },
        peek(){
            if(queue.length === 0){
                return undefined;
            }
            return queue[queue.length-1];
        },
        get length(){
            return queue.length;
        },
        isEmpty(){
            return queue.length === 0;
        }
    }
}

function createPriorityQueue(){
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();

    return {
        enqueue(item, isHighPriority = false){
            // const queue =  isHighPriority ?  highPriorityQueue : lowPriorityQueue;
            // queue.enqueue(item);
            isHighPriority
            ? highPriorityQueue.enqueue(item)
            : lowPriorityQueue.enqueue(item)
        },
        dequeue(){
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue()
            }
            return lowPriorityQueue.dequeue();
        },
        peek(){
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek()
            }
            return lowPriorityQueue.peek();
        },
        isEmpty(){
            return lowPriorityQueue.isEmpty() && highPriorityQueue.isEmpty();
        },
        get length(){
            return lowPriorityQueue.length + highPriorityQueue.length; 
        }
    }
}

const  q = createPriorityQueue();

console.log('Is Q emplty ',q.isEmpty());
q.enqueue('A fix here');
q.enqueue('A bug there');
q.enqueue('A new feature');
console.log('Is Q emplty ',q.isEmpty());
console.log('What is Q length ',q.length);

console.log('log peek: ', q.peek());

q.dequeue();
console.log('dequeue Once! ');

q.enqueue('Emergency Task!', true);
console.log('log peek:' ,q.peek());

console.log()