function sendContact() {
    var valid;	
    valid = validateContact();
    if(valid) {
        jQuery.ajax({
            url: "contact_mail.php",
            data:'name='+$("#name").val()+'&email='+
            $("#email").val()+'&phone='+
            $("#phone").val()+'&subject='+
            $("#subject").val()+'&message='+
            $('#message').val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data);
				$("#name").val('');
				$("#email").val('');
				$("#phone").val('');
				$("#subject").val('');
				$("#message").val('');
            },
            error:function (){}
        });
    }
}
function validateContact() {
    var valid = true;	
    $(".info").html('');
    if(!$("#name").val()) {
        $("#name-info").html("Please enter your name");
        $("#name").css('background-color','#FFFFDF');
        valid = false;
    }
	if(!$("#email").val()) {
        $("#email-info").html("Please enter your email");
        $("#email").css('background-color','#FFFFDF');
        valid = false;
    }
	if($("#email").val()!='') {
		if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
			$("#email-info").html("Please enter valid email");
			$("#email").css('background-color','#FFFFDF');
			valid = false;
		}
	}
    if(!$("#phone").val()) {
        $("#phone-info").html("Please enter your phone number");
        $("#phone").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#subject").val()) {
        $("#subject-info").html("Please enter your subject");
        $("#subject").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#message").val()) {
        $("#message-info").html("Please enter your message");
        $("#message").css('background-color','#FFFFDF');
        valid = false;
    }
    return valid;
}