function aVeryBigSum(ar) {
  let arr = [...ar];
  let count = 0;

  for (let i of arr) {
    count += i;
  }
  return count;
}
let s = aVeryBigSum([
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
]);
console.log(s);
