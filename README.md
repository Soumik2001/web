document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('.control');
  const slides = document.querySelectorAll('.para');
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar");
  
  let currentIndex = 0;
  let previousIndex = currentIndex;
  let autoplayInterval;

  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === previousIndex) {
        slide.style.transition = 'transform 0.5s ease-in-out';
        slide.style.transform = 'translateX(-100%)';
        slide.style.zIndex = -1;
        slide.style.display = 'none';
      } else if (index === currentIndex) {
        slide.style.transform = 'translateX(100%)';
        slide.style.zIndex = 1;
        slide.style.display = 'block';
        slide.style.transition = 'none';
        setTimeout(() => {
          slide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
          slide.style.transform = 'translateX(0)';
        }, 50);
      } else {
        slide.style.transition = 'none';
        slide.style.transform = 'translateX(100%)';
        slide.style.zIndex = -1;
        slide.style.display = 'none';
      }
    });
  }

  function changeSlide() {
    previousIndex = currentIndex;
    radioButtons.forEach((button, index) => {
      if (button.checked) {
        currentIndex = index;
      }
    });

    updateSlides();
  }

  function autoplaySlides() {
    autoplayInterval = setInterval(() => {
      previousIndex = currentIndex;
      currentIndex = (currentIndex + 1) % slides.length;
      radioButtons[currentIndex].checked = true;
      updateSlides();
    }, 2000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  radioButtons.forEach((button) => button.addEventListener('change', changeSlide));
  header.addEventListener('mouseover', stopAutoplay);
  header.addEventListener('mouseout', autoplaySlides);

  navbar.addEventListener('mouseover', function () {
    clearInterval(autoplayInterval);
    autoplaySlides();
  });

  // Set default slide (slide2) and initialize slideshow
  const defaultButton = document.getElementById('slide2');
  if (defaultButton) {
    defaultButton.checked = true;
    currentIndex = Array.from(radioButtons).indexOf(defaultButton); // Update the current index
  }

  changeSlide(); // Ensure the default slide is shown
  updateSlides();
  autoplaySlides();
});

