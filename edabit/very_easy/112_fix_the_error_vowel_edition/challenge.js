// https://edabit.com/challenge/KgNMGbXXst7ZdWchR

// Fix the Error: Vowel Edition
// Your friend is trying to write a function that removes all vowels from a string. They write:

// function removeVowels(str) {
//   return str.replace(/[aeiou]/, "")
// }

// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '')
}
