$(function() {
	$('#add').submit(function(event) {
		$('#sum').html(parseInt($('#add input[name=a]').val()) + parseInt($('#add input[name=b]').val()));
		event.preventDefault();
	});
});