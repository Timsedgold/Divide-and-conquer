function sortedFrequency(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let firstOccurrence = -1;
  let lastOccurrence = -1;

  // Find the first occurrence of num
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] === num) {
      firstOccurrence = middleIdx;
      rightIdx = middleIdx - 1; // Continue searching on the left side
    } else if (arr[middleIdx] < num) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }

  if (firstOccurrence === -1) {
    return -1; // num not found in the array
  }

  leftIdx = 0;
  rightIdx = arr.length - 1;

  // Find the last occurrence of num
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] === num) {
      lastOccurrence = middleIdx;
      leftIdx = middleIdx + 1; // Continue searching on the right side
    } else if (arr[middleIdx] < num) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }

  return lastOccurrence - firstOccurrence + 1;
}





// module.exports = sortedFrequency