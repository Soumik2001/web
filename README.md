

 const mainImages = document.querySelectorAll('.topImage img');
 const thumbnails = document.querySelectorAll('.thumbnail');
 
 // Variable to track the currently active image
 let activeImage = document.getElementById('mainImage1'); // Default active image
 
 thumbnails.forEach(thumbnail => {
   thumbnail.addEventListener('mouseover', function () {
     const targetImageId = this.getAttribute('data-image');
     const targetImage = document.getElementById(targetImageId);
 
     // Remove the active class from the current active image
     activeImage.classList.remove('active');
 
     // Add the active class to the target image
     targetImage.classList.add('active');
 
     // Update the active image
     activeImage = targetImage;
   });
 
   // Remove the 'mouseleave' handler, as the active image should not reset
 });
