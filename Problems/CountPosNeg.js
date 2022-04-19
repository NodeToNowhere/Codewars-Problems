//Array sum of positive & negative

export function countPosNeg(input) {
  let array = [];
  for (let i in input) i >= 0 ? (array[0] += i) : (array[1] += i);
  console.log(array)
  return array;
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countPosNeg(testData)