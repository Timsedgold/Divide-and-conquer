function findRotatedIndex(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal === val) {
      return middleIdx;
    }

    // Determine which part is sorted
    if (arr[leftIdx] <= middleVal) {
      // Left part is sorted
      if (val >= arr[leftIdx] && val < middleVal) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    } else {
      // Right part is sorted
      if (val > middleVal && val <= arr[rightIdx]) {
        leftIdx = middleIdx + 1;
      } else {
        rightIdx = middleIdx - 1;
      }
    }
  }

  return -1; // Value not found
}




// module.exports = findRotatedIndex