const loginForm = document.querySelector("#login-form");

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (email.value === "" || password.value === "") {

        message.textContent = "Please fill in all fields.";
        message.style.color = "red";

        email.style.border = "2px solid red";
        password.style.border = "2px solid red";

    } else {

        message.textContent = "Login Successful!";
        message.style.color = "green";

        email.style.border = "2px solid green";
        password.style.border = "2px solid green";

    }
});
email.addEventListener("input", function () {
    message.textContent = "";
    email.style.border = "";
});

password.addEventListener("input", function () {
    message.textContent = "";
    password.style.border = "";
});