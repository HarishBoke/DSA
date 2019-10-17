// Merge -  Two way interative method
// merge two lists

let firstList =[2,8,15,18];
let secondList =[5,9,12,17,20];
let firstListLength = firstList.length;
let secondListLength = secondList.length;

function merge(first, second, firstLength, secondLength){
    let mergedList = [];
    let i =0, j =0, k =0;
    // comparing and copying elements
    while(i < firstLength && j < secondLength){
        if(first[i] < second[j]){
            //1. //mergedList.push(first[i]);
        //2. //    mergedList[k] = first[i];
        //     i++;
        //     k++;
        //3. //
        mergedList[k++] = first[i++];
        }
        else {
            //mergedList.push(second[j]);
            // mergedList[k] = second[j];
            // j++;
            // k++;
            mergedList[k++] = first[j++];
        }
    }
    // copy remaining first list
    for(; i< firstLength; i++){
        //mergedList.push(first[i]);
        // mergedList[k] = first[i];
        // k++;
        mergedList[k++] = first[i++];
    }
    // copy remaining second list
    for(; j < secondLength; j++) {
       // mergedList.push(second[j]);
    //    mergedList[k] = second[j];
    //    k++;
    mergedList[k++] = first[j++];
    }

    return mergedList;
}
console.log(`Merged list looks like this ${merge(firstList, secondList,firstListLength, secondListLength)}`);