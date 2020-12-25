// https://edabit.com/challenge/uRJKbFSkfa6sXeHZi

// Create a function that can turn Yen (Japanese dollar) to USD (American dollar).

// Each Yen to USD conversion is Yen / 107.5
// Round the result to two decimal places.

// Examples
// yenToUsd(1) ➞ 0.01

// yenToUsd(500) ➞ 4.65

// yenToUsd(649) ➞ 6.04

const yenToUsd = (yen) => Number((yen / 107.5).toFixed(2));