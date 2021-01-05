// https://edabit.com/challenge/RftQjZs3srJnRBEH8

const removeABC = (str) => str.match(/a|b|c/g) ? str.replace(/a|b|c/g, "") : null;