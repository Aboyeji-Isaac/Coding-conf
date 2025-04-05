// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("userForm");
//     const nameInput = document.getElementById("name");
//     const emailInput = document.getElementById("email");
//     const nameError = document.getElementById("nameError");
//     const emailError = document.getElementById("emailError");
//     const successMessage = document.getElementById("successMessage");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();

//         let isValid = true;

//         // Name validation
//         if (nameInput.value.trim() === "") {
//             nameError.textContent = "Name is required.";
//             nameError.classList.remove("hidden");
//             nameInput.classList.add("border-red-500");
//             isValid = false;
//         } else {
//             nameError.classList.add("hidden");
//             nameInput.classList.remove("border-red-500");
//         }

//         // Email validation
//         if (!emailInput.value.match(/^\S+@\S+\.\S+$/)) {
//             emailError.textContent = "Enter a valid email.";
//             emailError.classList.remove("hidden");
//             emailInput.classList.add("border-red-500");
//             isValid = false;
//         } else {
//             emailError.classList.add("hidden");
//             emailInput.classList.remove("border-red-500");
//         }

//         // Show success message if valid
//         if (isValid) {
//             successMessage.textContent = "Form submitted successfully!";
//             successMessage.classList.remove("hidden");
//             form.reset();
//         } else {
//             successMessage.classList.add("hidden");
//         }
//     });
// });



// const fileUpload = document.getElementById("file-upload");
// const imageContainer = document.getElementById("image-container");
// const preview = document.getElementById("preview");
// const dropzone = document.querySelector(".dropzone");

// fileUpload.addEventListener("change", function(event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             preview.src = e.target.result;
//             imageContainer.classList.remove("hidden");
//             dropzone.classList.add("hidden"); // Hide dropzone
//         };
//         reader.readAsDataURL(file);
//     }
// });

// function removeImage() {
//     fileUpload.value = "";
//     preview.src = "";
//     imageContainer.classList.add("hidden");
//     dropzone.classList.remove("hidden"); // Show dropzone again
// }


















// document.getElementById("userForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission

//     let fullName = document.querySelector('input[type="text"]').value.trim();
//     let email = document.querySelector('input[type="email"]').value.trim();
//     let githubUsername = document.querySelector('input[placeholder="@yourusername"]').value.trim();
//     let fileUpload = document.getElementById("file-upload").files[0];

//     // Error message container
//     let errorMessages = [];

//     // Validate Full Name
//     if (fullName === "") {
//         errorMessages.push("Full Name is required.");
//     }

//     // Validate Email Address
//     if (!validateEmail(email)) {
//         errorMessages.push("Enter a valid email address.");
//     }

//     // Validate GitHub Username
//     if (githubUsername === "") {
//         errorMessages.push("GitHub Username is required.");
//     }

//     // Validate Avatar Upload
//     if (!fileUpload) {
//         errorMessages.push("Please upload an avatar.");
//     } else {
//         let fileSize = fileUpload.size / 1024; // Convert bytes to KB
//         let fileType = fileUpload.type;
//         if (fileSize > 500) {
//             errorMessages.push("Image size should not exceed 500KB.");
//         }
//         if (!["image/png", "image/jpeg"].includes(fileType)) {
//             errorMessages.push("Only JPG and PNG images are allowed.");
//         }
//     }

//     // Display Errors or Submit Form
//     if (errorMessages.length > 0) {
//         alert(errorMessages.join("\n")); // Show errors in an alert
//     } else {
//         alert("Form submitted successfully!");
//         // this.submit(); // Uncomment to allow form submission
//     }
// });

// // Function to Validate Email Format
// function validateEmail(email) {
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
// }










document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let fullName = document.querySelector('input[type="text"]').value.trim();
    let email = document.querySelector('input[type="email"]').value.trim();
    let githubUsername = document.querySelector('input[placeholder="@yourusername"]').value.trim();
    let fileUpload = document.getElementById("file-upload").files[0];

    // Get error message elements
    let avataError = document.getElementById("avataError");
    let fullNameError = document.getElementById("fullNameErrorMessage");
    let emailError = document.getElementById("emailErrorMessage");
    let githubError = document.getElementById("githubErrorMessage");

    // Reset previous error messages
    avataError.textcontent ="";
    fullNameError.textContent = "";
    emailError.textContent = "";
    githubError.textContent = "";

    let hasError = false;

    // Validate Full Name
    if (fullName === "") {
        fullNameError.textContent = "Full Name is required.";
        fullNameError.classList.remove("hidden");
        hasError = true;
    } else {
        fullNameError.classList.add("hidden");
    }

    // Validate Email
    if (!validateEmail(email)) {
        emailError.textContent = "Enter a valid email address.";
        emailError.classList.remove("hidden");
        hasError = true;
    } else {
        emailError.classList.add("hidden");
    }

    // Validate GitHub Username
    if (githubUsername === "") {
        githubError.textContent = "GitHub Username is required.";
        githubError.classList.remove("hidden");
        hasError = true;
    } else {
        githubError.classList.add("hidden");
    }

    // Validate Avatar Upload (you can still use alert for this part or add another field-level error)
    if (!fileUpload) {
        alert("Please upload an avatar.");
        hasError = true;
    } else {
        let fileSize = fileUpload.size / 1024; // KB
        let fileType = fileUpload.type;

        if (fileSize > 500) {
            alert("Image size should not exceed 500KB.");
            hasError = true;
        }

        if (!["image/png", "image/jpeg"].includes(fileType)) {
            alert("Only JPG and PNG images are allowed.");
            hasError = true;
        }
    }

    if (!hasError) {
        alert("Form submitted successfully!");
        // this.submit(); // Uncomment to submit form
    }
});

// Email validation helper
function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
