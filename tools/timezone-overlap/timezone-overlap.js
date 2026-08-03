import { timeToDecimal, timeOffset, arrayIntersection } from "/assets/js/util.js";

const calculate_el = document.getElementById("calculate");

calculate_el.addEventListener("click", () => {
	const t_rows = document.getElementsByClassName("timezone_row");

	// Get all times
	let time_sets = [];
	for (let i = 0; i < t_rows.length; i++) {
		const starttime = timeToDecimal(document.getElementsByClassName("starttime")[i].value);
		const endtime = timeToDecimal(document.getElementsByClassName("endtime")[i].value);
		const offset = document.getElementsByClassName("timezone")[i].value;

		const diff = ((endtime - starttime) % 24 + 24) % 24;

		const set = [];
		for (let j = starttime; j <= starttime + diff; j++) {
		    set.push(timeOffset(Math.floor(j), offset));
		}

		time_sets.push(set);
	};
	console.log(time_sets);

	// Find overlap
	let overlap = time_sets[0];
	for (let i = 1; i < time_sets.length; i++) {
		overlap = overlap.filter((v) => {
			return time_sets[i].some((d) => d.hour == v.hour && d.day_offset == v.day_offset);
		});
	}
	console.log(overlap);
});
