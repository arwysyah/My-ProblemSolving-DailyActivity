const jumpingClouds = (c) => {
  let jump = 0;
  let index = 0;

  do {
    index = c[index + 2] === 0 ? index + 2 : index + 1;
    jump++;
  } while (index < c.length - 1);
  return jump - 1;
};
let rew = jumpingClouds([0, 0, 1, 0, 0, 1, 0]);
console.log(rew);
// jumpingClouds([]);
