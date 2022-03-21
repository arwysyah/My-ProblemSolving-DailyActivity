function birthdayCakeCandles(candles) {
  let obj = {};
  for (let i of candles) {
    if (obj[i] == undefined) {
      obj[i] = 0;
    }
    obj[i]++;
  }
  let max;
  for (let i in obj) {
    if (obj[i] > 1) {
      max = obj[i];
    }
  }
  return max;
}
birthdayCakeCandles([3, 2, 1, 3]);
