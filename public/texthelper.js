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


const letters = [
    "A","B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
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
}
 
function moreLetters(e){
    $('<input type="button"  onclick="btnLetterSwitch(this.id)" class="btn" id="email-3" value="A"></input>').insertBefore("#moreletters");

}



