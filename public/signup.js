let stylesheetv1 = document.createElement("stylesheetv1");
stylesheetv1.rel = "stylesheet"
stylesheetv1.type = "text/css"
stylesheetv1.href = "CSS/style.css"
document.getElementsByTagName('HEAD')[0].appendChild(stylesheetv1);  



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
    
        $('#form-' + counter).addClass('viewed')
        
    })

    $('#button-back').click(() => {
        $('#form-' + counter).removeClass('viewed')
        counter--
        if (counter == 1){
                $('#button-back').addClass('hidden');
            }
        $('#form-' + counter).addClass('viewed')
  
    })

    $("#firstNameInput").change(() => {

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
    let inputted = $("#" + textID).val()
    let test = $("#auth-" + counter)

    if (inputted == ""){
        $("#button-next").removeClass("visible")
        test.removeClass("green");

    }else {
        test.addClass("green")
        $("#button-next").addClass("visible")
    }   
}

function emailValidation(){
    let email = $('#email-built').val()
    let validation = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm
    if (email.match(validation)){
        showNextBtn();
        $('#auth-3').addClass("green")
    }
    else {
        hideNextBtn();
        $('#auth-3').removeClass("green")
    }
}

function dobValidation(){
    showNextBtn();
    $('#auth-4').addClass("green")

}

function phoneValidation(thisid){
    let validation = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
    let phone = $("#" + thisid).val()
    if (phone.match(validation)){
        showNextBtn();
        $('#auth-5').addClass("green")
    }
    else {
        hideNextBtn();
        $('#auth-5').removeClass("green")
    }
}

//password validation is in password.js


