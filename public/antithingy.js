<<<<<<< Updated upstream

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

=======
function CheckPassword(inputtxt) 
{ 
var passw= "Thingy";
if(inputtxt.value.match(passw)) 
{ 
console.log('Correct, try another...')
return true;
}
else
{ 
console.log('Wrong...!')
return false;
}
}
>>>>>>> Stashed changes
