import { getBMICategory } from "../../assets/js/util.js";

const height_u_el = document.getElementById("height-unit");
const weight_u_el = document.getElementById("weight-unit");
const system_el = document.getElementById("system");

function change_system() {
	if (system_el.value == "metric") {
		height_u_el.innerText = "cm";
		weight_u_el.innerText = "kg";
	} else {
		height_u_el.innerText = "in";
		weight_u_el.innerText = "lbs";
	}
}
change_system();

system_el.addEventListener("change", change_system);

document.getElementById("calculate").addEventListener("click", () => {
	const weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value;
	let bmi;

	/*
		Imperial:
			bmi = (w / h^2) * 703
		Metric:
			bmi = w /h
	*/
	if (system_el.value == "imperial") {
		bmi = (weight / (height * height)) * 703;
	} else {
		height /= 100;
		bmi = weight / (height * height);
	}

	const category = getBMICategory(bmi);

	document.getElementById("result").innerText = `BMI: ${bmi}\nCategory: ${category}`;
});
