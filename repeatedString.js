let txt = "aba";
String.prototype.countCharacter = function (char) {
  return [...this].filter((c) => c === char).length;
};

function repeatedString(s, n) {
  const l = s.length,
    repeatsRequired = Math.ceil(n / l),
    charsRequired = repeatsRequired * l,
    numCharsInLastRepeat = l - (charsRequired % n);

  const a_s = s.countCharacter("a"),
    a_r = s.slice(0, numCharsInLastRepeat).countCharacter("a");

  return a_s * (repeatsRequired - 1) + a_r;
}
repeatedString(txt, 10);
// function repeatedAba(t, s) {
//   let count = 0;
//   let aCount = 0;
//   let newString = "";
//   if (t.length <= 1) {
//     return s;
//   } else {
//     while (newString.length < s) {
//       let stack = txt[count];

//       newString += stack;
//       count++;
//       if (count == txt.length) {
//         count = 0;
//       }
//     }
//     for (let i of newString) {
//       if (i == "a") {
//         aCount++;
//       }
//     }
//     return aCount;
//   }
// }
// console.log(
//   repeatedAba(
//     "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
//     736778906400
//   )
// );

// const findMinMax = (arr) => {
//   const smallest = Math.min(...arr);
//   const largest = Math.max(...arr);
//   let sum = 0;
//   for (const i of arr) {
//     sum += i;
//   }
//   const max = sum - smallest;
//   const min = sum - largest;
//   return [min, max];
// };
// let arr = [3, 5, 7, 9];
// console.log(findMinMax(arr));
