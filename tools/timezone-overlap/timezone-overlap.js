import { timeToDecimal, timeOffset } from "/assets/js/util.js";

const calculate_el = document.getElementById("calculate");

calculate_el.addEventListener("click", () => {
	const t_rows = document.getElementsByClassName("timezone_row");

	let time_sets = [];
	for (let i = 0; i < t_rows.length; i++) {
		const starttime = Math.round(timeToDecimal(document.getElementsByClassName("starttime")[i].value));
		const endtime = Math.round(timeToDecimal(document.getElementsByClassName("endtime")[i].value));
		const offset = document.getElementsByClassName("timezone")[i].value;

		const startutc = timeOffset(starttime, offset).hour;
		const endutc = timeOffset(endtime, offset).hour;
		const diff = endutc - startutc;

		const set = Array.from({ length: diff + 1 }, (_, i) => i + startutc);
		time_sets.push(set);
	};

	console.log(time_sets);
});
