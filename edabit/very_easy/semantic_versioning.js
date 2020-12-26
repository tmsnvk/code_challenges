// https://edabit.com/challenge/JcRKAzSnnPdSPBKMK

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
