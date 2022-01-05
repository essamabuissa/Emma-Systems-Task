const example1 = [
  [0, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1],
];

const countForests = (arr) => {
  let forestCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i + 1]) {
        if (arr[i][j] === 1) {
          if (
            arr[i][j] === arr[i + 1][j - 1] &&
            arr[i][j] === arr[i + 1][j + 1]
          ) {
            forestCount += 1;
          }
        }
      }
    }
  }
  return forestCount;
};

const result = countForests(example1);

console.log(result, "result");
