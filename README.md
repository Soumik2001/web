function responsiveSlider() {
  const slider = document.querySelector('.swiperSection');
  const sliderList = slider.querySelector('ul');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');	
const left = document.querySelector('.Lside');
const right = document.querySelector('.Rside');


  if (!slider || !sliderList || !prev || !next || !left || !right) {
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
      currentPosition += itemWidth *3; 
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
  }


  function BtnVisibility() {
    prev.style.display = (currentPosition === 0) ? 'none' : 'flex';

    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
    next.style.display = (currentPosition <= maxPosition) ? 'none' : 'flex';
  }

  BtnVisibility();

  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
	
}



function sideSwiper(){
 const slider = document.querySelector('.swiperSection');
  const sliderList = slider.querySelector('ul');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const left = document.getElementsByClassName('Lside');
const right = document.getElementsByClassName('Rside');	

  if (!slider || !sliderList || !prev || !next || !left || !right) {
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
      currentPosition += itemWidth * 3; 
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
  }

 


  function BtnVisibility() {
    prev.style.display = (currentPosition === 0) ? 'none' : 'flex';
    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
    next.style.display = (currentPosition <= maxPosition) ? 'none' : 'flex';
  }

  BtnVisibility();

Array.from(left).forEach(e=>{
e.addEventListener('click',prevSlide);
})

Array.from(right).forEach(e=>{
e.addEventListener('click',nextSlide);
});


}
sideSwiper();

window.onload = responsiveSlider;



document.querySelectorAll('.footerUL li').forEach(item=>{
item.addEventListener('click',()=>{
const link = item.querySelector('a');

if(link){
window.location.href=link.href;
}
})
})




