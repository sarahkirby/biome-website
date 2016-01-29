$(document).ready( function(){


 // Hamburger menu

    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

	$('.overlay').on('click', function(){
	    $(".overlay").fadeToggle(200);   
	    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
	    // open = false;
	});

 // Price drop downs

	$('.topics').on('click', function(){
		$(this).next('.box').not(':animated').slideToggle();
	});

});



