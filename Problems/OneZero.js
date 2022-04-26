//convert the equivalent binary value to an integer.
// arrays can have varying lengths, not just limited to 4

export const oneZero = arr => {
  return parseInt(arr.join(""), 2)
  //return parsed int with radix of 2 of joined array  
};