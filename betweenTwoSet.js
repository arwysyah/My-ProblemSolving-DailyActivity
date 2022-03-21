function getTotalX(a, b) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  let sol = [];
  let factor = a[a.length - 1];
  while (true) {
    let flag = true;
    for (let i = 0; i < a.length; i++) {
      console.log(factor);
      if (factor % a[i] !== 0) {
        flag = false;
        break;
      }
      //console.log("factor: ",b.filter(num => num%factor === 0));
      if (b.filter((num) => num % factor === 0).length !== b.length) {
        flag = false;
        break;
      }
    }
    if (flag) sol.push(factor);
    factor += a[a.length - 1];
    if (factor > b[0]) break;
  }
  // console.log(sol)
  return sol.length;
}
// function getTotalX(a, b) {
//   const aHeight = Math.max(...a);
//   const bMin = Math.min(...b);
//   let total = 0;
//   let k = [];
//   while (total < bMin) {
//     total += aHeight;
//     if (bMin % total == 0) {
//       k.push(total);
//     }
//   }
//   let pointer = [];
//   for (let ks = 0; ks < k.length; ks++) {
//     for (let m = 0; m < a.length; m++) {
//       if (k[ks] % a[m] !== 0) {
//         pointer.push(k[ks]);
//       }
//     }
//   }
//   for (let b = 0; b < pointer.length; b++) {
//     if (k.includes(pointer[b])) {
//       k.splice(b, 1);
//     }
//   }
//   // return k.length;
//   console.log(k);
// }
// console.log(32 % 16, "nol");
// let b = getTotalX([2, 4], [16, 32, 96]);
// const d = getTotalX([2, 4], [16, 32, 96]); //expected 3
// const bx = getTotalX([3, 4], [24, 48]); //expected 2
getTotalX([2], [20, 30, 12]); //expected 1
getTotalX([1], [72, 48]); //expected 8
