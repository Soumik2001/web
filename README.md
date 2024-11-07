function responsiveSlider() {
  const slider = document.querySelector('.swiperSection');
  const sliderList = slider.querySelector('ul');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');	
const lside = document.querySelector('.Lside');
const rside = document.querySelector('.Rside');


  if (!slider || !sliderList || !prev || !next || !lside || !rside) {
    alert('Elements not found. Make sure #prev, #next, .left, .right, and .swiperSection ul exist.');
    return;
  }

  const itemsToShow = 5; 
  const totalItems = sliderList.querySelectorAll('li').length; 
  const effectiveWidth = 910; 
  const itemWidth = effectiveWidth / itemsToShow; 
  let currentPosition = 0; 


  slider.style.width = '960px';
  sliderList.style.width = `${itemWidth * totalItems}px`;
  sliderList.querySelectorAll('li').forEach((item) => {
    item.style.width = `${itemWidth}px`;
  });

  function nextSlide() {

    const maxPosition = -(itemWidth * (totalItems - itemsToShow));

    if (currentPosition > maxPosition) {
      currentPosition -= itemWidth * itemsToShow; 
    }

    if (currentPosition < maxPosition) {
      currentPosition = maxPosition; 
    }
    updateSliderPosition();
  }

  function prevSlide() {
    const maxPosition = -(itemWidth * (totalItems - itemsToShow));

    
    if (currentPosition === maxPosition) {
      currentPosition += itemWidth * 2; 
    } else if (currentPosition < 0) {
      currentPosition += itemWidth * itemsToShow; 
    }


    if (currentPosition > 0) {
      currentPosition = 0; 
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    sliderList.style.transform = `translateX(${currentPosition}px)`;
 
BtnVisibility();
updateSlideStyle();   
  }

 function updateSlideStyle() {
    if (currentPosition === 0) {
      lside.style.cursor = 'default';
      lside.classList.add('no-hover'); 
    } else {
      lside.style.cursor = 'pointer';
      lside.classList.remove('no-hover'); 
    }
  }

  function BtnVisibility() {
    prev.style.display = (currentPosition === 0) ? 'none' : 'flex';

    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
    next.style.display = (currentPosition <= maxPosition) ? 'none' : 'flex';
  }

  BtnVisibility();
updateSlideStyle();

  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
	
}
