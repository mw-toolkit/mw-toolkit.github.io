import { rng } from '/assets/js/util.js';

const generate_el = document.getElementById("generate");
const equations_el = document.getElementById("equations");

const varnameset = "xyzabcdefghijklmnopqrstuvw".split("");

generate_el.addEventListener("click", () => {
	equations_el.innerHTML = "";

	const minv = document.getElementById("minv").valueAsNumber;
	const maxv = document.getElementById("maxv").valueAsNumber;
	const minc = document.getElementById("minc").valueAsNumber;
	const maxc = document.getElementById("maxc").valueAsNumber;

	let variables = {};

	for (let i = 0; i < document.getElementById("var_count").valueAsNumber; i++) {
		let variable = {}

		variable.symbol = varnameset[i];
		variable.value = Math.floor(rng(minv, maxv));

		variables[i] = variable;
	}

	for (let i = 0; i < document.getElementById("eq_count").valueAsNumber; i++) {
		let equation = [];
		let ans = 0;

		for (let j = 0; j < document.getElementById("var_count").valueAsNumber; j++) {
			const coefficient = Math.floor(rng(minc, maxc));
			const v = variables[j].value * coefficient;

			ans += v;

			const display_coefficient = coefficient == 1 ? "" : coefficient;
			const display = `${display_coefficient}${variables[j].symbol}`;

			equation.push(display);
		}

		equation = `${equation.join(" + ")} = ${ans}`;

		const equation_el = document.createElement("li");
		equations_el.appendChild(equation_el);

		const display_span_el = document.createElement("span");
		equation_el.appendChild(display_span_el);

		display_span_el.innerText = equation;
	}
});
