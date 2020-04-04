// https://edabit.com/challenge/5232asan2yFuMGnHq

// Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

const unlucky13 = nums => nums.filter(x => x % 13 !== 0);
