function shannonEntropy(str) {
	const freq = {};
	for (const char of str) {
		freq[char] = (freq[char] || 0) + 1;
	}

	const len = str.length;
	let entropyPerChar = 0;

	for (const char in freq) {
		const p = freq[char] / len;
		entropyPerChar -= p * Math.log2(p);
	}

	return {
		perCharacter: entropyPerChar,
		total: entropyPerChar * len
	};
}

const input_el = document.getElementById("input");

input_el.addEventListener("input", () => {
	const { perCharacter, total } = shannonEntropy(input.value);

	document.getElementById("perchar").innerHTML = "Entropy per-character: " + perCharacter;
	document.getElementById("total").innerHTML = "Entropy total: " + total;
});
