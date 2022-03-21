let num = 0;

let factorial = (num) => {
  if (num < 1) {
    return null;
  }
  let res = 1;
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    res = res * i;
  }
  return res;
};
console.log(factorial(num));
