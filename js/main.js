$('.carousel').carousel({
	interval: 3000,
	pause: false
});


$(document).ready(function() {
				var menuBtn = $('.top-nav_btn');
				var menu = $('.top-nav_menu');
				

				menuBtn.on('click',  function(event) {
					event.preventDefault();
					/* Act on the event */
					menu.toggleClass('top-nav_menu__active');
				});

});