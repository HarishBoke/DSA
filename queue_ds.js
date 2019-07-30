/* A queue is a first-in, first-out data structure (FIFO). 
We can only remove items from the queue one at a time, and must remove items in the same sequence as they were placed in the queue.*/

//using factory function
    // add or queue
    // remove or dequeue
    // peek
    // length
    // isEmpty

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

const q = createQueue();

console.log("Is queue Empty?: ", q.isEmpty());

q.enqueue('first')
q.enqueue('second')
q.enqueue('third')

console.log('queue length: ', q.length);

console.log('queue peek element: ', q.peek());



