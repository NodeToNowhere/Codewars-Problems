// export function summation(num) {
//   var result = num;
//   if (num === 0 || num === 1) return 1;
//   while (num > 1) {
//     num--;
//     result += num;
//   }
//   return result;
// }

// const summation = n => n * (n + 1) / 2; //arrow functions are godlike

export function summation(num) {
    return num * (num+1) / 2
}