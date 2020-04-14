// https://edabit.com/challenge/hscAGyt4iNZ3PKy3g

// Chat Room Status
// Write a function that returns the number of users in a chatroom based on the following rules:
// If there is no one, return "no one online".
// If there 1 person, return "[user1] online".
// If there are 2 people, return [user 1] and [user 2] online".
// If there are n>2 people, return the first two names and add "and n-2 more online".

const chatroomStatus = users => {
	if (users.length === 0) { return "no one online"; }
	if (users.length === 1) { return `${users[0]} online`; }
	if (users.length === 2) { return `${users[0]} and ${users[1]} online`;}
	if (users.length > 2) { return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;}
}
