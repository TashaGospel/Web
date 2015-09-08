var clock = $('#clock');

setInterval(function() {
	time = new Date();
	clock.html(time);
}, 100);