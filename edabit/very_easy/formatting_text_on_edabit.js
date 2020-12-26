// https://edabit.com/challenge/yxqTdf5a2PCbGKo9M

function mdFormat(word, style) {
	switch(style){
		case "b":	return (`**${word}**`);
			break;
		case "i":	return (`_${word}_`);
			break;
		case "c":	return (`\`${word}\``);
		break;
		case "s":	return (`~~${word}~~`);
		break;
	}
}
