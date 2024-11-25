document.querySelectorAll('.footerUL li').forEach(item=>{
item.addEventListener('click',()=>{
const link = item.querySelector('a');

if(link){
window.location.href=link.href;
window.open = link.href;
}
})
})


document.addEventListener('DOMContentLoaded',()=>{
const defaultButton = document.getElementById('slide2');

if(defaultButton){
defaultButton.checked = true;
}
});




document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('.control');
  const slides = document.querySelectorAll('.para');
const header = document.querySelector("header");
	
  let currentIndex = 0; 
let autoplayInterval;

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
              slide.style.display = 'none'; 
          }
      });

  }


function autoplay(){
autoplayInterval = setInterval(()=>{
currentIndex = (currentIndex+1) % slides.length;
radioButtons[currentIndex].checked = true;
changeSlide();
},2000);
}

function stopAutoplay(){
clearInterval(autoplayInterval);
}


  radioButtons.forEach((button) => {
      button.addEventListener('change', changeSlide);
  });


header.addEventListener('mouseover',stopAutoplay);
header.addEventListener('mouseout',autoplay);
  
  changeSlide();
autoplay();

});








document.addEventListener("DOMContentLoaded", function () {
  const p1 = document.querySelector("#para1");
const p2 = document.querySelector("#para2");
const p3 = document.querySelector("#para3");
const p4 = document.querySelector("#para4");
const p5 = document.querySelector("#para5");


const btn = document.querySelector(".dots");

  function adjustButtonMargin() {
    const paraHeight1 = p1.offsetHeight;
const paraHeight2 = p2.offsetHeight;
const paraHeight3 = p3.offsetHeight;
const paraHeight4 = p4.offsetHeight;
const paraHeight5 = p5.offsetHeight;

console.log(paraHeight2);

    if (paraHeight1 > 190 && paraHeight1 < 240) {
      p1.style.marginBottom="25px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
    } else if(paraHeight1 > 240){
      p1.style.marginBottom="30px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
}
if (paraHeight2 > 190 && paraHeight2 < 240) {
      p2.style.marginBottom="25px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
    } else if(paraHeight2 > 240){
      p2.style.marginBottom="30px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
}

if (paraHeight3 > 190 && paraHeight3 < 240) {
      p3.style.marginBottom="25px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
    } else if(paraHeight3 > 240){
      p3.style.marginBottom="30px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
}


if (paraHeight4 > 190 && paraHeight4 < 240) {
      p4.style.marginBottom="25px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
    } else if(paraHeight4 > 240){
      p4.style.marginBottom="30px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
}

if (paraHeight5 > 190 && paraHeight5 < 240) {
      p5.style.marginBottom="25px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
    } else if(paraHeight5 > 240){
      p5.style.marginBottom="30px";
btn.style.marginTop="15px";
btn.style.paddingBottom="15px";
}

  }

  adjustButtonMargin();

  window.addEventListener("resize", adjustButtonMargin);

  const observer = new MutationObserver(adjustButtonMargin);
  observer.observe(p1, { childList: true, subtree: true });
observer.observe(p2, { childList: true, subtree: true });
observer.observe(p3, { childList: true, subtree: true });
observer.observe(p4, { childList: true, subtree: true });
observer.observe(p5, { childList: true, subtree: true });
});


