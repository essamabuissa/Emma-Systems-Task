const example1 = ["hello world", "this is a test", "this is an example"];

const getCommonChars = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 1) {
        if (arr[i].includes(arr[i - 1][j]) && arr[i].includes(arr[i + 1][j])) {
          if (!newArr.includes(arr[i - 1][j])) {
            newArr.push(arr[i - 1][j]);
          }
        }
      }
    }
  }
  return newArr;
};

const result = getCommonChars(example1);

console.log(result);
