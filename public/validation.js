//validaiton for all form inputs


// firstname
let fName = $('#firstNameInput')
document
    .querySelector("#firstNameInput")
    .addEventListener("input", fnameValidation)


function fnameValidation(textID){
   
    let elem = document.getElementById(textID)
    let test = $(elem).siblings('.auth')
    // if (elem.value == "thingy"){
    //     test.removeClass("green")
    //     test.addClass("red")
    //     location.replace("https://youtu.be/My0lzMuNcHI")
    // }
        console.log("safe")
        test.remove("red");
        test.addClass("green")
    // }  
}


