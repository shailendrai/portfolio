document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email validation pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Check empty fields
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Success message
    alert(`Thank you for your message, ${name}!`);

    // Reset form after submission
    document.getElementById('contactForm').reset();
});
