let arrs = [1, 1, 3, 2, 1];
// i	arr[i]	result
// 0	1	[0, 1, 0, 0]    expected
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]

function countingSort(arr) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
      data[i] = [count, arr[i]];
    }
  }
  console.log(data);

  // Write your code here
}
countingSort(arrs);
