// Form validation and localStorage saving
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("interestForm");
    const message = document.getElementById("message");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const mobile = document.getElementById("mobile").value.trim();
            const email = document.getElementById("email").value.trim();

            let errors = [];

            if (firstName.length < 3) errors.push("First Name must be at least 3 characters.");
            if (lastName.length < 3) errors.push("Last Name must be at least 3 characters.");
            if (!/^\d{8}$/.test(mobile)) errors.push("Mobile No. must be exactly 8 digits.");
            if (!email.includes("@")) errors.push("Email must be valid.");

            if (errors.length > 0) {
                message.style.color = "red";
                message.textContent = "Error: " + errors.join(" ");
            } else {
                message.style.color = "green";
                message.textContent = `Thank you, ${firstName}! Your details have been submitted successfully.`;
                localStorage.setItem("user_name", firstName);
                form.reset();
            }
        });
    }

    // Personalize sub-topic pages
    const userNameSpan = document.getElementById("userName");
    if (userNameSpan) {
        const savedName = localStorage.getItem("user_name");
        userNameSpan.textContent = savedName ? savedName : "Guest";
    }
});
