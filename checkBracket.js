let cal = "(())hah(a)(jaja0)";

let checkBrackets = (arg) => {
  let stack = [];
  for (let i of arg) {
    if (i === "(") {
      stack.push(i);
    } else if (i === ")") {
      if (stack.length > 0 && stack.includes("(")) {
        stack.pop();
      } else {
        return 1;
      }
    }
  }
  return stack.length > 0 ? 1 : 0;
};
let res = checkBrackets(cal);
console.log(res);
