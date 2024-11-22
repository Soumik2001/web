

document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('.control');
  const slides = document.querySelectorAll('.para');

  let currentIndex = 0; // To track the current slide index


  function changeSlide() {
      const previousIndex = currentIndex;

      radioButtons.forEach((button, index) => {
          if (button.checked) {
              currentIndex = index;
console.log(`Index: ${index}`);
          }
      });
console.log(`currentIndex: ${currentIndex}`);
console.log(`previousIndex: ${previousIndex}`);


      // Apply transitions and visibility
      slides.forEach((slide, index) => {
          if (index === previousIndex) {
              // Slide out the previous slide to the left
              slide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
              slide.style.transform = 'translateX(-100%)';
              slide.style.opacity = 0;
              slide.style.zIndex = -1;
              slide.style.display = 'none'; // Hide after the transition
          } else if (index === currentIndex) {
              // Set initial position for the new slide (off-screen to the right)
              slide.style.transition = 'none';
              slide.style.transform = 'translateX(100%)';
              slide.style.opacity = 0;
              slide.style.zIndex = 1;
              slide.style.display = 'block'; // Ensure it's visible

              // Slide in the new slide
              setTimeout(() => {
                  slide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                  slide.style.transform = 'translateX(0)';
                  slide.style.opacity = 1;
              }, 50); // Short delay to ensure smooth transition
          } else {
              // Hide non-active slides
              slide.style.transition = 'none';
              slide.style.transform = 'translateX(100%)';
              slide.style.opacity = 0;
              slide.style.zIndex = -1;
              slide.style.display = 'none'; // Ensure they are hidden
          }
      });
  }

  // Add event listeners to radio buttons
  radioButtons.forEach((button) => {
      button.addEventListener('change', changeSlide);
  });

  // Initialize the slider with the default checked slide
  changeSlide();
});

