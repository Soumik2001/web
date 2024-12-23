![mask1](https://github.com/user-attachments/assets/35f531db-fccf-4a98-9bd1-1651f018bda3)
![mainImage2](https://github.com/user-attachments/assets/4aa02364-0acc-4bf1-84e7-db4ffb0175be)
![mainImage1](https://github.com/user-attachments/assets/9acb3db8-2398-4c3d-942c-eae98bf8cd93)



<div class="imagesection">
  <div class="mask1">
   <img src="images/mask1.png" class="bg1">
  <img src="images/mainImage1.jpg" class="bg2">  
  </div>

<div class="text">
<p class="textPara1"><span>P</span>rofessional</p>
<p class="textPara2"><span>W</span>edding</p>
<p class="textPara3"><span>S</span>earch Engine</p>
</div>
</div>



.imagesection {
  position: relative;
  width: 960px;
  height: 193px;
  margin-top: 10px;
}

.mask1 {
  position: relative;
  overflow: hidden;
  width: 960px;
  height: 195px;
  border-radius: 6px;
z-index: 1;

}

.mask1 .bg1{
  position: absolute;
top: 0;
right: 0;
background:url(../images/mainImage2.jpg);
-webkit-mask-repeat: no-repeat;
  z-index: 2;

}



.mask1 .bg2 {
  position: absolute;
  object-fit: cover;
  z-index: 1;
}
