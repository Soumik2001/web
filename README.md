document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navA');

  function adjustPadding() {
    navLinks.forEach((navLink) => {
      const linkWidth = navLink.offsetWidth; // Get the actual width of the nav link
      if (linkWidth > 120) {
        navLink.style.paddingLeft = '40px';
        navLink.style.paddingRight = '40px';
      } else {
        navLink.style.paddingLeft = '0';
        navLink.style.paddingRight = '0';
      }
    });
  }

  // Initial check
  adjustPadding();

  // Recheck on window resize to adapt to dynamic changes
  window.addEventListener('resize', adjustPadding);
});









