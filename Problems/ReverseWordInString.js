// @ts-check
export function reverseWords(str) {
  const words = str.split(" "); // array of words

  console.log(words);

  // swapWord((word) => word.split("").reverse().join(""))

  // const result = words.forEach(swapWord)

  return words.forEach((word) => word.split("").reverse().join(""));
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

//   export const reverse = n => n.split("").reverse().join("");
