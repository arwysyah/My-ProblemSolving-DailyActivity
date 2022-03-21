// function gradingStudents(grades) {
//   let final = [];
//   for (let i of grades) {
//     let remainder = Math.ceil(i / 5);
//     let gradesNumber = remainder * 5;
//     const index = grades.indexOf(i);
//     if (gradesNumber < 40) {
//       console.log(i);
//     } else {
//       if (gradesNumber - i < 3) {
//         console.log(gradesNumber);
//       } else {
//         console.log(i);
//       }
//     }
//   }
// }
// let s = gradingStudents([73, 67, 38, 33]);

function gradingStudents(grades) {
  let final = [];
  for (let i = 0; i < grades.length; i++) {
    let remainder = Math.ceil(grades[i] / 5);
    let gradesNumber = remainder * 5;
    if (gradesNumber < 40) {
      final[i] = grades[i];
    } else {
      if (gradesNumber - grades[i] < 3) {
        final[i] = gradesNumber;
      } else {
        final[i] = grades[i];
      }
    }
  }
  return final;
}
let s = gradingStudents([73, 67, 38, 33]);
console.log(s);
