let counter = 1;
$(document).ready(() => {
    counter = 1;
    $('#button-back').addClass('hidden');
    $('#form-' + counter).addClass('viewed');

    $('#button-next').click(() => {
        $('#form-' + counter).removeClass('viewed')
        counter++
        if (counter > 1 ){
        $('#button-back').removeClass('hidden');
    }
        console.log(counter)
        $('#form-' + counter).addClass('viewed')
        
    })

    $('#button-back').click(() => {
        $('#form-' + counter).removeClass('viewed')
        counter--
        if (counter == 1){
                $('#button-back').addClass('hidden');
            }
        $('#form-' + counter).addClass('viewed')
        console.log(counter)
    })

    $("#firstNameInput").change(() => {
        console.log("changed")
        let firstNameStr = $("#firstNameInput").val;
        if (firstNameStr == "thingy"){
        }

    })
});

//validaiton for all form inputs


// firstname

// document
//     .querySelector("#firstNameInput")
//     .addEventListener("input", nameValidation)



function hideNextBtn(){
    $('#button-next').removeClass("visible")
    $('#button-next').addClass("hidden")

}

function showNextBtn(){
    $('#button-next').removeClass("hidden")
    $('#button-next').addClass("visible")
}
function nameValidation(textID){
   
    // console.log(textID)
    // let inputted = document.getElementById(textID).value
    // let test = $("#auth-" + counter)

    // if (inputted == null){
    //     $("#button-next").removeClass("visible")
    //     test.removeClass("green");
    //     console.log("bad" + counter)
    // }else {
    //     console.log("safe" + counter)
        
        // test.addClass("green")
        $("#button-next").addClass("visible")
    // }   
}

function emailValidation(){
    let email = $('#email-built').val()
    let validation = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm
    // if (email.match(validation)){
        showNextBtn();
    //     console.log("good email")
    // }
    // else {
        // hideNextBtn();
        // console.log("bad email")
    // }
}

function dobValidation(){
    showNextBtn();
}

function phoneValidation(thisid){
    // let validation = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
    // let phone = $("#" + thisid).val()
    // if (phone.match(validation)){
        showNextBtn();
    // }
    // else {
    //     hideNextBtn();
    // }
}

//password validation is in password.js
