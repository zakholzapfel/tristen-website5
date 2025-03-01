document.addEventListener("DOMContentLoaded", function() {
    let cartItems = [];
    
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent successfully!");
    });
});