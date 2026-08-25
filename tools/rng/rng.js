const round_el = document.getElementById("round");

function generate() {
	const min = document.getElementById("min").valueAsNumber;
	const max = document.getElementById("max").valueAsNumber;

	let n = Math.random() * (max - min + 1) + min;

	if (round_el.checked) {
		n = Math.floor(n);
	}
	console.log(n);

	document.getElementById("result").innerText = n;
}

document.getElementById("genbtn").addEventListener("click", generate);
