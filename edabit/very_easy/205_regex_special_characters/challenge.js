// https://edabit.com/challenge/cqTmqdMQW83PkZH97

// RegEx: Special Characters
// Using the .test() method in your function, return whether a string contains the characters "a" and "c" (in that order) 
// with any number of characters (including zero) between them.

const asterisk = str => /ab*c/.test(str);
