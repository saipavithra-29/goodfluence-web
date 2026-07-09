// =======================
// Login Page
// =======================

const loginForm = document.querySelector("#login-form");

if (loginForm) {

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
}

// =======================
// Register Page
// =======================

const registerForm = document.querySelector("#register-form");

if (registerForm) {

    const fullName = document.querySelector("#full-name");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    const terms = document.querySelector("#terms");
    const message = document.querySelector("#message");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (
            fullName.value === "" ||
            username.value === "" ||
            email.value === "" ||
            password.value === "" ||
            confirmPassword.value === ""
        ) {

            message.textContent = "Please fill in all fields.";
            message.style.color = "red";

        } else if (password.value !== confirmPassword.value) {

            message.textContent = "Passwords do not match.";
            message.style.color = "red";

        } else if (!terms.checked) {

            message.textContent = "Please accept the Terms & Conditions.";
            message.style.color = "red";

        } else {

            message.textContent = "Registration Successful!";
            message.style.color = "green";

        }
    });
}