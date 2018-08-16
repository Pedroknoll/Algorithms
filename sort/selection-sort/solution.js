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

  for(nextIndex = minIndex + 1; nextIndex < numArray.length; nextIndex++){
    if(numArray[nextIndex] < minValue){
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

// Test Cases for findMinValueIndex
testArray = [20,3,5,10,200,5000,23,6432];
assertEqual(findMinValueIndex(testArray, 0),1);
assertEqual(findMinValueIndex(testArray, 5),6);
