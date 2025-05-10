document.addEventListener("DOMContentLoaded", function () {
    // Contact form validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields!");
            } else {
                alert("Message sent successfully!");
                contactForm.reset();
            }
        });
    }

    // Menu Toggle for Navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // "Read More" Button Toggle for Multiple Articles
    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const postDetails = this.nextElementSibling;

            if (postDetails.style.display === "none" || postDetails.style.display === "") {
                postDetails.style.display = "block"; // Show content
                this.textContent = "Read Less"; // Change button text
            } else {
                postDetails.style.display = "none"; // Hide content
                this.textContent = "Read More"; // Reset button text
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Show button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll back to top when clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
