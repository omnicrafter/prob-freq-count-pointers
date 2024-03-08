// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] < 0 && arr[right] > 0) {
      swap(arr, left, right);
      left++;
      right--;
    } else if (arr[left] > 0) {
      left++;
    } else {
      right--;
    }
  }

  return arr;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = separatePositive;
