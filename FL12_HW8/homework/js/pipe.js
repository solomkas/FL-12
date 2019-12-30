function pipe (number) {
	const START = 1;
	for (let i = START; i < arguments.length; i++) {
		number = arguments[i](num);
	}
	return number;
}
void pipe();