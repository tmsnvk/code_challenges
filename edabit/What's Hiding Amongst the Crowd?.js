// https://edabit.com/challenge/rvsvGvqZ3BzNieKqA

const detectWord = (str) => str.split("").filter((a) => a.match(/[a-z]/g)).join("");