import { luhn } from "/assets/js/util.js"

const input_el = document.getElementById("input");
const validate_el = document.getElementById("validate");

validate_el.addEventListener("click", () => {
	let cleaned = input_el.value.replace(/\D/g, ''); // strips everything except digits

	// Get check digit and reverse
	cleaned = cleaned.split('');

	const num = cleaned.map(n => Number(n));
	const pcheckDigit = num.pop();

	const { sum, checkDigit } = luhn(num);

	document.getElementById("pcheckd").innerHTML = "Provided check digit: " + pcheckDigit;
	document.getElementById("sum").innerHTML = "Sum: " + sum;
	document.getElementById("gcheckd").innerHTML = "Generated check digit: " + checkDigit;
	document.getElementById("valid").innerHTML = "Valid: " + (checkDigit == pcheckDigit);
});
