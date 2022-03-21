function staircases(n) {
  // Write your code here
  let hash = "";
  for (let i = 1; i <= n; i++) {
    let val = "";
    for (let j = i; j <= n; j++) {
      if (j < n) {
        val = val + " ";
      } else {
        val = val + hash + "#";
        hash = hash + "#";
      }
    }
    console.log(val);
  }
}
function staircase(n) {
  let space = [];
  let stair = "#";
  let result;

  for (let i = 1; i <= n; i++) {
    space.push(" ".repeat(i));
  }

  let rotateSpace = space.reverse();

  for (let j = 1; j <= n; j++) {
    result = rotateSpace[j - 1] + stair.repeat(j);
    console.log(result.replace(" ", ""));
  }
}
staircase(6);
staircases(6);
