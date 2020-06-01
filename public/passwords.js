var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var numerals = document.getElementById("numerals");
var specchar = document.getElementById("specChar");
var timeinHour = document.getElementById("timeinhour");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("passwordCri").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("passwordCri").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  if($(".valid").length >= 4){
    $('#numerals').css("display", "block")
  }
  if($(".valid").length >= 5){
    $('#specChar').css("display", "block")
  }
  if($(".valid").length >= 6){
    $('#timeinHour').css("display", "block")
  }

  //Roman Numerals
  let Numerals = /^[MDCLXVI]+$/;
  if(myInput.value.match(Numerals)){

  }


  
}




