// https://edabit.com/challenge/Hp9FitGXpKqdCW6Fd

// Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, 
// and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

const hurdleJump = (hurdles, jumpHeight) => (Math.max(...hurdles) <= jumpHeight) ? true : false;
