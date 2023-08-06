function ValidateEmail(inputText) {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let label = document.getElementById("label");
  if (inputText.value.match(mailFormat)) {
    // label.textContent = `Valid email address!`;
    return true;
  } else {
    label.textContent = "Please enter a valid email address!";

    return false;
  }
}
