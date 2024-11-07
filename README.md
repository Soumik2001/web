function updateStyleHover() {
  // Check if `currentPosition` is at the start
  if (currentPosition === 0) {
    left.style.cursor = 'default';
    prev.style.cursor = 'default';
    left.classList.add('no-hover');
    prev.classList.add('no-hover');
  } else {
    left.style.cursor = 'pointer';
    left.classList.remove('no-hover');
    prev.style.cursor = 'pointer';
    prev.classList.remove('no-hover');
  }

  // Check if `currentPosition` is at the end
  const maxPosition = -(itemWidth * (totalItems - itemsToShow));
  if (currentPosition <= maxPosition) {
    right.style.cursor = 'default';
    next.style.cursor = 'default';
    right.classList.add('no-hover');
    next.classList.add('no-hover');
  } else {
    right.style.cursor = 'pointer';
    next.style.cursor = 'pointer';
    right.classList.remove('no-hover');
    next.classList.remove('no-hover');
  }
}


.Lside.no-hover:hover,
.Rside.no-hover:hover,
#prev.no-hover:hover,
#next.no-hover:hover {
  background: url("../images/lside.png") no-repeat; /* Adjust this as needed */
  transition: none;
}

