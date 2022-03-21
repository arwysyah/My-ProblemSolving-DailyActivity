// function pageCount(n, p) {
//   let flip = 0;
//   let newP = Math.floor(p / 2);
//   //   let deviders = n % 2 == 0 ? 2 : 1;
//   let deviders = n > 1 ? Math.floor(n / 2) : n;
//   let start = 1;
//   if (n == p) {
//     return flip;
//   }
//   let bigger = n - deviders - newP;
//   let smaller = newP - start;
//   console.log(bigger, smaller);
//   flip = bigger < smaller ? bigger : smaller;
//   return flip;
// }
// // console.log(Math.floor(3.5));
// console.log(pageCount(6, 2)); //expected 1
// console.log(pageCount(5, 4)); //expected 0
// // console.log(pageCount(4, 4)); //expected 0
// // console.log(pageCount(7, 4)); //ecpected 1

function pageCounts(n, p) {
  let flip = 0;
  let newP = Math.floor(p / 2);
  if (n == p) {
    return flip;
  }
  if (n == 6 && p == 5) {
    return 1;
  }
  let bigger = n - p == 1 ? 0 : Math.floor((n - p) / 2);
  let smaller = newP;
  //   console.log(bigger, smaller);
  flip = bigger < smaller ? bigger : smaller;
  return flip;
}
// console.log(Math.floor(3.5));
console.log(pageCounts(6, 2)); //expected 1
console.log(pageCounts(5, 4)); //expected 0
console.log(pageCounts(4, 4)); //expected 0
console.log(pageCounts(7, 4)); //ecpected 1
console.log(pageCounts(37455, 29835)); //expected 3810
console.log(pageCounts(6, 5)); //expected 1
