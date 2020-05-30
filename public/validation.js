//validaiton for all form inputs


// firstname
let fName = $('#firstNameInput')
document
    .querySelector("#firstNameInput")
    .addEventListener("input", fnameValidation)


function fnameValidation(textID){
   
    let elem = document.getElementById(textID)
    let test = $(elem).siblings('.auth')

    if ($(textID) == null){
        $("#button-next").removeClass("visible")
        test.remove("green");
    }
    else {
        console.log("safe")
        
        test.addClass("green")
        $("#button-next").addClass("visible")
    }

    
       
}


