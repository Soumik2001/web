@font-face {
  font-family: 'myFont1';
  src: url('../fonts/Century Gothic Std Regular.otf') format('truetype');
}


*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
overflow-x:hidden;
overflow-y:auto;
display:flex;
justify-content:center;
align-items:flex-start;
}


#fullpage{
width:1000px;
height:600px;
background:#fff;
padding:0 20px;
position:relative;
}

a{
text-decoration:none;
}
.navbar {
  width: 960px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.logo {
  position: relative;
  margin-top: 50px;
}

.navUL {
  max-width: 750px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 70.5px;
  position: absolute;
  right: 0;
  list-style-type: none;
  transition: all 350ms ease-in-out;
  padding: 0;
}

/* General styling for items */
.navUL li {
  margin: 0 10px 10px 0;
  flex-shrink: 0;
}

.navA {
  font-family: 'myFont1';
  font-size: 12px;
  font-weight: 600;
  width: 55px;
  height: 25px;
  color: #00b3a1;
  padding: 5px 8px;
  transition: all 250ms ease-in-out;
}

.navUL li:first-child a {
  background: #00b3a1;
  color: #fff;
}

.navUL li:hover a {
  background: #00b3a1;
  color: #fff;
  border-radius: 5px;
}




.main{position:relative; width:960px;}

.rule1{
border: 1px solid #00b3a1;
margin-top: 10px;
}

.socialMedia{
position:absolute;
left:205px;
top:1px;
width:150px;
height:30px;
background:#00b3a1;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
}
.socialMedia a{
position:relative;
left:7px;
top:-1px;
margin-left:-5px;
}
.socialIcon{
transition:all 0.2s ease-in-out;
filter: drop-shadow(0 0 1px #fff);
}
.socialIcon:hover{
transform: scale(0.8);
filter: drop-shadow(0 0 1.5px #000);
}

.socialMedia a img{width:30px; height:30px;}

.mainSection{
background:#00b3a1;
width:960px;
height:200px;
position:relative;
top:69px;
display:flex;
justify-content:space-between;
align-items:center;
}

.heading{
color:#fefffe;
font-family: 'myFont1';
font-size:24.09px;
position:absolute;
top:25px;
letter-spacing:1px;
}

.para{
color:#fefffe;
position:absolute;
top:64px;
/* width:692px; */
font-family:tahoma;
font-size:11.04px;
line-height:18px;
word-spacing:3px;
}

.btn{
position:absolute;
top:150px;
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
}

.btn:hover{
background:#008073;
width:80px;
height:20px;
border-radius:4px;
filter:drop-shadow(0 0 5px #fefefe);
}

.lside{
width:692px;
margin-left:20px;
}

.circular-glow {
  width: 50px;
  height: 50px;
  border-radius: 50%; 
position:absolute;
top:69px;
right:68px;
  background-color: transparent; 
  box-shadow: 0 0 125px 75px rgba(255, 255, 255, 1); 
}


.rside{
position:absolute;
bottom:-75px;
right:-3px;
width:78px;
height:256px;
filter:drop-shadow(3px 1px 3px rgba(0, 0, 0, 0.75));
}

.rule2{
border: 1px solid #00b3a1;
position:absolute;
top:205px;
width:960px;
}

.para2{
position:absolute;
top:222px;
color:#656565;
font-family:tahoma;
font-size:11.04px;
line-height:18px;
word-spacing:4px;
margin-left:20px;
}

.btn2{
position:absolute;
top:332px;
background:url("../images/box2.png") no-repeat;
border:none;
outline:none;
width:40px;
height:20px;
color: #fefefe;
cursor:pointer;
margin-left:20px;
margin-top:6px;
font-family:tahoma;
font-size:11.5px;
font-weight:600;
text-align:center;
transition: all 350ms ease-in-out;
filter:drop-shadow(0 0 3px #8a8495);
}

.btn2:hover{
background:#008073;
width:40px;
height:20px;
border-radius:4px;
filter:drop-shadow(0 0 7px #8a8495);
}

footer{
width:960px;
position: absolute;
bottom: 10px;
}
.section1{
display:flex;
justify-content:center;
align-items:center;
background:#00b3a1;
width:960px;
height:25px;
}

.section1 a{
color:#ffffff; 
font-family:tahoma; 
font-size:11.04px;
margin:0 3px;
font-weight:700;
height:25px;
display:flex;
justify-content:center;
align-items:center;
padding:9.5px;
letter-spacing:0.2px;
transition: all 350ms ease-in-out;
}
.section1 a:hover{
background:#008073; 
height:25px; 
border-radius:6px; 
filter:drop-shadow(0 0 5px #fff);
} 
.section1 span{
background-color:#fefefe;
width:2.4px;
height:12px;
}

.copyright, .copyright a{
font-family:tahoma; 
font-size:11.4px;
word-spacing:3px;
color:#656565;
text-align:center;
margin:1px;
padding:3px 2px;
transition: all 350ms ease-in-out;
font-weight:600;
}
.copyright a:hover{
background:#4b4b4b;
color:#fff;
padding:3px 2px;
border-radius:5px;

}







document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.navUL');
    const items = Array.from(navContainer.children);
  
    function reorderNavItems() {
      // Clear any existing reordered layout by re-adding items in original order
      items.forEach(item => navContainer.appendChild(item));
  
      const rows = [];
      let currentRow = [];
      let lastOffsetTop = items[0].offsetTop;
  
      // Group items into rows based on their offsetTop
      items.forEach((item) => {
        if (item.offsetTop !== lastOffsetTop) {
          // Push the current row into rows array and reset for the next row
          rows.push(currentRow);
          currentRow = [];
          lastOffsetTop = item.offsetTop;
        }
        currentRow.push(item);
      });
  
      // Push the last row into the rows array
      rows.push(currentRow);
  
      // Now append the rows back into the navContainer, alternating order
      rows.forEach((row, index) => {
        // For the first row, keep the original order
        if (index % 2 !== 0) {
          // Reverse every other row starting from the second row (index 1, 3, 5, etc.)
          row.reverse();
        }
        // Append items of this row in the correct order
        row.forEach(item => navContainer.appendChild(item));
      });
    }
  
    // Run the function on initial load and on window resize
    reorderNavItems();
    window.addEventListener('resize', reorderNavItems);
  });
  
