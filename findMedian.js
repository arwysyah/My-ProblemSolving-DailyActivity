function findMedian(arr) {
  let len = arr.length;
  let median = Math.floor(len / 2);
  // Write your code here
  let newArr = arr.sort((a, b) => a - b);
  console.log(newArr[median]);
}

findMedian([0, 1, 2, 4, 6, 5, 3]);
