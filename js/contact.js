// Form validation function
// This code is majorly inspired by the tutorial found at:
// https://www.geeksforgeeks.org/create-a-contact-form-using-html-css-javascript/


function validate() {
    // Retrieve form data
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");

    // Set padding for the error message box
    error_message.style.padding = "10px";

    // Array to hold validation errors
    let errors = [];

    // Validate name
    if (name.length < 3) {
        errors.push("Please Enter a valid Name");
    }
    // Validate subject
    if (subject.length < 3) {
        errors.push("Please Enter a Correct Subject");
    }
    // Validate phone number
    if (isNaN(phone) || phone.length < 9) {
        errors.push("Please Enter a valid Phone Number");
    }
    // Validate email
    if (email.indexOf("@") == -1 || email.length < 6) {
        errors.push("Please Enter a valid Email");
    }
    // Validate message length
    if (message.length < 40) {
        errors.push("Please Enter More Than 40 Characters");
    }

    // Display errors or success message
    if (errors.length > 0) {
        error_message.innerHTML = errors.join("<br>");
        return false;
    }
    else {
        alert("Form Submitted Successfully!");
        return true;
    }
}