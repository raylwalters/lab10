
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

$(".button").on('click',function() {
  var text = $(this).text();
  $("input").val(text);
});



$(".button").on('click', function(){
	$(this).text("Reserved");
})
























});








