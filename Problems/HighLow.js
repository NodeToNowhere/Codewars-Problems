export function highLow(nums) {
    let high = Math.min(...nums.split(" "))
    let low = Math.max(...nums.split(" "))
    return(`${low} ${high}`)
}



// highLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")

// 

// function highLow(nums){
//     let high
//     let low
//     split nums into array
//     iterate over -> if i < i+1 {
//     i == low
//     i+1 == high
//     }
//     return{high,low}