// Get all sections
const sections = document.querySelectorAll("section");

// Function to change the background color based on the section in view
function changeBackgroundColorOnView(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let bgColor = "#48494a"; // Default color
            if (entry.target.id === "home-section") bgColor = "#48494a";
            else if (entry.target.id === "about-section") bgColor = "#232324";
            else if (entry.target.id === "competences-section") bgColor = "#232324";
            else if (entry.target.id === "contact-section") bgColor = "#000000";

            document.body.style.backgroundColor = bgColor;
        }
    });
}

// Create an IntersectionObserver to watch each section
const observer = new IntersectionObserver(changeBackgroundColorOnView, {
    threshold: 0.5, // Trigger when at least 50% of the section is visible
});

// Observe each section
sections.forEach((section) => observer.observe(section));
