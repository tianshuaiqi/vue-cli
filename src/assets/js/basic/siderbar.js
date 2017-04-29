$(document).ready(function(){
/*	$().click(() => {
		
	})*/
	$('.silder-bar > li > a').click(function(){
		$(this).next('ul').slideToggle();
		$(this).next('ul').children('li').addClass('bor-left')
	})
})