




![mask](https://github.com/user-attachments/assets/5434171b-10d9-4607-a9a9-db21e2b627ed)
![mainImage2](https://github.com/user-attachments/assets/06dc07e6-ff3f-4fca-916a-f397c1eb9c62)
![mainImage1](https://github.com/user-attachments/assets/be5c50e9-90d7-480e-8784-d7bee055fc56)






<div class="carousel2">
<div class="inner">
<div class="left"><img src="images/larrow.png"></div>
<div class="middle">
<div class="swiper-slide"><img src="images/palm.png"></div>
      <div class="swiper-slide"><img src="images/sony.png"></div>
      <div class="swiper-slide"><img src="images/boss.png"></div>
      <div class="swiper-slide"><img src="images/apple.png"></div>
      <div class="swiper-slide"><img src="images/adidas.png"></div>
      <div class="swiper-slide"><img src="images/bmw.png"></div>
      <div class="swiper-slide"><img src="images/puma.png"></div>
      <div class="swiper-slide"><img src="images/volkswagen.png"></div>
      <div class="swiper-slide"><img src="images/ibm.png"></div>
      <div class="swiper-slide"><img src="images/google.png"></div>
      <div class="swiper-slide"><img src="images/rolex.png"></div>
      <div class="swiper-slide"><img src="images/instagram.png"></div>
      <div class="swiper-slide"><img src="images/youtube.png"></div>
      <div class="swiper-slide"><img src="images/mahindra.png"></div>
      <div class="swiper-slide"><img src="images/tata.png"></div>
</div>
<div class="right"><img src="images/rarrow.png"></div>
</div>
</div>



document.addEventListener("DOMContentLoaded", () => {
  const middle = document.querySelector('.middle');
  const slides = document.querySelectorAll('.swiper-slide');
  const leftArrow = document.querySelector('.left img');
  const rightArrow = document.querySelector('.right img');
  const inner = document.querySelector('.inner');
//console.log(slides[0].offsetWidth);


  let slideIndex = 0;
  const slideWidth = slides[0].offsetWidth + 12; 
  const totalSlides = slides.length;

console.log(slideWidth);

  let autoScroll;


  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    middle.appendChild(clone);
  });

  // for firefox initialize to the first child
  middle.scrollLeft = 0;

  // Scroll slider

  function scrollSlider(direction) {
    if (direction === 'next') {
      slideIndex++;
    } else if (direction === 'prev') {
      if (slideIndex === 0) {
        slideIndex = totalSlides;
        middle.scrollLeft = totalSlides * slideWidth;
      }
      slideIndex--;
    }
    middle.scrollTo({
      left: slideIndex * slideWidth,
      behavior: 'smooth'
    });


    if (slideIndex >= totalSlides) {
      setTimeout(() => {
        slideIndex = 0;
        middle.scrollLeft = 0; 
      }, 300); 
    }
  }


  function startAutoScroll() {
    autoScroll = setInterval(() => scrollSlider('next'), 3000);
  }


  function stopAutoScroll() {
    clearInterval(autoScroll);
  }


  rightArrow.addEventListener('click', () => {
    stopAutoScroll(); // Pause auto-scroll on manual navigation
    scrollSlider('next');
  });

  leftArrow.addEventListener('click', () => {
    stopAutoScroll(); // Pause auto-scroll on manual navigation
    scrollSlider('prev');
  });

  inner.addEventListener('mouseenter', stopAutoScroll);

  inner.addEventListener('mouseleave', startAutoScroll);


  startAutoScroll();
});

