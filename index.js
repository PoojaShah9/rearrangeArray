const swap = function (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const Rearrage = function (arr, n) {
  for (i = 0; i < n - 1; i = i + 2) {
    if (arr[i] > arr[i + 1]) swap(arr, i, i + 1);
  }
  if ((n & 1) > 0) {
    for (i = n - 1; i > 0; i = i - 2)
      if (arr[i] > arr[i - 1]) swap(arr, i, i - 1);
  }
};

const arr = [9, 6, 8, 3, 7];

console.log("Before rearranging");
console.log(arr);

Rearrage(arr, arr.length);

console.log("After rearranging");
console.log(arr);
