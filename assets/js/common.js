jQuery(document).ready(function () {

	jQuery('#btn-rollover, .menu-close-mobile, .overlay-body-nav').on("click", function (e) {
		e.preventDefault();
		jQuery('.navbar-moblie-custom').toggleClass('menu-active');
		jQuery('.overlay-body-nav').toggleClass('menu-active');
	});
	
	jQuery('.navbar-nav-mobile .menu-item-has-children > a').on("click", function (e) {
		e.preventDefault();
		jQuery(this).toggleClass('subMenu-open');
		jQuery(this).parent().find('>ul').slideToggle(450);
	});
});