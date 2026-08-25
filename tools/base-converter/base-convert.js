import { convertBase, toClipboard } from "/assets/js/util.js";

const result_el = document.getElementById("result");

document.getElementById("convert").addEventListener("click", () => {
	const input_el = document.getElementById("input");
	const from_el = document.getElementById("from");
	const to_el = document.getElementById("to");

	let result = null;
	try { result = convertBase(input_el.value, from_el.valueAsNumber, to_el.valueAsNumber); }
	catch (error) { result = error.message; }

	result_el.innerHTML = result;
});

document.getElementById("copy").addEventListener("click", () => {
	toClipboard(result_el.innerHTML);
});
