var menuDiv = document.createElement('div');
menuDiv.classList.add("Menu");
 
var menuLeft = document.createElement('div');
menuLeft.classList.add("MenuLeft");
   
var logo = document.createElement('a');
logo.classList.add("logo");
logo.href = "Home.html"
   
var menuBarLogoImage = document.createElement('img');
menuBarLogoImage.classList.add("menuBarLogoImage");
menuBarLogoImage.src = "img/MainLogo.png";
   
logo.appendChild(menuBarLogoImage);
  
menuLeft.appendChild(logo);
   
menuDiv.appendChild(menuLeft);

document.body.appendChild(menuDiv);
