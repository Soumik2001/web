function updateStyleHover(){
if(currentPosition ===0){
left.style.cursor ='default';
prev.style.cursor = 'default';
left.classList.add('no-hover');
}else{
left.style.cursor ='pointer';
left.classList.remove('no-hover');
prev.style.cursor ='pointer';
prev.classList.remove('no-hover');
}
const maxPosition = -(itemWidth * (totalItems - itemsToShow));
if(currentPosition <=maxPosition){
right.style.cursor= 'default';
next.style.cursor = 'default';
right.classList.add('no-hover');
next.classList.add('no-hover');
}else{
right.style.cursor= 'pointer';
next.style.cursor = 'pointer';
right.classList.remove('no-hover');
next.classList.remove('no-hover');

}

}
