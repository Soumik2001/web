document.addEventListener('DOMContentLoaded', function () {
  const bars = document.querySelectorAll('.bar');
  const categories = document.querySelectorAll('.category');
  
  let activeCategoryIndex = 0;
  
  function changeCategory(index) {

    categories[activeCategoryIndex].classList.remove('active');
    bars[activeCategoryIndex].classList.remove('active');
    
    categories[index].classList.add('active');
    bars[index].classList.add('active');
    
    activeCategoryIndex = index;
  }
  
  bars.forEach((bar, index) => {
    bar.addEventListener('click', function () {
      changeCategory(index);
    });
  });

  // Initialize with the first category active
  changeCategory(activeCategoryIndex);
});






 document.querySelectorAll('.tnav').forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove active class from all tabs
      document.querySelectorAll('.tnav').forEach(tab => tab.classList.remove('active'));

      // Add active class to clicked tab
      this.classList.add('active');

      // Hide all sections and show the loader
      document.querySelectorAll('.list').forEach(section => {
        section.style.display = 'none'; // Hide all sections
        const loader = section.querySelector('.loader');
        if (loader) loader.style.display = 'none'; // Hide all loaders initially
      });

      // Get the section corresponding to the clicked tab
      const sectionId = this.getAttribute('data-section');
      const selectedSection = document.getElementById(sectionId);
      const selectedLoader = selectedSection.querySelector('.loader');

      // Show the loader before showing the content
      if (selectedLoader) {
        selectedLoader.style.display = 'block'; // Show loader
      }

      // Simulate content loading (e.g., after 2 seconds, hide loader and show content)
      setTimeout(() => {
        // Hide the loader after loading and show the content
        if (selectedLoader) {
          selectedLoader.style.display = 'none'; // Hide loader
        }
        selectedSection.style.display = 'block'; // Show the content
      }, 1000); // Adjust time as necessary for loading simulation
    });
  });






