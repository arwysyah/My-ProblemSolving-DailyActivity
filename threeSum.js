const data = [1, 3, 4, 5, 7, 8, 9];
const target = 9;

function threeSum(arr, target) {
  let len = arr.length;
  let counterFirst = 0;
  let counterSecond = arr.length - 1;
  pair = null;
  let mid = Math.floor(len / 2);
  if (arr[0] + arr[1] + arr[2] > target) {
    pair = null;
  } else {
    while ((arr[counterFirst] !== arr[counterSecond]) !== arr[mid]) {
      let numpair = arr[counterFirst] + arr[counterSecond] + arr[mid];
      if (numpair == target) {
        pair = [arr[counterFirst], arr[mid], arr[counterSecond]];
        break;
      } else if (numpair < target) {
        if (arr[counterFirst] < arr[mid]) {
          counterFirst++;
        } else if (arr[mid] < arr[counterSecond]) {
          mid++;
        } else {
          counterSecond++;
        }
      } else if (numpair > target) {
        counterSecond--;
        if (arr[mid] > arr[counterFirst] && arr[mid] < arr[counterSecond]) {
          mid--;
        }
      }
      // if (arr[mid] < 0) {
      //   pair = null;
      // }
    }
  }

  return pair;
}

console.log(threeSum(data, target));

// const data = [1, 3, 4, 5, 7, 8, 9];
// const target = 20;
// //17,20

// function threeSum(arr, target) {
//   let len = arr.length;
//   let counterFirst = 0;
//   let counterSecond = arr.length - 1;
//   pair = null;
//   let mid = Math.floor(len / 2);
//   console.log(counterSecond);
//   while ((arr[counterFirst] !== arr[counterSecond]) !== arr[mid]) {
//     let numpair = arr[counterFirst] + arr[counterSecond] + arr[mid];
//     // console.log(numpair, "PAIR");

//     console.log(arr[counterFirst], arr[counterSecond], arr[mid], "");
//     // let pairBeforeMid = arr[counterFirst] + arr[counterSecond];
//     let sub = target - numpair;
//     if (numpair == target) {
//       pair = [arr[counterFirst], arr[mid], arr[counterSecond]];
//       console.log(
//         arr[counterFirst],
//         arr[mid],
//         arr[counterSecond],
//         "Bagian Pertama"
//       );
//       break;
//     } else if (numpair < target) {
//       let b = numpair - target;
//       counterFirst++;
//       console.log(
//         arr[counterFirst],
//         arr[mid],
//         arr[counterSecond],
//         "Bagian Kedua"
//       );
//       if (arr[mid] - sub > arr[counterFirst] - sub) {
//         if (arr[mid] > arr[counterFirst] && arr[mid] < arr[counterSecond]) {
//           mid++;
//         }
//       }
//     } else if (numpair > target) {
//       counterSecond--;
//       console.log(
//         arr[counterFirst],
//         arr[mid],
//         arr[counterSecond],
//         "Bagian Ketiga"
//       );
//       if (arr[mid] > arr[counterFirst] && arr[mid] < arr[counterSecond]) {
//         mid++;
//       }
//     }
//     // if (arr[mid] < 0) {
//     //   pair = null;
//     // }
//   }
//   console.log(pair);
//   //   console.log(pair);
// }

// threeSum(data, target);
