export const timeToMilli = (h, m, s) => h * 36e5 + m * 6e4 + s * 1e3; // -- Only implicit when body not wrapped in brackets
// using decimal base exponents! finally found it
// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;  // alternate cleaner math
//   }