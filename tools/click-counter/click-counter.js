let c = 0;

document.getElementById("click").addEventListener("click", () => {
	c += 1;
	document.getElementById("result").innerText = c;
});
