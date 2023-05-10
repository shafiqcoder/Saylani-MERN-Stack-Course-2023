const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("password_confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkinputs();
  thankyou();

});

function checkinputs() {
  //Get values from Input
  const usernameValue = username.value.trim(); //Trims removes extra spaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password_confirmValue = password_confirm.value.trim();
  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    //add success class
    setSuceessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!ValidateEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuceessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    //add success class
    setSuceessFor(password);
  }
  if (password_confirmValue === "") {
    setErrorFor(password_confirm, "Password confirmation cannot be blank.");
  } else if (passwordValue !== password_confirmValue) {
    setErrorFor(password_confirm, "Passwords does not match");
  } else {
    setSuceessFor(password_confirm);
  }
}

function thankyou() {
  if (checkinputs() === true) {
    alert("Thank you for subscribing!");
  }
}

function setErrorFor(Input, message) {
  const formControl = Input.parentElement; //form-control
  const small = formControl.querySelector("small"); //Error Message
  //add error message inside small
  small.innerText = message;
  //add error class
  formControl.className = "form-control error";
}
function setSuceessFor(input) {
  const formControl = input.parentElement;
  console.log(formControl)
  formControl.className = "form-control success";
  console.log(formControl.className)

}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
    return true;
  }
  return false;
}
