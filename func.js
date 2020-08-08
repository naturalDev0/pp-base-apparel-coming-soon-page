// Add in functions later on for email input validation

const re = /^(\w+)@(\w+).*(\w+)$/;  // email validation regex
const form = document.querySelector(".form");
const errmsg = document.querySelector("#error-msg");
const errIcon = document.querySelector(".email");

// Validating email
document.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = errIcon.value;

    // Check if 'email' value is correct validation
    if (!re.test(email)) { 
        
        // Output result towards HTML page
        errmsg.innerHTML = "Please provide a valid email";
        errIcon.classList.add("err-icon");
        // form.classList.add("error");
        // return false;   // return the status to form
    } else {
        errmsg.innerHTML = "";
        errIcon.classList.remove("err-icon");
        // form.classList.remove("error");
        console.log("Email submitted");
        // return true;
    }

    errIcon.value = "";
});