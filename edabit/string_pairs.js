// https://edabit.com/challenge/tSBCQQ8w9dAAZuKio

const stringPairs = (str) => (str + "*").match(/.{2}/g) || [];