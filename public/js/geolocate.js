$(function() {
	if (typeof(navigator.geolocation) == 'undefined')
		alert('Your browser doesn\'t support geolocation!');
	else
		navigator.geolocation.getCurrentPosition(function(location) {
			$('body h1').html(location.coords.latitude + ', ' + location.coords.longitude);
		});
});