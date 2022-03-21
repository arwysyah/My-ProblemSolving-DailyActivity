// function fizzBuzz(n) {

//     // Write your code here
//     console.log('res')
//     for(let i = 0 ; i<n;i++){
//         console.log(i)
//         if(i % 3 === 0 && i % 5 === 0 ){
//             console.log(i)
//             // return 'FizzBuzz'
//         }else if (i % 3 === 0){
//             return 'Fizz'

//         }else if(i % 5 === 0){
//             return 'Buzz'

//         }else{
//             return i
//         }
//     }

// }
// fizzBuzz(15)

function timeConversion(s) {
  const p = s.length - 2;
  const pm = s.slice(s.length - 2);
  const pn = s.slice(0, 2);
  //   console.log(pn)

  let newString = s.slice(0, s.length - 2);
  //   console.log(newString.slice(0,2),'res')

  if (pm === "PM") {
    if (s.charAt(0) == "0" || (s.charAt(0) == "1" && s.charAt(1) !== "2")) {
      console.log(newString.slice(0, 2), "res");

      let j = Number(newString.slice(0, 2)) + 12;

      newString = j + newString.slice(2);
      return newString;
    }
  } else {
    if (s.charAt(0) == "1" || s.charAt(2) == "2") {
      let j = (newString = "00" + newString.slice(2));
      return newString;
    }
  }
  return newString;
}

console.log(timeConversion("11:59:59PM"));
console.log(timeConversion("06:40:03AM"));
console.log(timeConversion("12:40:22AM"));
console.log(timeConversion("12:45:54PM"));
console.log(timeConversion("02:34:50PM"));
