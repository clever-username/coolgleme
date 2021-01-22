$(document).ready(function(){
	
	var first = "travis";
    var last = "travisthielen.com";
    $('.email-contact-link').html('<a class="link-text" href="mailto:'+first + '@' + last+'">'+first + '@' + last+'<\/a>');

    $('.email-contact-reg').html('<a href="mailto:'+first + '@' + last+'">'+first + '@' + last+'<\/a>');

    $('.email-contact-sr').html('<a href="mailto:'+first + '@' + last+'">Travis Thielen | Email<\/a>');

    $('.email-contact-nav').html('<a href="mailto:'+first + '@' + last+'">Contact<\/a>');

    $('.dymEmail').html('<a href="mailto:'+first + '@' + last+'"><h4><span class="dymt">Did you mean:</span> <span class="blue-text">how do I book or hire <span class="travis">Travis Thielen</span></span></h4><\/a>');

    // Modify Fancybox3 options for gallery
    $('[data-fancybox="about-me"]').fancybox({
        animationEffect: "zoom",
        transitionEffect: "slide",
        toolbar: "false",
        buttons: [
            "close"
        ],
    });

    $('[data-fancybox="maps"]').fancybox({
        toolbar: "false",
        buttons: [
            "close"
        ]
    });

    // Move blue highlight for active nav
    $('.navItem').click(function() {
    	$('.navItem').removeClass('nav-active');
    	if ($(this).hasClass('dd')) {
    		return;
    	} else {
    		$(this).addClass('nav-active');
    	}
    });

});

   