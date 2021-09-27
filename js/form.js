
function validatedForm(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var confirm = document.getElementById("confirm").value;
	var mobile = document.getElementById("mobile").value;
	var email = document.getElementById("email").value;


	if(username =="" || username =="null")
	{
		document.getElementById("username-error").innerHTML = "**Enter the valid username";
		return false;
	}

	if(username.length < 8)
	{
		document.getElementById("username-error").innerHTML ="**Enter username with atleast 8-characters";
		return false;

	}
	if (password == "" || password == null) {
    document.getElementById("password-error").innerHTML = "** password field is required!";
    return false;
  	}

  	 if (confirm == "" || confirm == null) {
	    document.getElementById("confirm-error").innerHTML = "** confirm password field is required!";
	    return false;
	  }

	  if (confirm != password) {
	     document.getElementById("confirm-error").innerHTML = "** password and confirm password doesn't match!";
	    return false;
	}

	if(isNaN(mobile)){
		document.getElementById("mobile-error").innerHTML = "** Enter a valid mobile number";
		return false;
	}

	if(mobile.length < 10 || mobile.length >10)
	{
		document.getElementById("mobile-error").innerHTML ="Enter a 10 digit mobile number";
		return false;
	}

	if()

	if(charAt(email.length -3) != "." || charAt(email.length -4) != ".")
	{
		document.getElementById("email-error").innerHTML ="** Enter a valid email-address";
		return false;
	
	}
	 
}

