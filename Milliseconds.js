export const TimeToMilli = (h, m, s) => h * 3600000 + m * 60000 + s * 1000; // -- Only implicit when body not wrapped in brackets

// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;  // alternate cleaner math
//   }