document.addEventListener("DOMContentLoaded", function() {
    let cartItems = [];
    document.querySelectorAll(".home-button").forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    });
});