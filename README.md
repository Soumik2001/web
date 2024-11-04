function responsiveSlider() {
  const slider = document.querySelector('.swiperSection');
  const sliderList = slider.querySelector('ul');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  if (!slider || !sliderList || !prev || !next) {
    console.error('Elements not found. Make sure #prev, #next, and .swiperSection ul exist.');
    return;
  }

  const itemsToShow = 5; // Number of items to display at once
  const totalItems = sliderList.querySelectorAll('li').length;
  const effectiveWidth = 910; // Width available for images within .swiperSection
  const itemWidth = effectiveWidth / itemsToShow; // Each image's width
  let currentPosition = 0; // Current position in the slider

  // Set width of each item and total width of the slider list
  slider.style.width = '960px'; // Total including Lside and Rside
  sliderList.style.width = `${itemWidth * totalItems}px`;
  sliderList.querySelectorAll('li').forEach((item) => {
    item.style.width = `${itemWidth}px`;
  });

  function nextSlide() {
    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
    
    if (currentPosition <= maxPosition) {
      currentPosition = 0; // Reset to start if at the end
    } else {
      currentPosition -= itemWidth * itemsToShow; // Move to the next set of images
    }
    updateSliderPosition();
  }

  function prevSlide() {
    if (currentPosition === 0) {
      // Move to show the last 3 images
      const remainder = totalItems % itemsToShow; // Get the remainder
      currentPosition = remainder === 0 ? -itemWidth * (totalItems - itemsToShow) : -itemWidth * (totalItems - remainder);
    } else {
      // Move back by a full group of itemsToShow
      currentPosition += itemWidth * itemsToShow;
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    sliderList.style.transform = `translateX(${currentPosition}px)`;
    updateButtonVisibility(); // Update button visibility
  }

  function updateButtonVisibility() {
    // Hide the "Prev" button if at the start
    prev.style.display = (currentPosition === 0) ? 'none' : 'flex';

    // Hide the "Next" button if at the last set of images
    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
    next.style.display = (currentPosition <= maxPosition) ? 'none' : 'flex';
  }

  // Initial visibility check
  updateButtonVisibility();

  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
}

// Initialize the slider on window load
window.onload = responsiveSlider;



























function responsiveSlider() {
  const slider = document.querySelector('.swiperSection');
  const sliderList = slider.querySelector('ul');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  if (!slider || !sliderList || !prev || !next) {
    console.error('Elements not found. Make sure #prev, #next, and .swiperSection ul exist.');
    return;
  }

  const itemsToShow = 5; // Number of items to display at once
  const totalItems = sliderList.querySelectorAll('li').length;
  const effectiveWidth = 910; // Width available for images within .swiperSection
  const itemWidth = effectiveWidth / itemsToShow; // Each image's width
  let currentPosition = 0; // Current position in the slider

  // Set width of each item and total width of the slider list
  slider.style.width = '960px'; // Total including Lside and Rside
  sliderList.style.width = `${itemWidth * totalItems}px`;
  sliderList.querySelectorAll('li').forEach((item) => {
    item.style.width = `${itemWidth}px`;
  });

  function nextSlide() {
    if (currentPosition <= -(itemWidth * (totalItems - itemsToShow))) {
      currentPosition = 0; // Reset to start if at the end
    } else {
      currentPosition -= itemWidth * itemsToShow; // Move to the next set of images
    }
    updateSliderPosition();
  }

  function prevSlide() {
    if (currentPosition === 0) {
      // When at the start, move to show the last 3 images
      currentPosition = -(itemWidth * (totalItems - (totalItems % itemsToShow))); // Move to the last full set
    } else if (Math.abs(currentPosition) % (itemWidth * itemsToShow) === 0 && 
               Math.abs(currentPosition) > 0) {
      // If currently at a full set of images, show the last set of 3 images
      currentPosition += itemWidth * (totalItems % itemsToShow);
    } else {
      // Move back by a full group of itemsToShow
      currentPosition += itemWidth * itemsToShow;
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    sliderList.style.transform = `translateX(${currentPosition}px)`;
  }

  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
}

window.onload = responsiveSlider;

