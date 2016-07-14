
$(function(){
	//hover
	var $seat = $("div.col-md-3");
	$seat.hover(function(){
		$(this).fadeTo("fast", .5);
	},function(){
		$(this).fadeTo("fast", 1);
	});

	//click


	$seat.click(function(){
		$(this).toggleClass("blue");
		//$(this).unbind("onmouseover").unbind("onmouseout");

	});





//jquery selector that grabs content of element and stores it in a variable, variable can then be 
//summoned into the input field
/* target.on('click',function(){
	code to splice 3 from seat and add to input field
}); 
try .val(), .splice()




});*/
});







