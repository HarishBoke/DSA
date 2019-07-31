// stack -  It follow First in Last Out fundamentals FILO / LIFO

// JS - we will use factory function to create stack demo

function createStack(){
    const arr = [];

    return {
        push(elm){
            arr.push(elm);
        },
        pop(){
            return arr.pop();
        },
        peek(){
            return arr[arr.length - 1]
        },
        get length(){
            return arr.length;
        },
        isEmpty(){
            return arr.length == 0;
        }
    }
}

var lowerBodyStack =  createStack();

console.log('Is stack Empty:',lowerBodyStack.isEmpty());

lowerBodyStack.push('underwear');
lowerBodyStack.push('socks');
lowerBodyStack.push('pant');
lowerBodyStack.push('shoes');

console.log("length of an stack: ", lowerBodyStack.length);
console.log("Peek iteam is:", lowerBodyStack.peek());

console.log('popping and item');
lowerBodyStack.pop();

console.log("Peek iteam is:", lowerBodyStack.peek());