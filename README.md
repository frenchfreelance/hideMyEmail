# hideMyEmail

> A jQuery plugin that helps you to hide your email on your page and prevent crawlers to get it!


## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/frenchfreelance/hideMyEmail/master/js/jquery.hideMyEmail.min.js
[max]: https://raw.githubusercontent.com/frenchfreelance/hideMyEmail/master/js/jquery.hideMyEmail.js.js

In the bottom of your web page, before the ```html</body>```:

```html
<script src="js/jquery.min.js"></script>
<script src="js/jquery.hideMyEmail.min.js"></script>
<script>
	$(document).ready(function(){
	 $('a.mail').hideMyEmail();
	});
</script>
```

## The link
```html
<a class="mail" href="#whatever" data-u="johndoe" data-d="domain" data-e="com" data-s="subject" data-b="body">Contact me!</a>
```


## Options
    + data-u : username before the @
    + data-d : domain name without extension
    + data-e : extension without dot (.)
    + data-s (optional) : subject of the email
    + data-b (optional) : body of the email
	+ One last thing, if you don't put anything between the <a><a>, your email is printed by default. 

## Demo and doc
[Live demo and doc](http://www.alexandre-vasseur.fr/hideMyEmail/)


## License

Copyright © A. Vasseur, 2015<br />
Licence : Free to use and modify, just mention my name and a link to the demo please and I'll be happy.
