//Array sum of positive & negative

export function countPosNeg(input) {
  let array = [0,0]
  input.forEach(num => num > 0 ? array[0] += 1 : array[1] += num)
  return array
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countPosNeg(testData);

// input.forEach()           //uses 'index' and 'element'

// let array = [];
//   for (let item in input)
//     input[item] >= 0 ? input[item] += array[0] : input[item] += array[1];
//   return array

// input.forEach(num => num > 0 ? newArray[0] += num : newArray[1] += num)

// for (let num in input)
//     console.log(input[num])
//     if (input[num] > 0) {
//       newArray[0] += input[num];
//     } else {
//       newArray[1] += input[num];
//     }
