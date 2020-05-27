$(document).ready(() => {
    let counter = 1;
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
    // https://codepen.io/diegoleme/pen/surIK
});

// this doesn't work and you need to find a better way of doing this :) 

// let firstNameInput = document.getElementById("firstNameInput"),
//     thingy = "thingy";


//     function validatePassword(){
//         if(firstNameInput.value != thingy.value) {
//           confirm_password.setCustomValidity("Passwords Don't Match");
//         } else {
//           confirm_password.setCustomValidity('');
//         }
//       }
      
//       password.onchange = validatePassword;

// firstNameInput.onchange = validateThingy;
