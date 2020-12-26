// https://edabit.com/challenge/YNb2MDmxDyJNHDMG8

const singleOccurrence = (str) => [...str.toUpperCase()].filter((val, i, arr) => arr.indexOf(val) === arr.lastIndexOf(val)).join('');