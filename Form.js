function validateForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let degree = document.getElementById("degree").value;
    let gradYear = document.getElementById("gradYear").value;
    let cgpa = document.getElementById("cgpa").value;

    let errorMessages = [];

    // Full Name validation
    if (fullName === "" || !/^[a-zA-Z\s]+$/.test(fullName)) {
        errorMessages.push("Please enter a valid full name (letters and spaces only).");
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "" || !emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Phone Number validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (phone === "" || !phonePattern.test(phone)) {
        errorMessages.push("Please enter a valid 10-digit phone number.");
    }

    // Degree validation (cannot be empty)
    if (degree === "") {
        errorMessages.push("Please enter your graduation degree.");
    }

    // Graduation Year validation (must be between 1900 and current year)
    let currentYear = new Date().getFullYear();
    if (gradYear === "" || isNaN(gradYear) || gradYear < 1900 || gradYear > currentYear) {
        errorMessages.push(`Please enter a valid graduation year between 1900 and ${currentYear}.`);
    }

    // CGPA validation (between 0 and 10, decimal allowed)
    let cgpaPattern = /^([0-9]|10)(\.\d{1,2})?$/;
    if (cgpa === "" || !cgpaPattern.test(cgpa)) {
        errorMessages.push("Please enter a valid CGPA between 0.00 and 10.00.");
    }

    // Display error messages or allow submission
    if (errorMessages.length > 0) {
        document.getElementById("errorMessages").innerHTML = errorMessages.join("<br>");
        return false;  // Prevent form submission
    }

    return true;  // Allow form submission
}
