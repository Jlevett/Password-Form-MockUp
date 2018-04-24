 $(function() {

	//Create An event that fires when any key pressed in the inputbox
	$('#firstpassword').keyup(checkCorrectFormat);

	function checkCorrectFormat() {
		$('#firstpassword')[0].setCustomValidity("");
		$('#secondpassword')[0].setCustomValidity("");
		//condition1 [length>16]
		if($('#firstpassword').val().match(`.{16,}`))
			$('#length').addClass('correct');
		else
			$('#length').removeClass('correct');
		//condition2 [contain one of !, @, #, $, %]
		if($('#firstpassword').val().match(`[!@#$%]+`))
			$('#symbol1').addClass('correct');
		else
			$('#symbol1').removeClass('correct');
		//condition3 -  at least one digit
		if($('#firstpassword').val().match(`\\d+`))
			$('#number1').addClass('correct');
		else
			$('#number1').removeClass('correct');
		//condition4 - at least one lowercase
		if($('#firstpassword').val().match(`[a-z]+`))
			$('#lowercase1').addClass('correct');
		else
			$('#lowercase1').removeClass('correct');
		//condition5 - at least one uppercase
		if($('#firstpassword').val().match(`[A-Z]+`))
			$('#uppercase1').addClass('correct');
		else
			$('#uppercase1').removeClass('correct');
		//If all 5 conditons are correct return true, else false
		if($('.correct').length===5)
			return true;
		else
			return false;
	}

	//If any keyup event occurs remove validity box.
	$('#secondpassword').keyup(function() {
		$('#firstpassword')[0].setCustomValidity("");
		$('#secondpassword')[0].setCustomValidity("");
	});

	//When the submit button is click, accept or reject (display correct reason)
	$('#submit').click(function() {
		if($('#firstpassword').val().length == 0){
		} else if(!checkCorrectFormat())
			$('#firstpassword')[0].setCustomValidity("Does not meet password conditions!");
		else if($('#secondpassword').val().length == 0)
			$('#secondpassword')[0].setCustomValidity("Please fill out this field.");
 		else if($('#firstpassword').val() !== $('#secondpassword').val())
 	 		$('#secondpassword')[0].setCustomValidity("Passwords do not match");
 	 	else{
		  $('#secondpassword')[0].setCustomValidity("");
		  alert("Form submitted");
		}
	});

	//If checkbox is checked make passwords visible if not make them not visible
	$('#checkBox').click(function() {
		if($('#firstpassword')[0].type === "text") {
			$('#firstpassword')[0].type = "password";
			$('#secondpassword')[0].type = "password";
		} else {
			$('#firstpassword')[0].type = "text";
			$('#secondpassword')[0].type = "text";
		}
	});

});
