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
};

/**
* @function swapElements
* @description Swap positions beetween two elements into an array
* @param {array} numArray
* @param {int} firstIndex
* @param {int} secondIndex
*/
function swapElements(numArray, firstIndex, secondIndex){
  temp = numArray[firstIndex];
  numArray[firstIndex] = numArray[secondIndex];
  numArray[secondIndex] = temp;
};


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
