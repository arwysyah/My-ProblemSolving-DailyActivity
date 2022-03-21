// function minMaxSumForLoop(arr) {
//   let total = 0;
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min < arr[i]) {
//       min = arr[i];
//     }
//     if (max > arr[i]) {
//       max = arr[i];
//     }
//     total = total + arr[i];
//   }
//   console.log(total - min, total - max);
// }

function minMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const total = arr.reduce((prev, curr) => prev + curr);
  console.log(total - max, total - min);
}

const data = [1, 3, 5, 7, 9];
// minMaxSumForLoop(data);
minMaxSum(data);
