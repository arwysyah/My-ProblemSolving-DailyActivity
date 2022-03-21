function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) return "NO";
  let jump = (x2 - x1) % (v1 - v2);

  if (jump === 0) {
    return "YES";
  }
  return "NO";
}
let res = kangaroo([0, 3, 4, 2]);
let j = kangaroo([0, 2, 5, 3]);
console.log(j);
