function migratoryBirds(arr) {
  // console.log(arr)

  let obj = {};
  for (let i of arr) {
    if (obj[i] == undefined) {
      obj[i] = 0;
    }
    obj[i]++;
  }
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  let n = Object.entries(obj).map((e) => ({ [e[0]]: e[1] }));

  console.log(n);
}

// console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); //expected 4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); //expected 3
