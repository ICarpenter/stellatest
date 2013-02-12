$(document).ready(function(){
	//when the document is ready bind clicking on a .header to the animate function 
	$('.header').bind('click', animateContents)
});

animateContents = function(e) {
	//define header var
	var header = $(e.currentTarget)
	//if contents are not open, open contents (animate)
	if(!$(header).hasClass('open')){
		$(header).addClass('open').animate({
			backgroundColor: "rgba(242,101,34, .5)"
		}, 'fast', function(){
			//when contents are open, fade in child elements
			$(this).children('span').html('-');
			$(this).next('.contents').slideDown('fast', function(){
				$(this).children().fadeTo('fast', 1);
			});
		})
	//else close contents
	} else {
		//first fade out child elements
		$(header).removeClass('open').next('.contents').children().fadeTo('fast', 0, function(){
			//then animate the .contents div
			$(this).parent('.contents').slideUp('fast', function(){
				$(header).animate({
					backgroundColor: "rgba(0,0,0, 0.3)"
				}, 'fast');
			});
		});
		$(header).children('span').html('+');
	}
}