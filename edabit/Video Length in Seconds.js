// https://edabit.com/challenge/n7qZMpuLsAMGBGNLA

const minutesToSeconds = time => time.split(":")[1] < 60 ? time.split(":")[0] * 60 + Number(time.split(":")[1]) : false;
