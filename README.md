const sliderUL = document.querySelector('.sliderUL');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const slideWidth = 150; // Width of one image plus gap
const maxVisibleImages = 5;

// Calculate total number of slides (original items only)
const originalSlides = document.querySelectorAll('.sliderUL li').length / 3;
let currentIndex = originalSlides; // Start at the first set of original items

// Clone slides for infinite effect
const totalSlides = sliderUL.children.length;
sliderUL.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

// Move left
leftButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    // Jump to the duplicated set at the end
    currentIndex = originalSlides * 2;
    sliderUL.style.transition = 'none';
    sliderUL.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    setTimeout(() => {
      sliderUL.style.transition = 'transform 0.5s ease-in-out';
      currentIndex--;
      updateSliderPosition();
    }, 0);
  } else {
    currentIndex--;
    updateSliderPosition();
  }
});

// Move right
rightButton.addEventListener('click', () => {
  if (currentIndex === originalSlides * 2) {
    // Jump to the duplicated set at the beginning
    currentIndex = originalSlides;
    sliderUL.style.transition = 'none';
    sliderUL.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    setTimeout(() => {
      sliderUL.style.transition = 'transform 0.5s ease-in-out';
      currentIndex++;
      updateSliderPosition();
    }, 0);
  } else {
    currentIndex++;
    updateSliderPosition();
  }
});

// Update slider position
function updateSliderPosition() {
  sliderUL.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

