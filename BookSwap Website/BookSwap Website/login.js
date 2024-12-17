document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is loaded!");

    var form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting normally

            var correctEmail = "user@example.com";
            var correctPassword = "password123";

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            console.log("Email:", email); // Debugging
            console.log("Password:", password); // Debugging

            if (email === correctEmail && password === correctPassword) {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to index.html
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    } else {
        console.error("Form element not found.");
    }
});
