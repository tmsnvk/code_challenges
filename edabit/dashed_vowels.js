// https://edabit.com/challenge/QQxJqZnfFN6mPcBCr

const dashed = (str) => str.split("").map((a) => a.match(/[aeiou]/gi) ? `-${a}-` : a).join("");