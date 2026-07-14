import { convertBase, toClipboard } from "/mwutil/assets/js/util.js";

const result_el = document.getElementById("result");

document.getElementById("convert").addEventListener("click", () => {
	const input = document.getElementById("input");
	const from = document.getElementById("from");
	const to = document.getElementById("to");

	let result = null;
	try { result = convertBase(input.value, from.valueAsNumber, to.valueAsNumber); }
	catch (error) { result = error.message; }

	result_el.innerHTML = result;
});

document.getElementById("copy").addEventListener("click", () => {
	toClipboard(result_el.innerHTML);
});
