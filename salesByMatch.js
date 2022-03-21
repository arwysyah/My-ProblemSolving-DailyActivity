function sockMerchant(n, ar) {
  let obj = {};
  let arr = [...ar];
  let count = 0;
  for (let a of arr) {
    if (!obj[a]) {
      obj[a] = 0;
    }
    obj[a]++;
  }
  const keys = Object.keys(obj);
  keys.forEach((key, index) => {
    let reminder = obj[key] / 2;
    console.log(reminder);
    if (Math.floor(reminder) > 0) {
      count = count + Math.floor(reminder);
    }
  });
  return count;
  //   console.log(count);
  //   for(let i of obj){
  //       console.log(i,obj[i])
  //   }
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
