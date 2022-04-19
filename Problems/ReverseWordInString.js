// export function reverseWords(str) {

//   const spin = str.split(" ");
//   const spinMap = spin.map((x) => x.split("").reverse().join(""));
//   return spinMap.join(" ") ;

// }

// export const reverseWords = (str) => str.split(" ").map( w => w.split("").reverse().join("")).join(" ")   // refactored with implicit arrow fn

export const reverseWords = (str) => str.split("").reverse().join("").split(" ").reverse().join(" ") // solution from CodeWars - you are not clever Tony... 


reverseWords("The quick brown fox jumps over the lazy dog.")  //console logging the function threw and extra 'undefined' which drove me crazy for an hour... fml

//.map - new array with each element result of callback
//.forEach - calls callbackFn and returns undefined - does not mutate the array on which it is called. (However, callbackFn may do so) - no way to stop or break a forEach() loop - does not wait for promises
