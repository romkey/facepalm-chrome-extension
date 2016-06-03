'use strict';

console.log('faux');

(function() {
    var domains = [ 'foxnews.com', 'naturalnews.com', 'newsmax.com' ];
    for(var i = 0; i < domains.length; i++) {
	domains[i] = domains[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    
    var show_hover_image = function(event) {
	$('body').append('<img src="' + chrome.extension.getURL('images/1.jpg') + '" />');
    }

    var hide_hover_image = function(event) {
    }

    var markup = function(element) {
	element.hover(show_hover_image, hide_hover_image);
	
    }

    var domain_regexp = '[' + domains.join('|') + ']';
    console.log(domain_regexp);

  $('a').each(function() {
    var href = $(this).attr('href');
		  if(!href || !href.match(new RegExp(domain_regexp, 'i')))
	      return;

	    alert('found a link!');
    });
})();
 
