//Array sum of positive & negative
//Actually was count of positive and sum of negative... RTFQ!

export function countPosNeg(input) {
  if (input && input.length) {
    let count = 0
    let sum = 0
    input.forEach(num => num > 0 ? count++ : sum += num)
    return [count, sum]
  }
  else{
    return []
  }
}

// resolving input to true as a way of filtering null or NaN
// input.length != 0 - nice


// Can't return within turnary - return is a statement -> ternary/expressions
// Can return result though
// Creating array and assigning to index - why?
// Yet again... read the bloody question. "If the input is an empty array or is null, return an empty array!!!"

// input.forEach(num => num > 0 ? newArray[0] += num : newArray[1] += num)

// for (let num in input)
//     console.log(input[num])
//     if (input[num] > 0) {
//       newArray[0] += input[num];
//     } else {
//       newArray[1] += input[num];
//     }

// let array = [0,0]
//   input == null || input.length < 1 ? [] : input.forEach(num => num > 0 ?    array[0] += 1 : array[1] += num);
//   console.log(array)
//   return array

// if (input.includes(null) || input.length < 1) {
//   return []
// } else {
//   const array = [0,0]
//   input.forEach((num) => (num > 0 ? (array[0] += 1) : (array[1] += num)));
//   return array
// }