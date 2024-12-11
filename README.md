document.addEventListener("DOMContentLoaded", function () {
  const coll = document.getElementsByClassName("collapsible");
  const profileImageContainer = document.querySelector(".profileimage");
  
  let activeImage = document.createElement("img");
  activeImage.src = "images/mainprofile1.jpg";
  activeImage.classList.add("active");
  profileImageContainer.appendChild(activeImage);

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Prevent closing the last open collapsible
      if (isActive && Array.from(coll).filter(el => el.classList.contains("active")).length === 1) {
        return;
      }

      for (let j = 0; j < coll.length; j++) {
        if (coll[j] !== this) {
          coll[j].classList.remove("active");
          let content = coll[j].nextElementSibling;
          if (content) content.style.maxHeight = null;
        }
      }

      // Toggle current collapsible
      if (!isActive) {
        this.classList.add("active");
        let content = this.nextElementSibling;
        if (content) {
          content.style.maxHeight = content.scrollHeight + 8.5 + "px";
        }

        // Change image based on the current collapsible
        const newImageSrc = this.getAttribute("data-image");
        if (newImageSrc && newImageSrc !== activeImage.src) {
          let newImage = document.createElement("img");
          newImage.src = newImageSrc;
          newImage.classList.add("new-active");
          profileImageContainer.appendChild(newImage);

          setTimeout(() => {
            activeImage.classList.remove("active");
            newImage.classList.add("active");
            newImage.classList.remove("new-active");

            profileImageContainer.removeChild(activeImage);
            activeImage = newImage;
          }, 500); // Match this timing with your CSS transition
        }
      }
    });
  }

  // Initialize the first collapsible button and content
  if (coll.length > 0) {
    const firstColl = coll[0];
    const firstContent = firstColl.nextElementSibling;
    firstColl.classList.add("active");

    if (firstContent) {
      firstContent.style.maxHeight = firstContent.scrollHeight + 8.5 + "px";
    }
  }
});

