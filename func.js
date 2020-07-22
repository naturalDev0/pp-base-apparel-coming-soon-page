// Add in functions later on for email input validation

const re = /^(\w+)@(\w+).*(\w+)$/;  // email validation regex
const form = document.querySelector(".form");
const errmsg = document.querySelector("#error-msg");

// Validating email
document.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;        

    // Check if 'email' value is correct validation
    if (!re.test(email)) { 
        
        // Output result towards HTML page
        errmsg.innerHTML = "Please provide a valid email";
        form.classList.add("error");
        // return false;   // return the status to form
    } else {
        errmsg.innerHTML = "";
        form.classList.remove("error");
        console.log("Email submitted");
        // return true;
    }

    document.getElementById("email").value = "";
});


// function emailValid() {
    
//     let email = document.getElementById("email").value,
//         error = document.getElementById("error-msg");

//     // Check if 'email' value is correct validation
//     if (!re.test(email)) { 
        
//         // Output result towards HTML page
//         error.innerHTML = "Please provide a valid email";
//         return false;   // return the status to form
//     } else {
//         error.innerHTML = "";
//         return true;
//     }

//     // e.preventDefault();
      
//     // if (emailIsValid($input.value)) {
//     //     $form.classList.remove("error");
//     //     $error.style.visibility = "hidden";
//     //     alert("Thank you for signing up!");
//     // } else {
//     //     $form.classList.add("error");
//     //     $error.style.visibility = "visible";
//     // }
    
//     // $input.value = "";

//     // $form.addEventListener("submit", function (e) {
        
//     // });

// }