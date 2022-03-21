let num = [4, 8, 6];

const findLessNumber = (arrs) => {
  let arr = arrs.sort((a, b) => a - b);
  let k;
  let count;
  for (let i = 0; i < arr.length; i++) {
    for (let m = 0; m < arr.length - 1 - i; m++) {
      if (arr[m] - arr[i] > 1) {
        let b = arr[i] + 1;
        // arr[i + 1] = b;
        count = arr[i + 1];
      }
    }
  }
  console.log(count);
};
findLessNumber(num);
