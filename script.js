// Get all sections
const homeSection = document.getElementById('home-section');
const aboutSection = document.getElementById('about-section');
const competencesSection = document.getElementById('competences-section');
const contactSection = document.getElementById('contact-section');

// Function to change the background color based on the section in view
function changeBackgroundColorOnView(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Check which section is in view and change the background color
            if (entry.target === homeSection) {
                document.body.style.backgroundColor = '#48494a'; // Home section background color
            } else if (entry.target === aboutSection) {
                document.body.style.backgroundColor = '#232324'; // About section background color
            } else if (entry.target === competencesSection) {
                document.body.style.backgroundColor = '#232324'; // Competences section background color
            } else if (entry.target === contactSection) {
                document.body.style.backgroundColor = '#000000'; // Contact section background color
            }
        }
    });
}

// Create an IntersectionObserver to watch each section
const observer = new IntersectionObserver(changeBackgroundColorOnView, {
    threshold: 0.5 // Trigger when at least 50% of the section is visible
});

// Observe each section
observer.observe(homeSection);
observer.observe(aboutSection);
observer.observe(competencesSection);
observer.observe(contactSection);

document.addEventListener('DOMContentLoaded', () => {
    
});

const options = {
    strings: ["Designer", "Developer", "Freelancer", "Photographer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|',
  };
  
  const typed = new Typed('.typed', options);