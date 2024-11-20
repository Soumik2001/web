<div class="carosel">

<div class="para">
<div class="floatImg"><img src="images/img1.jpg" alt="Image 1" id="myImg"></div>

<p class="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum


<div class="dots">
<input type="radio" name="slides">
<input type="radio" name="slides" checked>
<input type="radio" name="slides">
<input type="radio" name="slides">
<input type="radio" name="slides">
</div>
</div>  




.carosel{
 display: -webkit-box;
  display: -ms-flexbox;
-webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
flex-direction: row;
max-width:900px;
min-height:196px;
height:auto;
margin:0 50px;
display:flex;
margin-top:20px;
position:relative;
}

.floatImg	{
float:right;
height:100%;
display:flex;
position:relative;
bottom:5px;
align-items:flex-end;
shape-outside:inset(calc(100% - 200px)0 0);
padding: 0px 0px 0px 15px;
}

#myImg{filter:drop-shadow(0 0 4px #000);}

.dots{
display:block;
margin-bottom: 20px;
  padding-top: 43px;
}

.heading{
color:#fff;
font-family: 'myFont2';
font-size:17.06px;
font-weight:600;
margin-bottom:20px;
margin-top:10px;
letter-spacing:1.7px;
}
.para{
color:#fff;
font-size:11.04px;
letter-spacing:1.4px;
font-weight:500;
margin-bottom: 10px;
}

.rside img{
position:relative;
top:9px;
filter:drop-shadow(0 0 2px #000);
}

.lside{
display:flex;
flex-direction:column;
justify-content:space-between;
height:auto;
}

.dots{

}

input[type='radio']:checked{
  accent-color: #000;
}
