var text = document.getElementById('textarea');
var remaining = document.getElementById('remaining');

setInterval(function() {
	var html = 140 - text.value.length;

	if (html <= 0) {
		text.value = text.value.substring(0, 140);
		return false;
	}

	remaining.innerHTML = html;
}, 10);