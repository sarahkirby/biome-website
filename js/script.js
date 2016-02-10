$(document).ready( function(){


 // Hamburger menu

    $("#nav-icon3").click(function(){
        $(".overlay").fadeToggle(200);
    });

	$('.overlay').on('click', function(){
	    $(".overlay").fadeToggle(200);
	    $('#nav-icon3').toggleClass('open');
	});

 // Price drop downs

	$('.topics').on('click', function(){
		$(this).next('.box').not(':animated').slideToggle();
	});

});



