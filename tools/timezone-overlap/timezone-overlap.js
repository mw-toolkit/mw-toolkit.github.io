import { timeToDecimal, decimalToTime, timeOffset } from "/assets/js/util.js";

const calculate_el = document.getElementById("calculate");

function timeOverlap(a, b) {
	return a.filter((v) => {
		return b.some((d) => d.hour == v.hour && d.day_offset == v.day_offset);
	});
}

calculate_el.addEventListener("click", () => {
	const t_rows = document.getElementsByClassName("timezone_row");
	if (t_rows.length < 2) {
		return;
	}
	const offsets = document.getElementsByClassName("timezone");

	// Get all times and convert it to UTC
	let time_sets = [];
	for (let i = 0; i < t_rows.length; i++) {
		const starttime = Math.floor(timeToDecimal(document.getElementsByClassName("starttime")[i].value));
		const endtime = Math.floor(timeToDecimal(document.getElementsByClassName("endtime")[i].value));
		const offset = offsets[i].value;

		const diff = ((endtime - starttime) % 24 + 24) % 24;

		const set = [];
		for (let j = starttime; j <= starttime + diff; j++) {
		    set.push(timeOffset(j, offset));
		}

		time_sets.push(set);
	};
	console.log("Time set (UTC):");
	console.log(time_sets);

	// Find overlap
	console.log(" === Time Overlap ===");
	let overlap = time_sets[0];
	for (let i = 1; i < time_sets.length; i++) {
		overlap = timeOverlap(overlap, time_sets[i]);
		console.log(`Iteration ${i}`);
		console.log(overlap);
	}

	// Show overlap to the user
	console.log(" === Per timezone overlap ===");
	const overlapCols = document.getElementsByClassName("overlap");

	for (let i = 0; i < overlapCols.length; i++) {
		let timezone_overlap = [];
		for (let j = 0; j < overlap.length; j++) {
			timezone_overlap.push(timeOffset(overlap[j].hour, -offsets[i].value));
		}

		const min = timezone_overlap[0];
		const max = timezone_overlap[timezone_overlap.length - 1];

		let day_offset_note = "";
		if (min.day_offset < 0) {
			day_offset_note = "(started yesterday)";
		} else if (max.day_offset > 0) {
			day_offset_note = "(crosses tomorrow)";
		}
		overlapCols[i].innerHTML = `${decimalToTime(min.hour)} -> ${decimalToTime(max.hour)} ${day_offset_note}`;
	}
});
