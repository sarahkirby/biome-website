$(document).ready( function(){


 // Hamburger menu

    $("#nav-icon3").click(function(){
        $(".overlay").fadeToggle(200);
       // $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

	$('.overlay').on('click', function(){
	    $(".overlay").fadeToggle(200);   
	    // $("#nav-icon3").toggleClass('btn-open').toggleClass('btn-close');
	    // open = false;
	});

 // Price drop downs

	$('.topics').on('click', function(){
		$(this).next('.box').not(':animated').slideToggle();
	});

});



