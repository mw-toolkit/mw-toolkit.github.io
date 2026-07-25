const addtimezone_el = document.getElementById("addtimezone");
const timezone_table = document.getElementById("timezones");

addtimezone_el.addEventListener("click", () => {
	const row = document.createElement("tr");

	const timezone_td = document.createElement("td");
	const timezone = document.createElement("input");
	timezone.type = "number";
	timezone.min = -12;
	timezone.max = 14;
	timezone.step = 0.25;
	timezone.value = 0;
	timezone_td.appendChild(timezone);

	const starttime_td = document.createElement("td");
	const starttime = document.createElement("input");
	starttime.type = "time";
	starttime_td.appendChild(starttime);

	const endtime_td = document.createElement("td");
	const endtime = document.createElement("input");
	endtime.type = "time";
	endtime_td.appendChild(endtime);

	const overlap_td = document.createElement("td");
	overlap_td.className = "overlap";

	const action_td = document.createElement("td");
	const act_delete = document.createElement("button");
	act_delete.innerHTML = "Delete";
	act_delete.addEventListener("click", () => { row.remove(); });
	action_td.appendChild(act_delete);

	row.appendChild(timezone_td);
	row.appendChild(starttime_td);
	row.appendChild(endtime_td);
	row.appendChild(overlap_td);
	row.appendChild(action_td);
	timezone_table.appendChild(row);
});
