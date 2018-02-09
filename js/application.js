$(document).ready(function() {
	$("#text_input").keyup(function() {
		var text = $(this).val()
		var transformed = transform(text)
		$("#text_markup").text("")
		$("#text_markup").append(transformed)
		// $("#text_markup").contents().wrap()
	})
})