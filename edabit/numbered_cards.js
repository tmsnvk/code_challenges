// https://edabit.com/challenge/JMht24XNt8Swf4MRL

const winRound = (you, opp) => Number(you.sort().reverse().slice(0, 2).join("")) > Number(opp.sort().reverse().slice(0, 2).join(""));
	