// https://edabit.com/challenge/H4ZG2vFZLzK4vo8MM

function correctSentences(str){
  str = str.trim().replace(/\s+([A-Z])/g, ". $1").replace(/\s+/g, " ");
	
	return str[0].toUpperCase() + str.slice(1) + ".";
}