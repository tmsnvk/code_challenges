// https://edabit.com/challenge/kGLhgwGaLJsCMS7wS

// Fullname and Email
// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, 
// and follow it with @company.com at the end. Make sure everything is in lowercase.

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.fullname = `${firstname} ${lastname}`;
		this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`;
	}
}
