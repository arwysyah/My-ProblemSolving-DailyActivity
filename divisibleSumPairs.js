let divisible = (n, k, ar) => {
  let counter = 0;
  //   console.log(k);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      console.log(i, j);
      let sum = ar[i] + ar[j];
      if (sum % k === 0) {
        counter++;
      }
    }
  }

  return counter;
};
//should be same with K
//   let count = 0;
//   //   console.log(k);
//   let ks = 0;
//   for (let i = 0; i < ar.length; i++) {
//     for (let k = 0; k < ar.length - i - 1; k++) {
//       if ((ar[i] + ar[k]) % k == 0) {
//         count += 1;
//       }
//     }
//   }
//   console.log(count);

console.log(divisible(6, 3, [1, 3, 2, 6, 1, 2])); //expected 5
console.log();
