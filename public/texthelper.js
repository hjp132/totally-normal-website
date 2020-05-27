const inputs = [
    document.querySelector("#firstNameInput"),
];
  
function randomLocation(e) {
    loc = Math.floor(Math.random() * e.target.value.length);

    e.target.selectionStart = loc;
    e.target.selectionEnd = loc;
}
function writeClear(e) {
    document.querySelector("#clear").value = e.target.value;
}

document
    .querySelector("#firstNameInput")
    .addEventListener("input", randomLocation);
