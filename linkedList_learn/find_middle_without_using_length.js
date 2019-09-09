// Assuming you know array find middle of of list 

const arr = [1,2,4,5,7,8,9,0,2];

// 1. navie
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

// 2. improovised
//condition: 1. without using length prop 2. without using divided / 2

const arr1 = [1,2,4,5,7,8,9,0,1];
function findMiddle1(){
    let i =0;
    let middle;
    while(arr1[i] != undefined){
        if(arr1[i * 2] != undefined){
            // as it is checking on less element added 1 manually
            middle = i+1;
        }
        i++;
    }
    console.log(`middle of the given array is ${middle} using improovised solution`);
}
findMiddle1();