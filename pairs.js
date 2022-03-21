function slowPairs(k, arr) {
  //   console.log(arrs);
  let newArr = [];
  for (let ks = 0; ks < arr.length; ks++) {
    for (let i = ks; i < arr.length; i++) {
      if (arr[ks] - arr[i] === k || arr[i] - arr[ks] == k) {
        newArr.push([arr[ks], arr[i]]);
      }
    }
  }
  console.log(newArr.length);
  // Write your code here
}
function fasterPairs(k, arr) {
  let count = 0;
  for (let ks = 0; ks < arr.length; ks++) {
    let b = arr[ks] - k;
    // console.log(b);
    if (arr.includes(b)) {
      //   console.log(b);
      count++;
    }
  }
  console.log(count);
}

function standardPairs(k, arr) {
  let bArr = [...arr];
  let newArr = [];
  for (let ks = 0; ks < arr.length; ks++) {
    let b = arr[ks] - k;
    // console.log(b);
    newArr.push(b);
  }

  let s = newArr.filter((i) => bArr.indexOf(i) !== -1);
  // Write your code here
  console.log(s.length);
}
console.time();
// slowPairs(2, [1, 5, 3, 4, 2]);
fasterPairs(2, [1, 5, 3, 4, 2]); //expected 3
fasterPairs(
  1,
  [
    363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912,
    428047635, 491595254, 879792181, 1069262793,
  ]
); //expected 0
fasterPairs(2, [1, 3, 5, 8, 6, 4, 2]); //expected 5
console.timeEnd();
console.time();
standardPairs(2, [1, 3, 5, 8, 6, 4, 2]); //expected 5
standardPairs(
  1,
  [
    363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912,
    428047635, 491595254, 879792181, 1069262793,
  ]
); //expected 0

standardPairs(2, [1, 5, 3, 4, 2]); //expected 3
console.timeEnd();
console.time();
slowPairs(
  1,
  [
    363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912,
    428047635, 491595254, 879792181, 1069262793,
  ]
); //expected 0
slowPairs(2, [1, 3, 5, 8, 6, 4, 2]); //expected 5
slowPairs(2, [1, 5, 3, 4, 2]);
// fasterPairs(2, [1, 5, 3, 4, 2]); //expected 3
console.timeEnd();
