$(function(){

	$(".form-group").hide().filter("#seat").show();

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



//******Fills in form with seat number and removes when seat is unclicked******

var arraySeats =[];

$(".button").on('click',function() {
  var text = $(this).text();

//Puts seats into an array and prints them in the input
	if (text !== "reserved"){
	arraySeats.push(text);
	console.log(arraySeats);
	arraySeats.forEach(function(each){
		$("#input").val(arraySeats);
	})
} else {
	arraySeats.filter(function(item){
		return item !== this.text();
		console.log(arraySeats);
	});
	console.log(arraySeats);
	$("#input").val(arraySeats);
}



});

//******Adds input once previous input is filled******

$( "#name" ).keypress(function() {
  $("#email").show();
});

$( "#email" ).keypress(function() {
  $("#date").show();
});

$( "#email" ).keypress(function() {
  $("#submit").show();
});


//******Check that fields are filled in to submit******
$(".btn").click(function(){
	var $name = $("input#enterName");
	var $email = $("input#enterEmail");
	var $date = $("input#selectDate");
	var $allSeats = $("input#input");
	if(!$name.val())
		//&& !$email.val() && !$date.val() && !$allSeats.val()
	{
		console.log("nope");
	}
		else if(!$email.val()){
			console.log("nope");
		}
			else if(!$date.val()){
				console.log("nope");
			}
				else if(!$allSeats.val()){
					console.log("nope");
				}



	else{
		$name = $name.val();
		$email = $email.val();
		$date = $date.val();
		$allSeats = $allSeats.val();
		console.log($name);
		//$(".textbox").append("<li>" +$name + "</li>" + "<li>" + $email + "</li>" +"<li>" $date + "</li>" + $allSeats +"</li>");
		$("ul.textbox").append('<li>' + $name + '</li>');
		$("ul.textbox").append('<li>' + $email + '</li>');
		$("ul.textbox").append('<li>' + $date + '</li>');
		$("ul.textbox").append('<li>' + $allSeats + '</li>');

		// $(".textbox").val($email);
		// $(".textbox").val($date);
		// $(".textbox").val($allSeats);

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
