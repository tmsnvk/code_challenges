// https://edabit.com/challenge/DbLp2kHgwQbridSSy

const removeVowels = str => str.split("").map(x => x.replace(/[aeiou]/gi, "")).join("");
