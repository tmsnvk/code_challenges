// https://edabit.com/challenge/rJPgai5r5XdXeQmLg

const isIsogram = (str) => [...new Set(str.toLowerCase())].join("").length === str.length;