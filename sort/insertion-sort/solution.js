/**
* @function insert
* @description Function to ordering a given array using insert sort approach
* @param {array} array
* @param {int} rigthIndex
* @param {int} value
*/
function insert(array, rightIndex, value){
  var index;
  for(index = rightIndex; index >= 0 && array[index] > value; index--){
    array[index + 1] = array[index];
  }
  array[index + 1] = value;
}
