// https://edabit.com/challenge/JcRKAzSnnPdSPBKMK

// Semantic Versioning
// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).

// Write three separate functions, one to retrieve each element in the semantic versioning specification.

const retrieveMajor = semver => {
	const x = semver.split(".");
	
	return x[0];
};

const retrieveMinor = semver => {
	const x = semver.split(".");
	
	return x[1];
};

const retrievePatch = semver => {
	const x = semver.split(".");
	
	return x[2];
};
