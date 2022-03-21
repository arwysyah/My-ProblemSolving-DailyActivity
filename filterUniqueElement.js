let data = [1, 2, 4, 5, 1, 2];

function createUniqueObj(arr) {
  let newObj = {};
  for (let value of arr) {
    if (newObj[value] === undefined) {
      newObj[value] = 0;
    }
    newObj[value]++;
  }
  console.log(newObj);
}

createUniqueObj(data);

function returnnewObj(arr) {
  let filteredArray = [];
  let newObj = {};
  for (let value of arr) {
    if (newObj[value] === undefined) {
      newObj[value] = 0;
    }
    newObj[value]++;
  }
  for (let item in newObj) {
    if (newObj[item] < 2) {
      filteredArray.push(Number(item));
    }
  }
  return filteredArray;
}
// console.log(newObj);
let res = returnnewObj(data);
console.log(res);
// for (let i = 0; i < data.length; i++) {}
