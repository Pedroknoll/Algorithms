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
* @function doSearch
* @description Find the number index if it is present into the array.
* @param {array} numArray
* @param {int} targetNum
*/
function doSearch(numArray, targetNum){
  var minIndex = 0;
  var maxIndex = numArray.length - 1;
  var guessIndex;

  // sort the array in ascending order
  numArray.sort(function(a, b){return a-b});

  // Do the loop as long as be possible the number is within the array.
  while(minIndex <= maxIndex){
    guessIndex = Math.floor((minIndex + maxIndex)/2);
    if (numArray[guessIndex] === targetNum){
      return guessIndex;
    } else if (numArray[guessIndex] < targetNum){
      minIndex = guessIndex + 1;
    } else {
      maxIndex = guessIndex - 1;
    }
  }
  return -1;
};

// Test Cases
// Unordered array
var unorderedArray = [73,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61, 67,
          71,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157];
assertEqual(doSearch(unorderedArray,73), 20);

// Ordered array
var orderedArray = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61, 67,
          71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157];
assertEqual(doSearch(orderedArray,89), 23);

// targetNum not Present in array
var primesArray = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61, 67,
          71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157];
assertEqual(doSearch(primesArray,1000), -1);
