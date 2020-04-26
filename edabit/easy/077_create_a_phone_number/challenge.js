// https://edabit.com/challenge/xDNkweBBNXBMyQRdG

// Create a Phone Number
// Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.

const createPhoneNumber = (n) => `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
