// https://edabit.com/challenge/yMEs8bXPyZenPEYLM

const mostExpensiveItem = (obj) => Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0];