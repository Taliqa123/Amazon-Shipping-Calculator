function calculateBtn() {
	var inputValue = document.querySelector('.inputVal');
	var results = document.querySelector('.result');
	var inputmy = Number(inputValue.value);

	if (inputmy < 30) {
		inputmy = inputmy + 10;
	}

	results.innerHTML = `Result :  ${inputmy}`;
}
