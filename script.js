$(function(){

	//hover to fade button
	var $seat = $("button.button");
	$seat.mouseenter(function(){
		$(this).fadeTo("fast", 0.5);
	});
	$seat.mouseleave (function(){
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
    $("#name").show();
    if (text === "reserved") {
        $("#input").val("");
    }
});





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





$("button").on("click", function() {
  var el = $(this);
  if (el.text() === el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  } 
});






















});



  













