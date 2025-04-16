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
let hasInteracted = false;

function validateEmail() {
  const valid = email.checkValidity();
  toggleValidation(emailError, valid);
  return valid;
}
function validateCountry() {
  const valid = country.checkValidity();
  toggleValidation(countryError, valid);
  return valid;
}
function validatePostal() {
  const valid = !postal.validity.patternMismatch;
  toggleValidation(postalError, valid);
  return valid;
}
function validatePassword() {
  const valid = password.checkValidity();
  toggleValidation(passwordError, valid);
  return valid;
}
function validateConfirmPassword() {
  const valid =
    password.value === confirmPassword.value && confirmPassword !== "";
  toggleValidation(confirmError, valid);
  return valid;
}

function toggleValidation(errorElement, isValid) {
  if (isValid) {
    errorElement.classList.remove("active");
  } else {
    errorElement.classList.add("active");
  }
}

email.addEventListener("input", validateEmail);
country.addEventListener("input", validateCountry);
postal.addEventListener("input", validatePostal);
password.addEventListener("input", () => {
  validatePassword();
  validateConfirmPassword();
});
confirmPassword.addEventListener("input", validateConfirmPassword);

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const isFormValid =
    validateEmail() &&
    validateCountry() &&
    validatePostal() &&
    validatePassword() &&
    validateConfirmPassword();

  if (isFormValid) {
    alert("form submitted sucessfully")
  }
  else{
    alert("Fix errors")
  }
});