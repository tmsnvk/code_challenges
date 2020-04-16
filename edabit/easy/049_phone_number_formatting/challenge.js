// https://edabit.com/challenge/Z6oY6EWwT9rde8YXm

// Phone Number Formatting
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted 
// as a phone number (e.g. (555) 555-5555).

const formatPhoneNumber = n => `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
