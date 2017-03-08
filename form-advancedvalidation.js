function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(userEntered.length>=6){
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else{
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameSuccess").innerHTML="invalid username.";

    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
  if (userEntered.indexOf(" ")>0) {
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameSuccess").innerHTML="invalid username.";

    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username can not contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
else{
  document.getElementById("usernameGroup").classList.add("has-success");

}
if (passEntered == "password"){
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");

  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Password can not be password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
}
else{
  document.getElementById("passwordGroup").classList.add("has-success");
}
if (passEntered==userEntered){
  document.getElementById("passwordGroup").classList.add("has-error");

  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Password and Username must be different.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");

}
else{
  document.getElementById("passwordGroup").classList.add("has-success");

}
if(passEntered.length>=6){
  document.getElementById("passwordGroup").classList.add("has-success");

}
else{
  document.getElementById("passwordGroup").classList.add("has-error");

  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");

}

}
