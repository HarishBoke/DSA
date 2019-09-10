// Assuming you know array find middle of the list 

const arr = [1,2,4,5,7,8,9,0,1];

// 1. navie: find middle 
//condition: without using length prop
function findMiddle(){
    let i = 0;
    let middle;
    while(arr[i] != undefined){
        i++;
    }
    if(arr[i] == undefined){
        middle = Math.ceil(i /2);
    }
    console.log(`middle of the given array is ${middle} using Naive solution`);
}
findMiddle();

// 2. improovised: find middle 
//condition: 1. without using length prop 2. without using divided / 2


function findMiddle1(){
    let i =0;
    let middle;
    while(arr[i] != undefined){
        if(arr[i * 2] != undefined){
            // as it is checking on less element added 1 manually
            middle = i+1;
        }
        i++;
    }
    console.log(`middle of the given array is ${middle} using improovised solution`);
}
findMiddle1();


// 3. 2 pointers - Nearer to Linked list: find middle 
/* conditions:
    1. No use of array index prop
    2. No use of array length prop
    3. No use of  above 2 solutions i.e i /2 or i*2  as we don't have index 
 */

function findMiddle2(){
    let i = 0; // fast Runner
    let j = 0; // slow Runner
    while(arr[i] != undefined){
        j++;
        i=i+2;
    }
    console.log(`middle of the given array is ${j} using 2 pointers solution`);
}
findMiddle2();