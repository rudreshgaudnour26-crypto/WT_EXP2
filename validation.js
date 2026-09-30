// all inputs
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorMessage_password = document.getElementById('error-message-password');
const email = document.getElementById('email');
const errorMessage_email = document.getElementById('error-message-email');

function validateEmail() {
    const emailValue = email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern

    if (!emailPattern.test(emailValue)) {
        errorMessage_email.textContent = "Please enter a valid email address.";
    } else {
        errorMessage_email.textContent = "";
    }
    }

// checks if both password matches
function checkPasswordMatch() {

    // Compare values
    if (password.value !== confirmPassword.value) {
        errorMessage_password.textContent = "Passwords do not match!";
    } else {
        errorMessage_password.textContent = "";
    }
}

//Triggers
confirmPassword.addEventListener('input', checkPasswordMatch);
password.addEventListener('input', checkPasswordMatch);
email.addEventListener('input', validateEmail);