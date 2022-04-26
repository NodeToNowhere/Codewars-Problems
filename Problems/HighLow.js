// export function highLow(nums) {
//     let high, low
//     return (`${low = Math.max(...nums.split(" "))} ${high = Math.min(...nums.split(" "))}`)
// }

//obvious refactor 

export const highLow = nums => `${Math.max(...nums.split(' '))} ${Math.min(...nums.split(' '))}`


// let high = Math.min(...nums.split(" ")) //passed
// let low = Math.max(...nums.split(" "))
// return(`${low} ${high}`)

// // function highLow(nums){  //initial
//     let high
//     let low
//     split nums into array
//     iterate over -> if i < i+1 {
//     i == low
//     i+1 == high
//     }
//     return{high,low}