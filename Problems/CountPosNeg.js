//Array sum of positive & negative
//Actually was count of positive and sum of negative... RTFQ!

export function countPosNeg(input) {
  let array = [0,0]
  input == null || input.length < 1 ? [] : input.forEach(num => num > 0 ? array[0] += 1 : array[1] += num);
  console.log(array)
  return array
}



let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countPosNeg(testData)

let testData2 = [null]
countPosNeg(testData2)


// Why didn't creating just an empty array work? - [0,0] must deep equal [] fml
// Yet again... read the bloody question. "If the input is an empty array or is null, return an empty array!!!"
// can't initialise index's from an empty array NaN? isnt an empty array undefined length?


// input.forEach(num => num > 0 ? newArray[0] += num : newArray[1] += num)

// for (let num in input)
//     console.log(input[num])
//     if (input[num] > 0) {
//       newArray[0] += input[num];
//     } else {
//       newArray[1] += input[num];
//     }


