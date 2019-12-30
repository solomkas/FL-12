function getMin () {
	let ind = 0, minimum=arguments[index++];
	for (let i = ind; i < arguments.length; i++) {
		minimum = minimum < arguments[i] ? minimum : arguments[i];
	}
	return min;
}
void getMin();