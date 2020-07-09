	var smallMenu = document.createElement('div');
	smallMenu.classList.add("smallMenu");
	smallMenu.setAttribute("id", "smallMenu");

    var MenuLeft = document.createElement('div');
    MenuLeft.classList.add("SmallMenuLeft");
    MenuLeft.setAttribute("id", "SmallMenuLeft");

    var logo = document.createElement('a');
    logo.classList.add("Smalllogo");
    logo.href = "Home";

    var menuBarLogoImage = document.createElement('img');
    menuBarLogoImage.classList.add("smallmenuBarLogoImage");
    menuBarLogoImage.src = "img/MainLogo.png";

    logo.appendChild(menuBarLogoImage);

    var MenuIcon = document.createElement('a');
    MenuIcon.setAttribute("id", "SmallMenuIcon");

    var menuIconImage = document.createElement('i');
    menuIconImage.classList.add("menuIconImage");
    menuIconImage.classList.add("fa");
    menuIconImage.classList.add("fa-bars");
    menuIconImage.setAttribute("aria-hidden", "true");

    MenuIcon.appendChild(menuIconImage);

    MenuLeft.appendChild(logo);
    MenuLeft.appendChild(MenuIcon);

    smallMenu.appendChild(MenuLeft);
   
		MenuIcon.addEventListener("click", function() {
			/*document.getElementById("wrapper").style.display='block';*/
			document.getElementById("popupMenu").style.display='block';
			document.getElementById("popupMenu").style.height=document.body.scrollHeight+"px";
		})

     document.body.appendChild(smallMenu); 
