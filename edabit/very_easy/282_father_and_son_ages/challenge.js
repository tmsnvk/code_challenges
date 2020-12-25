// https://edabit.com/challenge/y2GWwz42RxJzzZP66

// Create a function that takes two arguments of father's current age fAge and son's current age sAge. Сalculate how many years ago the father was twice as old as his son OR in how many years he will be twice as old.

// Examples
// ageDifference(36, 7) ➞ 22
// // After 22 years, father will be 58 years old and son will be 29 years old.

// ageDifference(55,30) ➞ 5
// // Before 5 years, father was 50 years old and son was be 25 years old.

// ageDifference(42, 21) ➞ 0

function ageDifference(fAge, sAge){
  return Math.abs(fAge - (sAge * 2));
}