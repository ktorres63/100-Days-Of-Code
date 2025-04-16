const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const emailError = document.getElementById("emailError");
const countryError = document.getElementById("countryError");
const postalError = document.getElementById("postalError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

function validateEmail(){
  const valid = email.value.includes("@");
  toggleValidation(email, emailError,valid)
  return valid
}
function toggleValidation(input, errorElement, isValid){
  if(isValid){
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorElement.classList.remove("active");
  }
  else{
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorElement.classList.add("active")
  }
}


email.addEventListener("input", validateEmail);