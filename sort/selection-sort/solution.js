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

// Test Cases
/**
* @function assertEqual
* @description Helper function to test if callback returns a given value.
* @param {function} callback
* @param {int} resultNum
*/
function assertEqual(callback, resultNum) {
  if (callback !== resultNum) {
    throw new Error('values are not equal');
  }
  console.log('Passed in the test case');
}
