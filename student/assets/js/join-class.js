const back_class_render = document.querySelector("#back-class-render");

document.addEventListener("DOMContentLoaded", function () {
  back_class_render.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});

// Autocomplete and Uppercase characters
const inputs = document.querySelectorAll(".otp-input");

// Add event listener to each input field
inputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    // Convert input value to uppercase
    this.value = this.value.toUpperCase();

    // Move focus to the next input field if there is any
    if (this.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

    // Autocomplete if current input has value
    if (this.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].value = "";
      inputs[index + 1].focus();
    }
  });

  // delete function
  input.addEventListener("keydown", function (event) {
    if (event.key === "Backspace" && index > 0 && this.value.length === 0) {
      inputs[index - 1].focus();
    }
  });
});
