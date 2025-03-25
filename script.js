// JavaScript functionality for the University Guesthouse website

// DOMContentLoaded event ensures script runs after the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the University Guesthouse!");

    // Search bar functionality
    const searchForm = document.querySelector(".search-bar");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchForm.querySelector("input").value.toLowerCase();
        alert(`Search for "${query}" is not yet implemented. Stay tuned!`);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
