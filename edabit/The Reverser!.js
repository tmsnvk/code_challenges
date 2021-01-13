// https://edabit.com/challenge/m3Ho3E9KDE7i8XKCn

const reverse = (str) => str.split("").map((x) => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).reverse().join("");