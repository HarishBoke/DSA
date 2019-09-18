const arrI = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
const target =  31;
let targetFoundIndex = -1
function linearSearch(){
    for(let i = 0; i< arrI.length; i++){
        if(arrI[i] == target){
            targetFoundIndex = i
            return i;
        }
    }
    console.log(`target ${target} is found at index ${targetFoundIndex}`);
}
linearSearch();