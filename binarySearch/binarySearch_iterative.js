
// Assumed array is not empty || arr.length > 0
// while end > start else return -1 // not found
// mid = Math.floor((start+end)/2)
// target == mid ? return mid
// target > mid ? change start
// target < mid ? change end

let arrI = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
let startI = 0;
let endI = arrI.length-1;
let targetI  = 31;
let mid = 0;
let targetFoundIndex = 0;

function binaryIterative(arr, target, start, end){
    while(end > start){
        mid = Math.floor((start+end) /2);
        if(arr[mid] === target){
            //console.log(`mid = ${mid} \n arr[mid] ${arr[mid]} target ${target} `);
            targetFoundIndex = mid;
            return mid;
        }
        else if(target < arr[mid]){
            //console.log(`mid > ${mid}  end ${end}  start ${start}`);
            end = mid - 1; 
        }
        else{
            //console.log(`mid < ${mid}, start ${start}  end ${end} `);
            start = mid + 1;
        }
    }
    return (targetFoundIndex != 0) ? targetFoundIndex : 0;
}
console.log(`Target is at ${binaryIterative(arrI, targetI, startI, endI)}`);
