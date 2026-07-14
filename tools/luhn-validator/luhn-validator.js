import { luhngen } from "/assets/js/util.js"

const input = document.getElementById("input");
const validate = document.getElementById("validate");

validate.addEventListener("click", () => {
	let cleaned = input.value.replace(/\D/g, ''); // strips everything except digits

	// Get check digit and reverse
	cleaned = cleaned.split('');

	const num = cleaned.map(n => Number(n));
	const pcheckDigit = num.pop();

	const { sum, checkDigit } = luhngen(num);

	document.getElementById("pcheckd").innerHTML = "Provided check digit: " + pcheckDigit;
	document.getElementById("sum").innerHTML = "Sum: " + sum;
	document.getElementById("gcheckd").innerHTML = "Generated check digit: " + checkDigit;
	document.getElementById("valid").innerHTML = "Valid: " + (checkDigit == pcheckDigit);
});
