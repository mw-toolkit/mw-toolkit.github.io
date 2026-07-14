import { toClipboard } from "/mwutil/assets/js/util.js";

const output = document.getElementById("output");

document.getElementById("encbtn").addEventListener("click", () => {
	output.value = btoa(document.getElementById("input").value);
});

document.getElementById("copy").addEventListener("click", () => {
	toClipboard(output.value);
});
