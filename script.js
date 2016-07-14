$(function(){
	//hover
	var $seat = $("div.col-lg-3");
	$seat.hover(function(){
		$(this).fadeTo("fast", .5);
	},function(){
		$(this).fadeTo("fast", 1);
	});

	//click

	$seat.on("click", function(){
		$(this).css("background-color", "blue");
	});



















});