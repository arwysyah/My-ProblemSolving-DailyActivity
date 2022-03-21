function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let arr = s.slice(i, i + m);
    // console.log(arr);
    let sum = arr.reduce((prev, current) => prev + current);
    if (sum == d) count++;
  }
  return count;
}
let res = birthday([1, 2, 1, 3, 2], 3, 2); //ecpected 2
let e = birthday(
  [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1],
  18,
  7
); //expected 3
console.log(e);
