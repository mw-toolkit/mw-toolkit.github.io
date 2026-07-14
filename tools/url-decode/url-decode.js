import { toClipboard } from "/mwutil/assets/js/util.js";

const output = document.getElementById("output");

document.getElementById("decbtn").addEventListener("click", () => {
	output.innerHTML = decodeURIComponent(document.getElementById("input").value);
});

document.getElementById("copy").addEventListener("click", () => {
	toClipboard(output.innerHTML);
});
