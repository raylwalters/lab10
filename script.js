
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

















<<<<<<< HEAD
});
=======





});
=======
>>>>>>> b90463595b956377886349e087e19d17bae2d236
>>>>>>> 2728a844e6e2b087cf7647218601b9f99109284b
