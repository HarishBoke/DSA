let arrI = [ 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 1 ];
let startI = 0;
let endI = arrI.length-1;
let targetI  = 31;
let mid = 0;
let targetFoundIndex = 0;
 //console.log(arrI.sort(function(a,b) {return b-a}))

function binarySearchOnDesc(arr, target, start, end){
    if(start > end) return -1; // not found
    mid = Math.floor((start+end)/2);
    if(target == arr[mid]) {
        //console.log(`target == arr[mid] ${mid}`);
        return mid;
    } 
    else if(target > arr[mid]) {
        end = mid - 1;
        //console.log(`target > arr[mid] ${start}  ${mid} ${end}`);
        return binarySearchOnDesc(arr, target, start, end);
    }
    else {
        start = mid + 1;
       // console.log(`target < arr[mid] ${start}  ${mid} ${end} `);
        return binarySearchOnDesc(arr, target, start, end);
    }

}

console.log(`${binarySearchOnDesc(arrI, targetI,startI, endI)}`);