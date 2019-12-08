/*
 This overlay was made by Kruiser8 (https://twitch.tv/kruiser8)
  and is licensed under the Creative Commmons Attribution 4.0 International License (CC BY 4.0)

 For License information, visit https://creativecommons.org/licenses/by/4.0/
*/
var timer = 0;
var timeoutIn;
var timeoutOut;

/**
 * Animate the given element in with the animation
 * @param {string} selector element selector
 * @param {string} animationIn name of the animation class to apply
 */
function animateIn(selector, animationIn) {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$( selector ).css('visibility','visible');
	$( selector ).addClass('animated ' + animationIn).on(animationEnd, function() {
		$( selector ).css('visibility','visible');
		$( selector ).removeClass('animated ' + animationIn);
	});
	timer = 0;
	timeoutOut = setTimeout(animateOut,duration*1000,'.logo','fadeOut');
}

/**
 * Animate the given element out with the animation
 * @param {string} selector element selector
 * @param {string} animationOut name of the animation class to apply
 */
function animateOut(selector, animationOut) {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$( selector).addClass('animated ' + animationOut).on(animationEnd, function() {
		$( selector ).css("visibility","hidden");
		$( selector ).removeClass('animated ' + animationOut);
	});
	timer = 1;
	if (repeat != 0) {
		timeoutIn = setTimeout(animateIn,repeat*60*1000,'.logo','fadeIn');
	}
}
