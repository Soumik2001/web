document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  let slideIndex = 0;
  let slideInterval;


  function startAutoplay() {
    clearInterval(slideInterval);
    slideInterval = setInterval(changeSlide, 5000);
  }


  function stopAutoplay() {
    clearInterval(slideInterval);
  }


  function changeSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    slidesContainer.style.transition = "transform 2s ease";  
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateRadioButtons();
  }

  // Function to update radio buttons
  function updateRadioButtons() {
    const radioButtons = document.querySelectorAll(".control");
    radioButtons.forEach((radioButton, index) => {
      radioButton.checked = index === slideIndex;
    });
  }

  // Function to navigate to a specific slide
  function goToSlide(index) {
    const isBackward = index < slideIndex; // Determine if we are moving backward (right to left)

    // Apply the transition and direction depending on backward or forward navigation
    if (isBackward) {
      // Backward navigation: Move from right to left
      slidesContainer.style.transition = "transform 2s ease"; // Transition duration
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    } else {
      // Forward navigation: Move from left to right
      slidesContainer.style.transition = "transform 2s ease"; // Transition duration
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    slideIndex = index; // Update the slide index
    updateRadioButtons(); // Update radio buttons

    // Reset autoplay
    stopAutoplay();
  }

  // Add event listeners for radio buttons
  const radioButtons = document.querySelectorAll(".control");
  radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener("click", () => {
      goToSlide(index); // Navigate to the selected slide
    });
  });

  // Pause autoplay on hover and resume on leave
  const carousel = document.querySelector(".carosel");
  const dotsContainer = document.querySelector(".dots");

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  dotsContainer.addEventListener("mouseenter", stopAutoplay);
  dotsContainer.addEventListener("mouseleave", startAutoplay);

  // Initialize the slider
  updateRadioButtons();
  startAutoplay();
});
