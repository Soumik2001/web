document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('.control');
  const slides = document.querySelectorAll('.para');
  const header = document.querySelector('header'); // Select the header element
  let currentIndex = 0;
  let autoplayInterval;

  function changeSlide() {
    const previousIndex = currentIndex;

    // Determine the currently selected radio button
    radioButtons.forEach((button, index) => {
      if (button.checked) {
        currentIndex = index;
      }
    });

    // Update the slides' appearance
    slides.forEach((slide, index) => {
      if (index === previousIndex) {
        // Outgoing slide
        slide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
        slide.style.transform = 'translateX(-100%)';
        slide.style.zIndex = -1;
        setTimeout(() => (slide.style.display = 'none'), 500); // Hide after transition
      } else if (index === currentIndex) {
        // Incoming slide
        slide.style.display = 'block';
        slide.style.transition = 'none';
        slide.style.transform = 'translateX(100%)';
        slide.style.zIndex = 1;

        setTimeout(() => {
          slide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
          slide.style.transform = 'translateX(0)';
        }, 50);
      } else {
        // All other slides
        slide.style.display = 'none';
        slide.style.zIndex = -1;
        slide.style.transition = 'none';
        slide.style.transform = 'translateX(100%)';
      }
    });
  }

  function autoplay() {
    autoplayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
      radioButtons[currentIndex].checked = true; // Update the corresponding radio button
      changeSlide();
    }, 3000); // 3 seconds interval
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Add event listeners to radio buttons
  radioButtons.forEach((button) => {
    button.addEventListener('change', changeSlide);
  });

  // Add event listeners to the header to stop/resume autoplay on hover
  header.addEventListener('mouseover', stopAutoplay);
  header.addEventListener('mouseout', autoplay);

  // Initialize the first slide and start autoplay
  changeSlide();
  autoplay();
});

