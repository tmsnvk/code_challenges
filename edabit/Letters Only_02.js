// https://edabit.com/challenge/6nWnXZZBdetZSLbTE

const lettersOnly = (str) => str.length === 0 ? false : str.split("").every((x) => x.match(/[a-z ]/));