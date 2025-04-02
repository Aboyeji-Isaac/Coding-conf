document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameError.classList.remove("hidden");
            nameInput.classList.add("border-red-500");
            isValid = false;
        } else {
            nameError.classList.add("hidden");
            nameInput.classList.remove("border-red-500");
        }

        // Email validation
        if (!emailInput.value.match(/^\S+@\S+\.\S+$/)) {
            emailError.textContent = "Enter a valid email.";
            emailError.classList.remove("hidden");
            emailInput.classList.add("border-red-500");
            isValid = false;
        } else {
            emailError.classList.add("hidden");
            emailInput.classList.remove("border-red-500");
        }

        // Show success message if valid
        if (isValid) {
            successMessage.textContent = "Form submitted successfully!";
            successMessage.classList.remove("hidden");
            form.reset();
        } else {
            successMessage.classList.add("hidden");
        }
    });
});



const fileUpload = document.getElementById("file-upload");
const imageContainer = document.getElementById("image-container");
const preview = document.getElementById("preview");
const dropzone = document.querySelector(".dropzone");

fileUpload.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            imageContainer.classList.remove("hidden");
            dropzone.classList.add("hidden"); // Hide dropzone
        };
        reader.readAsDataURL(file);
    }
});

function removeImage() {
    fileUpload.value = "";
    preview.src = "";
    imageContainer.classList.add("hidden");
    dropzone.classList.remove("hidden"); // Show dropzone again
}
