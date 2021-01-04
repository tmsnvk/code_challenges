// https://edabit.com/challenge/iKEQo67KofMY4NSsP

const modifyLast = (str, n) => `${str}${str.charAt(str.length - 1).repeat(n - 1)}`;