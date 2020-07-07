// Add in functions later on for email input validation

const re = /^(\w+)@(\w+).*(\w+)$/;  // email validation

// Validating email
function emailValid() {
    
    let email = document.getElementById("email").value,
        error = document.getElementById("error-msg");

    // Check if 'email' value is correct validation
    if (!re.test(email)) { 
        
        // Output result towards HTML page
        error.innerHTML = "Please provide a valid email";
        return false;   // return the status to form
    } else {
        error.innerHTML = "";
        return true;
    }
}