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
// =======================
// Home Page
// =======================

const postInput = document.querySelector("#post-input");
const postButton = document.querySelector("#post-button");
const postsContainer = document.querySelector("#posts-container");
const characterCount = document.querySelector("#character-count");

if (postButton) {

    postInput.addEventListener("input", function () {

        if (postInput.value.length > 200) {
            postInput.value = postInput.value.substring(0, 200);
        }

        const length = postInput.value.length;

        characterCount.textContent = `${length} / 200 characters`;

        if (length >= 200) {

            characterCount.style.color = "#DC2626";

        } else if (length >= 150) {

            characterCount.style.color = "#EA580C";

        } else {

            characterCount.style.color = "#64748B";

        }

    });

    postButton.addEventListener("click", function () {
        if (postInput.value.trim() === "") {
            alert("Please write something before posting.");
            return;
        }
        const newPost = document.createElement("div");
        newPost.classList.add("post-card");
        const now = new Date();

        const currentTime = now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

        newPost.innerHTML = `
            <h3>You</h3>

            <p class="post-time">${currentTime}</p>

            <p>${postInput.value}</p>

            <button class="like-post">
                🤍 Like
            </button>

            <button class="delete-post">
                Delete
            </button>
        `;
        const deleteButton = newPost.querySelector(".delete-post");
        const likeButton = newPost.querySelector(".like-post");

        likeButton.addEventListener("click", function () {

            if (likeButton.textContent === "🤍 Like") {

                likeButton.textContent = "❤️ Liked";
                likeButton.style.backgroundColor = "#FEE2E2";
                likeButton.style.color = "#DC2626";

            } else {

                likeButton.textContent = "🤍 Like";
                likeButton.style.backgroundColor = "#E2E8F0";
                likeButton.style.color = "#334155";

            }

        });

        deleteButton.addEventListener("click", function () {
            newPost.remove();

        });
        postsContainer.prepend(newPost);
        postInput.value = "";
    });
}



if (postButton) {
    postInput.addEventListener("input", function () {

        characterCount.textContent = `${postInput.value.length} / 200 characters`;

    });
}