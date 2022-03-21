let arr = [1, 2, 3, 4];

const dynamicArray = (arr, counts, stacks) => {
  let count = counts;
  let newArr = arr.splice(count, 1);
  let stack = stacks;
  let res = 1;
  if (stack.length < 4) {
    for (let i of arr) {
      res = res *= i;
    }
    stack.push(res);
    arr.push(newArr[0]);
    dynamicArray(arr, 0, stack);
  }
  return stack;
  //   console.log(stack);
};
let res = dynamicArray(arr, 0, []);
console.log(res);
