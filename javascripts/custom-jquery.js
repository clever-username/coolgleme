$(document).ready(function(){
	
	var first = "travis";
    var last = "stuxweb.com";
    $('.email-contact-link').html('<a class="link-text" href="mailto:'+first + '@' + last+'">'+first + '@' + last+'<\/a>');

    $('.email-contact-reg').html('<a href="mailto:'+first + '@' + last+'">'+first + '@' + last+'<\/a>');

    $('.email-contact-sr').html('<a href="mailto:'+first + '@' + last+'">Travis Thielen | Email<\/a>');

    $('.email-contact-nav').html('<a href="mailto:'+first + '@' + last+'">Contact<\/a>');

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