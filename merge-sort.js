// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  let midIndex = arr.length / 2;
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex);

  // Recursively sort the left half
  let sortedLeft = mergeSort(left);
  // Recursively sort the right half
  let sortedRight = mergeSort(right);

  // Merge the halves together and return
  return merge(sortedLeft, sortedRight);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let arr = [];
  // Point to the first value of each array
  let i = 0;
  let j = 0;
  // While there are still values in each array...
  while (i < arrA.length && j < arrB.length) {
    // Compare the first values of each array
    if (arrA[i] < arrB[j]) {
      // Add the smaller value to the return array
      // Move the pointer to the next value in that array
      arr.push(arrA[i]);
      i++;
    } else {
      arr.push(arrB[j]);
      j++;
    }
  }
  // console.log();

  // Return the return array
  return arr
    .concat(arrA.slice(i, arrA.length))
    .concat(arrB.slice(j, arrB.length));
}

module.exports = [merge, mergeSort];
