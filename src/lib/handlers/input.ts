export default function handleInput(input: HTMLInputElement) {
	if (input.type === "number") {
		const value = input.value;
		const number = parseFloat(value);

		if (isNaN(number)) {
			input.value = "";
			return false;
		}
		if (number < 0) {
			input.value = "";
			return false;
		}
		return true;
	}

	if (input.type === "text") {
		const value = input.value;

		if (value.length <= 0) {
			input.value = "";
			return false;
		}

		return true;
	}

	return false;
}
