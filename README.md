var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    // Close all other sections
    for (var j = 0; j < coll.length; j++) {
      if (coll[j] !== this) {
        coll[j].classList.remove("active");
        var content = coll[j].nextElementSibling;
        content.style.maxHeight = null;
      }
    }

    // Toggle the clicked section
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 23 + "px"; // Add extra pixels
    }
  });
}

// Activate the first collapsible by default
document.addEventListener("DOMContentLoaded", function () {
  var firstCollapsible = coll[0];
  var firstContent = firstCollapsible.nextElementSibling;

  firstCollapsible.classList.add("active");
  firstContent.style.maxHeight = firstContent.scrollHeight + 23 + "px"; // Add extra pixels
});
