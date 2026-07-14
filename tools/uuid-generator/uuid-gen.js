import { toClipboard } from "/mwutil/assets/js/util.js"

document.getElementById("genbtn").addEventListener("click", () => {
	document.getElementById("result").innerHTML = crypto.randomUUID();
});

document.getElementById("copy").addEventListener("click", () => {
	toClipboard(document.getElementById("result").innerHTML);
})
