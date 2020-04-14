// https://edabit.com/challenge/n7qZMpuLsAMGBGNLA

// Video Length in Seconds
// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). 
// Create a function that takes the video length and return it in seconds.
// The video length is given as a string.
// If the number of seconds is 60 or over, return false.
// You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).

const minutesToSeconds = time => time.split(":")[1] < 60 ? time.split(":")[0] * 60 + Number(time.split(":")[1]) : false;
