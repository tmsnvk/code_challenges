// https://edabit.com/challenge/DvwY43tNMdEpW4kKu

const marathonDistance = (d) => d.length >= 1 ? d.reduce((x, y) => Math.abs(x) + Math.abs(y)) === 25 : false;