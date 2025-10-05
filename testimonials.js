const track = document.querySelector('.testimonials-track');
const carousel = document.querySelector('.testimonials-carousel');
const testimonials = Array.from(track.children);

let testimonialWidth;
let interval;

function getTestimonialWidth() {
  // Get the actual rendered width of a testimonial including margins
  const firstTestimonial = track.children[0];
  if (!firstTestimonial) return window.innerWidth <= 700 ? window.innerWidth : 410;
  
  const style = window.getComputedStyle(firstTestimonial);
  const width = firstTestimonial.offsetWidth;
  const marginLeft = parseFloat(style.marginLeft);
  const marginRight = parseFloat(style.marginRight);
  
  return width + marginLeft + marginRight;
}

testimonialWidth = getTestimonialWidth();

// Update width on resize and restart carousel
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const newWidth = getTestimonialWidth();
    if (Math.abs(newWidth - testimonialWidth) > 1) { // Allow 1px tolerance
      testimonialWidth = newWidth;
      clearInterval(interval);
      // Reset transform before restarting
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      startCarousel();
    }
  }, 150);
});

// Calculate how many clones needed for seamless loop
const visibleWidth = carousel.offsetWidth;
const originalCount = testimonials.length;
const minSets = Math.ceil((visibleWidth * 2) / (testimonialWidth * originalCount)) || 1;

// Clone testimonials once
if (!track.classList.contains('duplicated-dynamic')) {
  for (let i = 0; i < minSets; i++) {
    testimonials.forEach(t => {
      const clone = t.cloneNode(true);
      clone.classList.add('testimonial-clone');
      track.appendChild(clone);
    });
  }
  track.classList.add('duplicated-dynamic');
}

function startCarousel() {
  interval = setInterval(() => {
    // Move first item to end
    const firstItem = track.children[0];
    
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${testimonialWidth}px)`;
    
    setTimeout(() => {
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      track.appendChild(firstItem);
    }, 500);
  }, 2500);
}

// Ensure layout is ready before starting
setTimeout(() => {
  testimonialWidth = getTestimonialWidth();
  startCarousel();
}, 100);

// Clean up on page unload
window.addEventListener('beforeunload', () => {
  clearInterval(interval);
  clearTimeout(resizeTimeout);
});