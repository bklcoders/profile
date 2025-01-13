document.getElementById("connectBtn").addEventListener("click", function (event) {
    var contactSection = document.getElementById("contactSection");
    contactSection.style.display = contactSection.style.display === "block" ? "none" : "block";
    event.stopPropagation(); // Prevent click event from propagating
});

// Hide the contact section when clicking outside
document.addEventListener("click", function (event) {
    var contactSection = document.getElementById("contactSection");
    var connectBtn = document.getElementById("connectBtn");

    // Check if the click is outside the contact section and the button
    if (
        contactSection.style.display === "block" &&
        !contactSection.contains(event.target) &&
        !connectBtn.contains(event.target)
    ) {
        contactSection.style.display = "none";
    }
});