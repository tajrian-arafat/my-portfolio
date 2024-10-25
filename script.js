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


// Show the button when scrolling down
window.onscroll = function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Smooth scroll to top when button clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
