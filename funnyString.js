function funnyString(s) {
  let stringParser = s.split("");
  //   let reverse = s.split("").reverse().join("");
  let arr1 = [];
  let arr2 = [];
  let finalA = [];
  let finalB = [];
  for (let i = 0; i < stringParser.length; i++) {
    let ascii1 = s.charCodeAt(i);
    // let ascii2 = reverse.charCodeAt(i);
    // arr1.push({ char: stringParser[i], ascii: ascii1 });
    // arr2.unshift({ char: stringParser[i], ascii: ascii1 });
    arr1.push(ascii1);
    arr2.unshift(ascii1);
  }
  let counter = 0;

  while (counter < arr2.length - 1) {
    let counter2 = counter + 1;
    finalA.push(Math.abs(arr1[counter] - arr1[counter2]));
    finalB.push(Math.abs(arr2[counter] - arr2[counter2]));
    counter++;
  }
  let isEqual = finalA.toString() === finalB.toString();
  //   let isEqual = [];
  //   for (let x = 0; x < finalA.length; x++) {
  //     let c = finalA[x] == finalB[x];
  //     isEqual.push(c);
  //   }

  if (!isEqual) {
    return "Not Funny";
  } else {
    return "Funny";
  }
}

let zx = funnyString("acxz");
console.time();
console.log(zx);
console.timeEnd();
// funnyString("bcxz");
