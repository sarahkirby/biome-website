$('form.ajax').on('submit', function() {

	if( $('#name').val() == "" || $('#email').val() == "" || $('#message').val() == "") {
		$('input > span').html("Required field");
	} else {

	// this - the form
	var that = $(this),
	// the action of the form - url it is directed to
		url = that.attr('action'),
	// method of form - POST
		type = that.attr('method'),
	// Javascript?
		data = {};

		// find anything with a 'name' attribute
		that.find('[name]').each(function(index, value) {
			var that = $(this),
				name = that.attr('name'),
				value = that.val();

			// name of input field and assigning value(input)
			data[name] = value;
		});

		$.ajax({
			url: url,
			type: type,
			data: data,
			beforeSend: function(){
				$('.loader').css('display', 'block');
			},
			success: function(response) {

				$('.loader').css('display', 'none');

				$('#contact-form').html('<h3>'+ response +'</h3>').css({
					'padding-top': '10%',
					'line-height': '1.3em',
					'font-size': '1.7em',
					'padding-left': '1em'
				});
				$('.flex > h1').hide();
				$('.p-hide').hide();
			}
		});

	return false;
}
});