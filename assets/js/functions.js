$(function() {
<<<<<<< HEAD
	smoothScroll(300);
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
=======
	smoothScrool(300);
	workBelt();
});


function smoothScrool (duration) {
>>>>>>> upstream/master
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function workBelt() {

  $('.thumb-unit').click(function() {
    $('.work-belt').css('left','-100%');
    $('.work-container').show();
  });
  
  $('.work-return').click(function() {
    $('.work-belt').css('left','0%');
    $('.work-container').hide(800);
  });

}