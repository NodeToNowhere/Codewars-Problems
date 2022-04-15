export const TimeToMilli = (h, m, s) => h * 3600000 + m * 60000 + s * 1000; // implicit return arrow functions are awesome.

// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;  // alternate cleaner math
//   }