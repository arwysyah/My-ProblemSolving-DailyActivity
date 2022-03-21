function missingNumbers(arr, brr) {
  // Write your code here
  //   const sorting = (a) => a.sort((itemA, itemB) => itemA - itemB);
  //   let sortArrA = sorting(arr);
  //   let sortArrB = sorting(brr);
  //   let nextA = 0;
  //   let nextB = 0;
  //   let newArr = [];
  //   let lastIndex = Math.max(...brr);
  //   while (nextB !== lastIndex) {
  //     if (sortArrA[nextA] == sortArrB[nextB]) {
  //       nextA += 1;
  //       nextB += 1;
  //     } else {
  //       newArr.push(sortArrB[nextB]);
  //       nextB += 1;
  //     }
  //   }
  //   return newArr;
  let numHash1 = new Map();
  let numHash2 = new Map();
  for (let i = 0; i < arr.length; i++) {
    let count = numHash1.get(arr[i]);
    console.log(count);
    if (!count) {
      numHash1.set(arr[i], 1);
    } else {
      numHash1.set(arr[i], count + 1);
    }
  }
  for (let i = 0; i < brr.length; i++) {
    let count = numHash2.get(brr[i]);
    if (!count) {
      numHash2.set(brr[i], 1);
    } else {
      numHash2.set(brr[i], count + 1);
    }
  }
  let missingNumbers = [];
  for (let key of numHash2.keys()) {
    let countB = numHash2.get(key);
    if (!numHash1.get(key) || countB > numHash1.get(key)) {
      missingNumbers.push(key);
    }
  }

  return missingNumbers.sort((a, b) => a - b);
}
let b = missingNumbers(
  [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
  [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
);
let c = missingNumbers(
  [11, 4, 11, 7, 13, 4, 12, 11, 10, 14],
  [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12] //expected  3 7 8 10 12
);
console.log(b, c);
// function missingNumbers(arr, brr) {
//   // Write your code here
//   let sortArrA = arr.sort((a, b) => a - b);
//   let newHash = new Map();
//   for (let o in brr) {
//     newHash.set(brr[o]);
//   }
//   let bs = newHash.entries(newHash);
//   let arrs = Array.from(bs);
//   let sortArrB = arrs.map((i) => i[0]);
//   let result = sortArrA.filter((i) => sortArrB.includes(i));
//   console.log(result);
// }

// function missingNumbers(arr, brr) {
//   // Write your code here
//   const sorting = (a) => a.sort((itemA, itemB) => itemA - itemB);
//   let sortArrA = sorting(arr);
//   let sortArrB = sorting(brr);
//   console.log(sortArrA, sortArrB);
//   let newArr = [];
//   for (let j = 0; j < sortArrA.length; j++) {
//     if (sortArrA[j] !== sortArrB[j]) {
//       //   if (sortArrA.includes(sortArrB[j])) {
//       newArr.push(sortArrB[j]);
//       //   console.log(sortArrB.splice(j, 1).length, "res", sortArrB.length);
//       sortArrB.splice(j, 1);
//       //   }
//     }
//   }
//   //   return newArr.map((i) => sortArrA.includes(i));
//   console.log(newArr);
// }

//expected [204,205,206]
// let c = missingNumbers(
//   [11, 4, 11, 7, 13, 4, 12, 11, 10, 14],
//   [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12] //expected  3 7 8 10 12
// );
// [4, 4, 7, 10, 11, 11, 11, 12, 13, 14]
// [3, 4, 4, 7, 7, 8, 10, 10, 11, 11, 11, 12, 12, 13, 14];
//   (4, 4, 7, 10, 11, 11, 11, 12, 13, 14)
// ][(8, 10, 10, 11, 11, 11, 12, 12, 13, 14)];

// 3 7 10
