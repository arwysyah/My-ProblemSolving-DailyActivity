// console.log(hackerInString("hereiamstackerrank"));
// console.log(hackerInString("hackerworld"));
// console.log(hackerInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"));

function hackerInString(s) {
  const hackerRank = "hackerrank".split("");
  const arr = s.split("");
  let count = 0;

  if (arr.length < hackerRank.length) {
    return "NO";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === hackerRank[count]) {
      console.log(count, hackerRank[count]);
      count++;
    }
  }
  return count == hackerRank.length ? "YES" : "NO";
}

console.log(hackerInString("hereiamstackerrank"));
console.log(hackerInString("hackerworld"));
console.log(hackerInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"));
