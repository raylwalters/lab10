
$(function(){

	//hover to fade button
	var $seat = $("button.button");
	$seat.hover(function(){
		$(this).fadeTo("fast", .5);
	},function(){
		$(this).fadeTo("fast", 1);
	});

	//click to toggle the blue class
	$seat.click(function(){
		$(this).toggleClass("blue");
		//$(this).unbind("onmouseover").unbind("onmouseout");

	});

$(".button").on('click',function() {
  var text = $(this).text();
  $("#input").val(text);
});



// $(".button").on('click', function(){
// 	$(this).text("Reserved");
// });

//******Check that fields are filled in to submit******
$("button").click(function(){
	var $name = $("input#enterName");
	var $email = $("input#enterEmail");
	var $date = $("input#selectDate");
	var $allSeats = $("input#input");
	if($name.text() === " " && $email.text() === " " && $date.text() === " " && $allSeats.text() === " "){
		console.log("nope");
	}else{
		console.log("Booked");
	}
});
























});








