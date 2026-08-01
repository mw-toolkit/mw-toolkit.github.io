import { timeToDecimal } from "/assets/js/util.js";

const calculate_el = document.getElementById("calculate");

calculate_el.addEventListener("click", () => {
	const t_rows = document.getElementsByClassName("timezone_row");

	let time_data = [];
	for (let i = 0; i < t_rows.length; i++) {
		let data = {};

		data.timezone = document.getElementsByClassName("timezone")[i].value;
		data.starttime = timeToDecimal(document.getElementsByClassName("starttime")[i].value);
		data.endtime = timeToDecimal(document.getElementsByClassName("endtime")[i].value);
		time_data.push(data);
	};

	console.log(time_data);
});
