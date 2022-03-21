function camelcase(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) count++;
  }
  return count + 1;
  // Write your code here
}
console.log(camelcase("saveChangesInTheEditor"));
