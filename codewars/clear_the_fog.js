// https://edabit.com/challenge/cHNEFGeQrH3nonwJw

const clearFog = (str) => str.match(/[fog]/gi) ? str.replace(/[fog]/gi, "") : "It's a clear day!";