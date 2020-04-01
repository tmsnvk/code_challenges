function equalSlices(total, people, each) {
	if (people * each <= total) {
		return true;
	}
	if (people * each > total) {
		return false;
	}
}
