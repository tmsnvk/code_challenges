// https://edabit.com/challenge/wPNzJEJebN2mewcqY

const reverse = (str) => str.split(" ").map((a) => a.length >= 5 ? a.split("").reverse().join("") : a).join(" ");