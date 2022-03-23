// function marsExploration(s) {
//   const sos = "SOS";
//   let res = [];
//   let len = s.length;
//   let k = "";
//   for (let i = 0; i < len; i++) {
//     let char = s[i];
//     k += char;
//     if (k.length === 3) {
//       res.push(k);
//       k = "";
//     }
//   }
//   console.log(res);
//   let b = res.filter((i) => i === sos);
//   let total = len / 3 - b.length;
//   console.log(total);
// }
function marsExploration(s) {
  let res = s.split("");
  let count = 0;
  for (let i = 1; i <= res.length; i++) {
    // console.log(s[i]);
    if (i % 3 == 0) {
      if (res[i - 3] !== "S") {
        count++;
        console.log(res[i - 3], res[i]);
      }
      if (res[i - 2] !== "O") count++;
      if (res[i - 1] !== "S") count++;
    }
  }
  console.log(count);
}

marsExploration("SOSSPSSQSSOR"); //expected 3
marsExploration("SOSSOT"); //expected 1
marsExploration("SOSSOS"); //expected 0
marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"); //expected 12
