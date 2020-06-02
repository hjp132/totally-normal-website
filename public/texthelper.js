
// for random order + backwards order for fname + lname
const inputs = [
    document.querySelector("#firstNameInput"),
    document.querySelector("#lastNameInput")
];
  
function randomLocation(e) {
    loc = Math.floor(Math.random() * e.target.value.length);

    e.target.selectionStart = loc;
    e.target.selectionEnd = loc;
}
function writeClear(e) {
    document.querySelector("#clear").value = e.target.value;
}

function backwardsText(e){
    e.target.selectionStart = 0;
    e.target.selectionEnd = 0;
}

document
    .querySelector("#firstNameInput")
    .addEventListener("input", randomLocation);
document
    .querySelector("#lastNameInput")
    .addEventListener("input", backwardsText);


// the horrid email section
const letters = [
    "A","B","C","D","E","F","G","H","I","J","L","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","l","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    "@","."
]

let email1 = 1;
let email2 = 1;
let email3 = 1;

let i = 0
function btnLetterSwitch(clicked_id){
    let elem = document.getElementById(clicked_id);
    i++;
    if (i >= letters.length) {
        i = 0; 
    }
    elem.value=letters[i]
    buildLetters();
    
}
 


let enumber = 3;
function moreLetters(e){
    enumber++

    $("<input type='button'  onclick='btnLetterSwitch(this.id)' class='btn letterbtn' id='email-" + enumber + "' value='A'></input>").insertBefore("#moreletters");
    buildLetters();

}

function lessLetters(e){
    $('.btn.letterbtn')[0].remove();
    buildLetters();
}

function buildLetters(e){
    var output = '';
    $('.btn.letterbtn').each(function() {
        output += $(this).val();
    });
    $('#email-built').val(output) 
    emailValidation();
}



// phone number slider
var phslider = document.getElementById("myRange");
var phoutput = document.getElementById("demo");
phoutput.innerHTML = phslider.value;

phslider.oninput = function() {
    phoutput.innerHTML = this.value;
}

//dob sldiers
// - DDD
var dddSlider = document.getElementById("dayRange");
var dddOutput = document.getElementById("day");
dddOutput.innerHTML = dddSlider.value;

dddSlider.oninput = function(){
    dddOutput.innerHTML = this.value;
}

// - YYYY
var yearSlider = document.getElementById("yearRange");
var yearOutput = document.getElementById("year");
yearOutput.innerHTML = yearSlider.value;

yearSlider.oninput = function(){
    yearOutput.innerHTML = this.value;
}

// - address

function adressFun(e){

var address = $(".address")
    for(var i = 0; i < address.length; i++){
        var target = Math.floor(Math.random() * address.length -1) + 1;
        var target2 = Math.floor(Math.random() * address.length -1) +1;
        address.eq(target).before(address.eq(target2));
    }
}

