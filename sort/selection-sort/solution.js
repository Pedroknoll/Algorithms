/**
* @function minValueIndex
* @description Find the index of the minimum value from an array at a given
* start index
* @param {array} numArray
* @param {int} startIndex
*/
function minValueIndex(numArray, startIndex){
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


/**
* @function selectionSort
* @description Organize the elements of an array in ascending order.
* @param {array} array
*/
function selectionSort(array){
  var minValueIndex;
  for(var currentIndex = 0; currentIndex < array.length; currentIndex++){
    minValueIndex = minValueIndex(array, currentIndex);
    swapElements(array, currentIndex, minValueIndex);
  }
};

// Test Cases for minValueIndex
var testArray = [20,3,5,10,200,5000,23,6432];
assertEqual(minValueIndex(testArray, 0),1);
assertEqual(minValueIndex(testArray, 5),6);

// Test Case for swapElements
testArray = [20,3,5,10,200,5000,23,6432];
swapElements(testArray,0,1);
assertEqualArray(testArray,[3, 20, 5, 10, 200, 5000, 23, 6432]);

// Test Case for selectionSort
testArray = [20,3,5,10,200,5000,23,6432];
selectionSort(testArray);
assertEqualArray(testArray,[3, 5, 10, 20, 23, 200, 5000, 6432]);


// Helper functions to test
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

/**
* @function assertEqualArray
* @description Helper function to compare two objects and affirm that both are
* identicals arrays
* @param {array} firstArray
* @param {array} secondArray
*/
function assertEqualArray(firstArray, secondArray){
  if (!(firstArray instanceof Array) || !(secondArray instanceof Array)){
    throw new Error('One or both of params not are an array');
  } else {
    if (firstArray.length != secondArray.length){
      throw new Error("The array's length don't match");
    } else {
      for (var i = 0; i < firstArray.length; i++){
        if(firstArray[i] != secondArray[i]){
          throw new Error("The array's aren't equal");
        }
      }
      console.log('Arrays are equal. Passed in the test case')
    }
  }
};
