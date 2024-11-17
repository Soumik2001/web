<script>
  document.addEventListener("DOMContentLoaded", function () {
  const para = document.querySelector(".para");
  const button = document.querySelector(".btn");

  // Function to adjust button margin based on the height of the paragraph
  function adjustButtonMargin() {
    const paraHeight = para.offsetHeight; // Get the computed height of the paragraph

    // Log the paragraph height for debugging
    console.log("Paragraph height:", paraHeight);

    // Dynamically adjust the button's margin-bottom based on the height
    if (paraHeight > 400) {
      button.style.marginBottom = "65px";
    } else if (paraHeight > 230) {
      button.style.marginBottom = "60px"; // Adjust margin for content over 324px height
    } else if (paraHeight >= 177 || paraHeight<= 196 || paraHeight <=214) {
      button.style.marginBottom = "50px"; // Adjust margin for content over 177px height
    } else {
      button.style.marginBottom = "35px"; // Default margin if content height is less than 177px
    }
  }

  // Initial adjustment on page load
  adjustButtonMargin();

  // Adjust on window resize
  window.addEventListener("resize", adjustButtonMargin);

  // Adjust on content change (if content is dynamically loaded after page load)
  const observer = new MutationObserver(adjustButtonMargin);
  observer.observe(para, { childList: true, subtree: true }); // Observe changes in the content
});




</script>
