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
