// Assuming you know array find middle of of list /array without using length prop

const arr = [1,2,4,5,7,8,9,0];

// 1. navie
function findMiddle(){
    let i = 0;
    let middle;
    while(arr[i] != undefined){
        i++;
    }
    if(arr[i] == undefined){
        middle = Math.ceil(i /2);
    }
    console.log(`middle of the given array is ${middle}`)
}
findMiddle();