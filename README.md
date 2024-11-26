
document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('.control');
  const slides = document.querySelectorAll('.para');
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar");
  
  let currentIndex = 0;
  let previousIndex = 0; // To track the previous slide index
  let autoplayInterval;

  // Function to update slides
  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.style.transition = 'transform 0.5s ease-in-out'; // Add transition
      if (index === currentIndex) {
        slide.style.transform = 'translateX(0)'; // Current slide, stays in the center
        slide.style.zIndex = 1;
        slide.style.display = 'block';
      } else if (index === previousIndex && index > currentIndex) {
        slide.style.transform = 'translateX(100%)'; // Previous slide moves out to the right
        slide.style.zIndex = -1;
        slide.style.display = 'none';
      } else if (index === previousIndex && index < currentIndex) {
        slide.style.transform = 'translateX(-100%)'; // Previous slide moves out to the left
        slide.style.zIndex = -1;
        slide.style.display = 'none';
      } else {
        // Other slides either enter from the right or left depending on direction
        slide.style.transform = index < currentIndex ? 'translateX(-100%)' : 'translateX(100%)';
        slide.style.zIndex = -1;
        slide.style.display = 'none';
      }
    });
  }

  // Function to manually change slides
  function changeSlide() {
    previousIndex = currentIndex; // Track the previous slide index
    radioButtons.forEach((button, index) => {
      if (button.checked) {
        currentIndex = index;
      }
    });
    updateSlides();
  }

  // Autoplay functionality
  function autoplaySlides() {
    autoplayInterval = setInterval(() => {
      previousIndex = currentIndex;
      currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
      radioButtons[currentIndex].checked = true; // Sync with radio buttons
      updateSlides();
    }, 2000); // 2 seconds per slide
  }

  // Stop autoplay on hover
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Event listeners for radio button and header hover
  radioButtons.forEach((button) => button.addEventListener('change', changeSlide));
  header.addEventListener('mouseover', stopAutoplay);
  header.addEventListener('mouseout', autoplaySlides);

  navbar.addEventListener('mouseover', function () {
    clearInterval(autoplayInterval); // Prevent autoplay from stopping
    autoplaySlides(); // Restart autoplay
  });

  // Initialize the slider
  radioButtons[0].checked = true; // Ensure the first radio button is checked
  updateSlides(); // Display the first slide
  autoplaySlides(); // Start autoplay
});
