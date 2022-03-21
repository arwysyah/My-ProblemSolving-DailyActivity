function plusMinus(arr) {
  let negativeNumber = 0;
  let postiveNumber = 0;
  let zeroNumber = 0;
  let len = arr.length;
  for (let i of arr) {
    if (i == 0) {
      zeroNumber++;
    } else if (i > 0) {
      postiveNumber++;
    } else {
      negativeNumber++;
    }
  }
  console.log(
    `${parseNumber(postiveNumber, len)} \n ${parseNumber(
      negativeNumber,
      len
    )} \n ${parseNumber(zeroNumber, len)}`
  );
}

plusMinus([-4, 3, -9, 0, 4, 1]);
