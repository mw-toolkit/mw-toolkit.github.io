const height_u_el = document.getElementById("height-unit");
const weight_u_el = document.getElementById("weight-unit");
const system_el = document.getElementById("system");

function change_system() {
	if (system_el.value == "metric") {
		height_u_el.innerText = "m";
		weight_u_el.innerText = "kg";
	} else {
		height_u_el.innerText = "in";
		weight_u_el.innerText = "lbs";
	}
}
change_system();

system_el.addEventListener("change", change_system)
