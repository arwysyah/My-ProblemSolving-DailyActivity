function twoStrings(s1, s2) {
  let b = s1.length > s2.length ? s1 : s2;
  let bool = b === s2;
  let pointer = "";
  if (bool) {
    for (let i = 0; i < b.length; i++) {
      if (b.includes(s1[i])) {
        pointer += s1[i];
      }
    }
  } else {
    for (let i = 0; i < b.length; i++) {
      if (b.includes(s2[i])) {
        pointer += s2[i];
      }
    }
  }
  return pointer.length > 0 ? "YES" : "NO";
}
let res = twoStrings("hello", "world");
console.log(res);
