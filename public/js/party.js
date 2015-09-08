var background = document.getElementById('background');
var button = document.getElementById('button');

button.onclick = function() {
	var red = Math.round(Math.random() * 255);
	var green = Math.round(Math.random() * 255);
	var blue = Math.round(Math.random() * 255);
	background.style.background = "rgb(" + red + "," + green + "," + blue + ")";
}