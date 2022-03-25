function breakingRecords(scores) {
  let currentScore = scores;
  let minScore = currentScore[0];
  let maxScore = currentScore[0];

  let min = 0;
  let max = 0;

  for (const score of currentScore) {
    if (maxScore < score) {
      maxScore = score;
      max++;
    } else if (score < minScore) {
      minScore = score;
      min++;
    }
  }

  return [max, min];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
