// https://edabit.com/challenge/cjgxKpAaxAMHCjqsP

const capSpace = (txt) => txt.split("").map((x) => x === x.toUpperCase() ? ` ${x}` : x).join("").toLowerCase();