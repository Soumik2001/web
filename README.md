document.querySelectorAll('.footerUL li').forEach(item=>{
item.addEventListener('click',()=>{
const link = item.querySelector('a');

if(link){
window.location.href=link.href;
window.open = link.href;
}
})
})

document.addEventListener('DOMContentLoaded', () => {
  const defaultRadioButton = document.getElementById('slide2'); // Replace 'slide2' with your actual radio button ID
  if (defaultRadioButton) {
      defaultRadioButton.checked = true;
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(".control");
  const slides = document.querySelectorAll(".para");

  let currentIndex = 0; 

  function changeSlide() {
    let previousIndex = currentIndex;

    // Determine the currently checked radio button
    radioButtons.forEach((button, index) => {
      if (button.checked) {
        currentIndex = index;
      }
    });

    slides.forEach((slide, index) => {
      if (index === previousIndex) {
        // Hide the previous slide with a directional animation
        slide.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
        slide.style.transform =
          currentIndex > previousIndex
            ? "translateX(-100%)" // Right to Left
            : "translateX(100%)"; // Left to Right
        slide.style.opacity = 0;
        slide.style.zIndex = -1;
        slide.style.display = "none";
      } else if (index === currentIndex) {
        // Prepare the new slide to appear
        slide.style.transition = "none";
        slide.style.transform =
          currentIndex > previousIndex
            ? "translateX(100%)" // Coming from the right
            : "translateX(-100%)"; // Coming from the left
        slide.style.opacity = 0;
        slide.style.zIndex = 1;
        slide.style.display = "block";

        
        setTimeout(() => {
          slide.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
          slide.style.transform = "translateX(0)";
          slide.style.opacity = 1;
        }, 50);
      } else {
        
        slide.style.transition = "none";
        slide.style.transform = "translateX(100%)";
        slide.style.opacity = 0;
        slide.style.zIndex = -1;
        slide.style.display = "none";
      }
    });
  }

  // Add event listeners to radio buttons
  radioButtons.forEach((button) => {
    button.addEventListener("change", changeSlide);
  });

  // Initialize the first slide
  changeSlide();
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









// document.addEventListener("DOMContentLoaded", function () {
//   const paragraphs = document.querySelectorAll("[id^='para']"); 
//   const btn = document.querySelector(".dots");

//   function adjustButtonMargin() {
//     paragraphs.forEach((para) => {
//       const paraHeight = para.offsetHeight;

//       if (paraHeight > 190 && paraHeight < 240) {
//         para.style.marginBottom = "25px";
//         btn.style.marginTop = "15px";
//         btn.style.paddingBottom = "15px";
//       } else if (paraHeight > 240) {
//         para.style.marginBottom = "30px";
//         btn.style.marginTop = "15px";
//         btn.style.paddingBottom = "15px";
//       } else {
//         para.style.marginBottom = ""; 
//       }
//     });
//   }

//   adjustButtonMargin();

//   window.addEventListener("resize", adjustButtonMargin);

//   const observer = new MutationObserver(adjustButtonMargin);
//   paragraphs.forEach((para) => {
//     observer.observe(para, { childList: true, subtree: true });
//   });
// });


