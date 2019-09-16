
//Tests first
// asssuming exampleArray > 0
// find mid = Math.floor((start+end)/2)
// if(arr[mid] == target) return else  
// if arr[mid] > target : endI =mid -1
// if arr[mid] < target: startI = mid + 1
// if start > end = element not found
let arrI = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
let startI = 0;
let endI = exampleArray.length-1;
let mid = (startI+endI) / 2;
let targetI = 17;

function findElement(arr, target, start, end){
        // assumed arr.length > 0
        mid = Math.floor((start + end) / 2);
        if(arr[mid] === t){
            return mid;
        }
        else if(arr[mid] > target){
            end = mid-1;
             return findElement(arr, target, start, end);
        }
        else if(arr[mid] < target){
            start = mid+1;
            return findElement(arr, target, start, end);
        }
        else {
            return -1;
            // not found
        }
}

console.log(`Target found at ${findElement(arrI, targetI, startI, endI)}`);