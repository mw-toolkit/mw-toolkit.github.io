document.getElementById("generate").addEventListener("click", () => {
	var qr = qrcode(0, document.getElementById("errCorrectionLevel").value);
	qr.addData(document.getElementById("data").value);
	qr.make();

	var canvas = document.getElementById("output_canvas");
	var cellSize = document.getElementById("cellSize").valueAsNumber;
	var size = qr.getModuleCount() * cellSize;
	canvas.width = size;
	canvas.height = size;

	qr.renderTo2dContext(canvas.getContext("2d"), cellSize);
});
