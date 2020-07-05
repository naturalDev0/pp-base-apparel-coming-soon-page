// Add in functions later on for email input validation

// Validating email
function emailValid() {
    
    let value = document.getElementById("email").value,
        error = document.getElementById("error-msg");

    // Check if value is empty
    if (value === "") { 
        
        // Output result towards HTML page
        error.innerHTML = "Please provide a valid email";
        return false;   // return the status to form
    } else {
        error.innerHTML = "";
        return true;
    }
}