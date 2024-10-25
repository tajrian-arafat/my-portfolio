console.log("Hello, World!");
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from actually submitting for now
    alert('Thank you for your message!');
    form.reset(); // Clear form fields after submission
});
