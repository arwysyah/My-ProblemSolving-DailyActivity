// function stringConstruction(s) {
//   let b = s[0];
//   let point = 0;
//   let j = "";
//   // let sn = s.slice()
//   let next = true;

//   for (let k = 1; k < s.length; k++) {
//     let index = s[k];
//     let d = s.slice(k);
//     // console.log(d);
//     console.log(d, b);
//     if (d.includes(b)) {
//       j = b;
//       b += index;
//     } else {
//       b += index;
//       point += 1;
//       //   console.log(b, "BB");
//     }
//   }
//   //   console.log(point + 1);

//   // Write your code here
// }
function stringConstruction(s) {
  let maps = new Map();
  for (let i of s) {
    maps.set(i, true);
  }
  console.log(maps.size);
}

// let response = stringConstruction("abcd");//expected 4
// let re = stringConstruction("abab"); //expected 2

// let response = stringConstruction("scfg"); //expected 4
let re = stringConstruction("bccb"); //expected 2
