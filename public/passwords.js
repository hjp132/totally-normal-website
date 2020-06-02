let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let numerals = document.getElementById("numerals");
let specchar = document.getElementById("specChar");
let timeinHour = document.getElementById("timeinhour");
let hexCode = document.getElementById("hexCode");
let brazilCode = document.getElementById("brazilCode");


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
    $('#specChar').css("display", "block")
  }
  if($(".valid").length >= 5){
    $('#numerals').css("display", "block")
  }
  if($(".valid").length >= 6){
    $('#hexCode').css("display", "block")
  }
  if($(".valid").length >= 7){
    $('#brazilCode').css("display", "block")
  }
  if($(".valid").length >= 8){
    showNextBtn();
  } else {
    hideNextBtn
  }


  //Roman Numerals
  //regexr.com/3e95j
  let Numerals = /(?=[MDCLXVI])M*(C[MD]|D?C*)(X[CL]|L?X*)(I[XV]|V?I*)/g;
  if(myInput.value.match(Numerals)){
    numerals.classList.remove("invalid");
    numerals.classList.add("valid");
  } else {
    numerals.classList.remove("valid");
    numerals.classList.add("invalid");
  }

  let SpecChar = /[^A-z\s\d][\\\^]?/g
  if(myInput.value.match(SpecChar)) {
    specChar.classList.remove("invalid");
    specChar.classList.add("valid");
  } else {
    specChar.classList.remove("valid");
    specChar.classList.add("invalid");
  }

  let HexCode = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/
  if(myInput.value.match(HexCode)){
    hexCode.classList.remove("invalid");
    hexCode.classList.add("valid");
  } else {
    hexCode.classList.remove("valid");
    hexCode.classList.add("invalid");
  }

  let brazilcode = /(A[CLPM]|BA|CE|DF|GO|ES|M[ATSG]|P[ABREI]|R[JNSOR]|S[PCE]|TO)/gi
  if(myInput.value.match(brazilcode)){
    brazilCode.classList.remove("invalid");
    brazilCode.classList.add("valid");
  } else {
    brazilCode.classList.remove("valid");
    brazilCode.classList.add("invalid");
  }
}

// confirm password

function isPasswordMatch() {
  // let password = $("#psw").val();
  // let confirmPassword = $("#retypepsw").val();

  // if (password != confirmPassword) {
  //   hideNextBtn();
  // }else {
    showNextBtn();
  // } 
}

//hP1davee@iv/#FFFFFFAC
$(document).ready(function () {
  $("#retypepsw").keyup(isPasswordMatch);
});



// Start with an initial value of 20 seconds
const TIME_LIMIT = 20;

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;

function formatTimeLeft(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);
  
  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;
  
  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

document.getElementById("firstNameLabel").innerHTML = `<span class="countdown" id="countdown">
${formatTime(timeLeft)}
</span>`