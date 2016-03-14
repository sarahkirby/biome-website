$(document).ready( function(){


 // Hamburger menu

    $("#nav-icon").click(function(){
        $(".nav-overlay").fadeToggle(200);
    });

	$('.nav-overlay').on('click', function(){
	    $(".nav-overlay").fadeToggle(200);
	    $('#nav-icon').toggleClass('open');
	});

 // Price drop downs

	$('.topics').on('click', function(){
		$(this).next('.box').not(':animated').slideToggle();
	});

});



