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


const inputKeys = {
    A: "A",
    B: "B",
    C: "C"
}

function change(){
    var elem = document.getElementById("email-1");
    if (elem.value=="Before") elem.value = "After";
    else elem.value = "Before";
}

