<div class="mainSection">
        <div class="img-container">
          <img src="images/bottle.png" width="78" height="256" alt="Bottle image" id="bottle">
      </div>
 
        <p class="heading">Aqua Green Revolution</p>
        <p class="para">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <input type="button" value="Read More" class="btn">
     
    </div>




    
.mainSection {
  background: #00b3a1;
  width: 960px;
min-height:200px;
  margin-top: 34px;
  padding: 20px;
  position: relative;
}

.heading{
color:#fefffe;
font-family: 'myFont1';
font-size:24.09px;
margin-bottom: 10px;
letter-spacing:1px;
}

.para{
color:#fefffe;
margin-top:10px;
width:692px;
font-family:tahoma;
font-size:11.04px;
line-height:18px;
word-spacing:3px;
overflow: hidden;
}

.btn{

background:url("../images/box1.png") no-repeat;
border:none;
outline:none;
width:80px;
height:20px;
border-radius:4px;
color: #fefefe;
filter:drop-shadow(0 0 3.5px rgba(255, 255, 255,1));
cursor:pointer;
transition: all 350ms ease-in-out;
font-family:tahoma;
font-size:11.5px;
font-weight:600;
margin-top: 15px;
}



.btn:hover{
background:#008073;
width:80px;
height:20px;
border-radius:4px;
filter:drop-shadow(0 0 5px #fefefe);
}


 .circular-glow {
  width: 50px;
  height: 50px;
  border-radius: 50%; 
position:absolute;
bottom: 149px;
right:80px;
  background-color: red; 
  box-shadow: 0 0 125px 30px rgba(255, 255, 255, 1); 
}

.img-container{
 float: right;
}

#bottle{
position:absolute;
bottom:5px;
right:65px;
shape-outside:url("../images/bottle.png");
shape-margin:20px;
width:78px;
height:256px;
filter:drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.75));
} 
