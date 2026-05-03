document.addEventListener("DOMContentLoaded", function () {

    // Contact Form
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Thank you for your message, ${name}!`);

        document.getElementById('contactForm').reset();
    });

    // Navbar Toggle
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-list");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

});
