// Selection sort :   in place comparision algortithm 
//The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

var arr = [8,4,13,5,1];
var temp;

console.log(arr, "Original Array");

for(var i = 0; i < arr.length; i++ ){
    for(var j = i+1; j < arr.length; j++){        
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr, "Selection Sorted Array");


