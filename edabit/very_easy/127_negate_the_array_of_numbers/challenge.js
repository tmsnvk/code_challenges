// https://edabit.com/challenge/BA8Pom669icAdkdgj

// Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

const negate = arr => arr.map(value => value * -1);
