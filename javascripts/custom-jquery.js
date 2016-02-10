$(document).ready(function(){
	
	var first = "travis";
    var last = "stuxweb.com";
    $('.email-contact-link').html('<a class="link-text" href="mailto:'+first + '@' + last+'">'+first + '@' + last+'<\/a>');

    $('.email-contact-reg').html('<a href="mailto:'+first + '@' + last+'">'+first + '@' + last+'<\/a>');

    $('.email-contact-sr').html('<a href="mailto:'+first + '@' + last+'">Travis Thielen | Email<\/a>');

    $('.email-contact-nav').html('<a href="mailto:'+first + '@' + last+'">Contact<\/a>');

    $('.dymEmail').html('<a href="mailto:'+first + '@' + last+'"><h4><span class="dymt">Did you mean:</span> <span class="blue-text">how do I hire <span class="travis">Travis Thielen</span></span></h4><\/a>');

    // Move blue highlight for active nav
    $('.navItem').click(function() {
    	$('.navItem').removeClass('nav-active');
    	if ($(this).hasClass('dd')) {
    		return;
    	} else {
    		$(this).addClass('nav-active');
    	}
    });

    $('.vids').click(function() {
    	window.alert("Please confirm your age...just kidding, this isn't that kind of website.");
    });

    $('.news').click(function() {
    	window.alert("This just in!: You stumbled upon an amazing potential employee. To hire now, click 'ok'");
    });

    $('.searchTool').click(function() {
    	window.alert("I think you found what you're looking for...");
    });

});