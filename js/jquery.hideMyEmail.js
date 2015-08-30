/* 
 * HideMyMail (jQuery Plugin)
 * Version: 0.1.0
 * Date: 2015 August
 * Author: Alexandre Vasseur
 * Description and Demo: http://www.alexandre-vasseur.fr/hide-my-email/
 *
 * 
 * data-u = username 
 * data-d = domain name without the extension 
 * data-e = extension of the domain name 
 * data-s = subject of the mailto, eventually 
 * data-b = body ot the mailto, eventually
 *
 * Example of use HTML: <a class="mail" href="" data-u="username" data-d="domain" data-e="com" data-s="subject" data-b="body">Contact-me</a>
 * Usage example: $( "a.mail" ).hide-my-email();
 */ 

(function($) {
	$.fn.hideMyEmail = function() {
		return $(this).each(function() {
		//	get the link
			var link = $(this);
			
		//	set if there is a subject or not 
			var subject = (link.data('s') !== '' && typeof(link.data('s')) !== 'undefined' ? true : false);
			
		//	set if there is a body or not
			var body = (link.data('b') !== '' && typeof(link.data('b')) !== 'undefined' ? true : false);
		
		//	generating the email address
			var mail = link.data('u') + '@' + link.data('d') + '.' + link.data('e');
		
		//	generate the new fresh href
			link.attr('href', 'ma' + 'i' + 'lto' + ':' + mail + (subject === true  ?  '?subject=' + encodeURIComponent(link.data('s')) : '') + (body === true ? (subject === true ? '&' : '?') + 'body=' + encodeURIComponent(link.data('b')) : ''));
	
		//	eventually change the text if empty by the email
			if (link.html() === '') { link.html(mail); }
		});
	};
})(jQuery);
