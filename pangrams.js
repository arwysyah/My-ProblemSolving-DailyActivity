function pangrams(s) {
  let abc = "abcdefghijklmnopqrstuvwxyz".split("");

  let word = s.toLowerCase().split("");
  let count = 0;
  if (abc.length > word.length) return "not pangram";
  for (let i = 0; i < word.length; i++) {
    if (word.includes(abc[i])) {
      count++;
    }
  }
  console.log(count);
  return count === abc.length ? "pangram" : "not pangram";
}

let x = "We promptly judged antique ivory buckles for the next prize";
let b = "We promptly judged antique ivory buckles for the prize";
console.log(pangrams(x), pangrams(b));
