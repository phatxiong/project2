$(document).ready(function() {

	var images = ["1.gif", "2.gif", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

	var x = Math.floor(Math.random()*images.length);
	$("#background").css({"background-image":"url(images/"+images[x]+")"});

$("#colossal").click(function(){
	var x = Math.floor(Math.random()*images.length);
	$("#background").css({"background-image":"url(images/"+images[x]+")"});
	});


	$("#colossal").mouseenter(function() {
		$("#colossal").fadeTo("fast", 0.5);
	});

	$("#colossal").mouseleave(function() {
		$("#colossal").fadeTo("fast", 1);
	});

	$("#art").mouseenter(function() {
		$(this).toggleClass("change");
	});

	$("#art").mouseleave(function() {
		$(this).toggleClass("back");
	});

	$("#design").mouseenter(function() {
		$(this).toggleClass("change2");
	});

	$("#design").mouseleave(function() {
		$(this).toggleClass("back");
	});

	$("#photography").mouseenter(function() {
		$(this).toggleClass("change3");
	});

	$("#photography").mouseleave(function() {
		$(this).toggleClass("back");
	});

	$("#craft").mouseenter(function() {
		$(this).toggleClass("change4");
	});

	$("#craft").mouseleave(function() {
		$(this).toggleClass("back");
	});

	$("#illustration").mouseenter(function() {
		$(this).toggleClass("change5");
	});

	$("#illustration").mouseleave(function() {
		$(this).toggleClass("back");
	});

	$('.arrow3').click(function() { 
	$('html, body').animate({
		scrollTop: $('#roundtwo').offset().top
	}, 900);
	});

	$('.arrow4').click(function() { 
	$('html, body').animate({
		scrollTop: $('#roundtwo').offset().top
	}, 900);
	});

	$('.arrow5').click(function() { 
	$('html, body').animate({
		scrollTop: $('#roundtwo').offset().top
	}, 900);
	});

	$('.arrow6').click(function() { 
	$('html, body').animate({
		scrollTop: $('#roundtwo').offset().top
	}, 900);
	});




});

$(document).ready(function() {

var rellax = new Rellax('.rellax');

});


