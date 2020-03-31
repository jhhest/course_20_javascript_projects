const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message.
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show succes outline
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid with a regular expression.
function isValidEmail(email) {
  const re = 
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "username is required");
  } else {
    showSucces(username);
  }
  if (email.value === "") {
    showError(email, "email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSucces(email);
  }
});
