// Add in functions later on for email input validation

function emailValid() {
    
    let value = document.getElementById("email").value,
        error = document.getElementById("error-msg"),
        text = "";

    console.log(value);
    console.log(error);

    if (value === "") { 
        error.innerHTML = "Please provide an email";
        return false;
    } else {
        error.innerHTML = "Input ok";
        return true;
    }
}