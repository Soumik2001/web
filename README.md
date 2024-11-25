
document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('.control');
  const slides = document.querySelectorAll('.para');
const box = document.querySelector("header");
	
  let currentIndex = 0; 


  function changeSlide() {
      const previousIndex = currentIndex;

      radioButtons.forEach((button, index) => {
          if (button.checked) {
              currentIndex = index;

          }
      });



     
      slides.forEach((slide, index) => {
           if (index === previousIndex) {
              
              slide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
              slide.style.transform = 'translateX(-100%)';

              slide.style.zIndex = -1;
              slide.style.display = 'none'; 
          } else if (index === currentIndex) {
              
              slide.style.transition = 'none';
              slide.style.transform = 'translateX(100%)';
              slide.style.zIndex = 1;
              slide.style.display = 'block';


              setTimeout(() => {
                  slide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                  slide.style.transform = 'translateX(0)';
              }, 50); 
          } else {
              
              slide.style.transition = 'none';
              slide.style.transform = 'translateX(100%)';
              slide.style.zIndex = -1;
              slide.style.display = 'none'; // Ensure they are hidden
          }
      });

  }


  radioButtons.forEach((button) => {
      button.addEventListener('change', changeSlide);
  });

  
  changeSlide();


});
