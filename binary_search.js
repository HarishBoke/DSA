// Divide and Conquer Method 
// Binary Search Method
// Iterative Algorithm
// Analysis of Binary Search Algorithm

// To perform binary search array/list must be in the sorted order


// 1) Is Input valid
//     1) if valid find startIndex, endIndex and middle Math.floor(s+e/2)
//     2) If middle(m) == target = end and return 
    //divide
//     3) else if (m > t) change end to m - 1
//     4) else if (m < t) change startIndex to m +1 
//     5) else if( s > e ) target not found 


const inputArr = [3,6,8,12,14,17,25,29,31,35,42,47,54,55,62];
let startIndex =  0;
let endIndex = inputArr.length-1;
const target = 30;
let middle = Math.floor(startIndex+endIndex /2);

function binarySearch(arr,  target, start, end){
    console.log(`Arr: ${arr} \n target:${target} \n start: ${start} \n  end:${end}`);
    if(arr.length <= 0) {console.log('Arr length 0'); return arr[0];} 

    middle =  Math.floor((start + end) / 2);
    console.log(`middle is ${middle}`);
    if(arr[middle] == target){
        console.log(`Target ${target} found at index ${middle}`);
        return arr[middle];
    }
    else if(arr[middle] > target){
        end =  middle - 1;
        console.log(`end has changed to ${end}`);
        binarySearch(arr, target, start, end);
    }
    else if(arr[middle] < target){
        start = middle + 1;
        console.log(`start has changed to ${start}`);
        binarySearch(arr, target, start, end);
    }
    else if(start > end){
        console.log(`Target ${target} not present in list`);
    }
}

binarySearch(inputArr, target, startIndex, endIndex);