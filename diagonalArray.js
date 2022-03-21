let data = [
  [11, 2, 4, 1, 2, 3, 7, 1, 2],
  [4, 5, 6, 12, 31, 12, 1, 0, 1],
  [10, 8, -12, -10, 6, -12, 10, 8, -12],
  [11, 2, 4, 1, 2, 3, 1, 2, 0],
  [4, 5, 6, 12, 31, 12, 1, 0, 1],
  [10, 8, -12, -10, 6, -12, 10, 8, -12],
  [11, 2, 4, 1, 2, 3, 0, 18],
  [4, 5, 6, 09, -1, 12, 1, 0, 1],
  [10, 8, -12, -10, 6, -12, 10, 8, -12],
];

function diagonalDifference(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {}
  // }
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    let s = arr[i][arr.length - i - 1];
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][arr.length - i - 1];
    console.log(s);
  }
  let sum = Math.abs(secondDiagonal - firstDiagonal);
  return sum;
}
console.table(data);

diagonalDifference(data);
