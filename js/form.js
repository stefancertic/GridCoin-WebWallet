$(function() {
  $('.error').hide();
  $('input.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFDDAA"});
  });
  $('input.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });

  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    $('.error').hide();
		
	  var name = $("input#name").val();
		if (name == "") {
      $("label#name_error").show();
      $("input#name").focus();
      return false;
    }
	var email = $("input#email").val();
		if (email == "" || email == null || email.indexOf("@") < 1 || email.indexOf(".") < 1 || email.length == 0){
     	 $("label#email_error").show();
      	$("input#email").focus();
     	 return false;
   		 }		 
		 
		
	var captcha = $("input#captcha").val();
		if (captcha != "16") {
      $("label#captcha_error").show();
      $("input#captcha").focus();
      return false;
    }
	
	var feedback = $("textarea#feedback").val();
		if (feedback == "") {
      $("label#feedback_error").show();
      $("textarea#feedback").focus();
      return false;
    }
	
	
	
		
		var dataString = 'name='+ name + '&email=' + email + '&captcha=' + captcha + '&feedback=' + feedback;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "process.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("<h2>Successfully Submitted!</h2>")
        .append("<p>We will be in touch soon.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<img id='checkmark' src='images/check.png' />");
        });
      }
     });
    return false;
	});
});

//----------newslettr


