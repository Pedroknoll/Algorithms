/**
* @function findMinValueIndex
* @description Find the index of the minimum value from an array at a given
* start index
* @param {array} numArray
* @param {int} startIndex
*/
function findMinValueIndex(numArray, startIndex){
  var minIndex = startIndex;
  var minValue = numArray[startIndex];

  for(nextIndex = startIndex + 1; nextIndex < numArray.lenght; nextIndex++){
    if(nextIndex < minIndex){
      minIndex = nextIndex;
      minValue = numArray[nextIndex];
    }
  }
  return minIndex;
}
