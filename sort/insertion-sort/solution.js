/**
* @function insert
* @description Function to inserting a value into a sorted subarray
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
  return array;
};

/**
* @function insertSort
* @description Function to sort an array in ascending order
* @param {array}
*/
function insertSort(array){
  for(var i = 1; i < array.length; i++){
    insert(array, i-1, array[i]);
  }
};



// Test Cases for insert function
var testArray = [0,3,5];
var arrayAfterSort = insert(testArray,2,1);
assertEqualArray(arrayAfterSort,[0,1,3,5]);


// Helper functions to test
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
