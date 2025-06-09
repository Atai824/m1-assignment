var contactSelect = document.getElementById("contactMethod");
var emailField = document.getElementById("emailField");
var phoneField = document.getElementById("phoneField");

contactSelect.addEventListener("change", function () {
    var selectedValue = contactSelect.value;
    if(selectedValue === "email") {
        emailField.style.display = "block";
        phoneField.style.display = "none";
    } else if (selectedValue === "phone") {
        phoneField.style.display = "block";
        emailField.style.display = "none";
    } else {
        phoneField.style.display = "none";
        emailField.style.display = "none";
    }
});