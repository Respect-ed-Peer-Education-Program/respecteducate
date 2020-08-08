
   var menuDiv = document.createElement('div');
   menuDiv.classList.add("popupMenu");
   menuDiv.setAttribute("id", "popupMenu");
   
   var popupMenuContent = document.createElement('div');
   popupMenuContent.classList.add("popupMenuContent");
   
   var closeE = document.createElement('div');
   closeE.classList.add("close");
   closeE.innerHTML = "&times;";
   
   var popUpMenuLogo = document.createElement('img');
   popUpMenuLogo.classList.add("popUpMenuLogo");
   popUpMenuLogo.src = "../img/logo_narrow.jpg";
   
   var homeMenuButton = document.createElement('a');
   homeMenuButton.classList.add("newPage");
   homeMenuButton.classList.add("SmallmenuElement");
   homeMenuButton.classList.add("topMenuItem");
   homeMenuButton.href = "../Home";
   homeMenuButton.innerHTML = "Home";
   
    /* START of Expanding Menu Button */
   var AboutExpanding = document.createElement('div');
   AboutExpanding.classList.add("SmallAboutExpanding");
   AboutExpanding.classList.add("SmallexpandingMenuItem");
   
   var AboutMenuButton = document.createElement('button');
   AboutMenuButton.classList.add("SmallmenuButton");
   AboutMenuButton.classList.add("SmallAboutMenuButton");
   AboutMenuButton.innerHTML = "About";
   
   var AboutExpand = document.createElement('div');
   AboutExpand.classList.add("SmallItemsinExpandingMenu");
   
   var Abouta = document.createElement('a');
   Abouta.href = "../About";
   Abouta.classList.add("newPage");
   Abouta.innerHTML = "Our Mission";
   
   var AboutStaff = document.createElement('a');
   AboutStaff.href = "../Staff";
   AboutStaff.classList.add("newPage");
   AboutStaff.innerHTML = "Our Team";
   
   var AboutStory = document.createElement('a');
   AboutStory.href = "../Story";
   AboutStory.classList.add("newPage");
   AboutStory.innerHTML = "Our Story";
   
   AboutExpand.appendChild(Abouta);
   AboutExpand.appendChild(AboutStaff);
   AboutExpand.appendChild(AboutStory);
   
   AboutExpanding.appendChild(AboutMenuButton);
   AboutExpanding.appendChild(AboutExpand);
   /* END of Expanding Menu Button */
   
   /* START of Expanding Menu Button */
   var EducationExpanding = document.createElement('div');
   EducationExpanding.classList.add("SmallEducationExpanding");
   EducationExpanding.classList.add("SmallexpandingMenuItem");
   
   var EduMenuButton = document.createElement('button');
   
   EduMenuButton.classList.add("SmallmenuButton");
   EduMenuButton.classList.add("SmallEducationButton");
   EduMenuButton.innerHTML = "Education";
   
   var EducationExpand = document.createElement('div');
   EducationExpand.classList.add("SmallItemsinExpandingMenu");
   
   var Educurr = document.createElement('a');
   Educurr.href = "../Education";
   Educurr.classList.add("newPage");
   Educurr.innerHTML = "Our Curriculum";
   
   var PeerEdModel = document.createElement('a');
   PeerEdModel.classList.add("newPage");
   PeerEdModel.href = "../PeerEdModel";
   PeerEdModel.innerHTML = "Peer Education Model";

   var EduPhil = document.createElement('a');
   EduPhil.classList.add("newPage");
   EduPhil.href = "../EduPhil";
   EduPhil.innerHTML = "Educational Philosophy";

   var ErinsLaw = document.createElement('a');
   ErinsLaw.classList.add("newPage");
   ErinsLaw.href = "../ErinsLaw";
   ErinsLaw.innerHTML = "Erin's Law";
   
   var Edures = document.createElement('a');
   Edures.classList.add("newPage");
   Edures.href = "../Resources";
   Edures.innerHTML = "Resources";
   
   var Educanon = document.createElement('a');
   Educanon.classList.add("newPage");
   Educanon.href = "../AnonQ";
   Educanon.innerHTML = "Anonymous Questions";

   var Educask = document.createElement('a');
   Educask.classList.add("newPage");
   Educask.href = "../AskAQ";
   Educask.innerHTML = "Ask a Question";

   var EduSexEd = document.createElement('a');
   EduSexEd.classList.add("newPage");
   EduSexEd.href = "../SexEd";
   EduSexEd.innerHTML = "Sex(Ed)";
   
   EducationExpand.appendChild(Educurr);
   EducationExpand.appendChild(PeerEdModel);
   EducationExpand.appendChild(EduPhil);
   EducationExpand.appendChild(ErinsLaw);
   EducationExpand.appendChild(Edures);
   EducationExpand.appendChild(Educanon);   
   EducationExpand.appendChild(Educask);  
   EducationExpand.appendChild(EduSexEd);
   
   EducationExpanding.appendChild(EduMenuButton);
   EducationExpanding.appendChild(EducationExpand);
   /* END of Expanding Menu Button */
   
   /* START of Expanding Menu Button */
   var GetInvExpanding = document.createElement('div');
   GetInvExpanding.classList.add("SmallGetInvExpanding");
   GetInvExpanding.classList.add("SmallexpandingMenuItem");
   
   var GetInvButton = document.createElement('button');
   
   GetInvButton.classList.add("SmallmenuButton");
   GetInvButton.classList.add("SmallGetInvButton");
   GetInvButton.innerHTML = "Get Involved";
   
   var GetInvExpand = document.createElement('div');
   GetInvExpand.classList.add("SmallItemsinExpandingMenu");
   
   var AtSchool = document.createElement('a');
   AtSchool.classList.add("newPage");
   AtSchool.href = "../GetInvolved";
   AtSchool.innerHTML = "Respect(Ed) at Your School";
   
   var Contact = document.createElement('a');
   Contact.classList.add("newPage");
   Contact.href = "../ContactUs";
   Contact.innerHTML = "Contact Us";
   
   GetInvExpand.appendChild(AtSchool);
   GetInvExpand.appendChild(Contact);
   
   GetInvExpanding.appendChild(GetInvButton);
   GetInvExpanding.appendChild(GetInvExpand);
   /* END of Expanding Menu Button */
   
   var WhatsNewMenuButton = document.createElement('a');
   WhatsNewMenuButton.href = "../WhatsNew";
   WhatsNewMenuButton.classList.add("newPage");
   WhatsNewMenuButton.classList.add("SmallmenuElement");
   WhatsNewMenuButton.innerHTML = "What's New?";
   
   var MenuDonateButton = document.createElement('a');
   MenuDonateButton.classList.add("SmallMenuDonateButton");
   MenuDonateButton.classList.add("SmallmenuElement");
   MenuDonateButton.classList.add("newPage");
   MenuDonateButton.href = "https://secure.actblue.com/donate/respect-ed";
   MenuDonateButton.innerHTML = "Donate";
   
   popupMenuContent.appendChild(closeE);
   popupMenuContent.appendChild(popUpMenuLogo);
   popupMenuContent.appendChild(homeMenuButton);
   popupMenuContent.appendChild(AboutExpanding);
   popupMenuContent.appendChild(EducationExpanding);
   popupMenuContent.appendChild(GetInvExpanding);
   popupMenuContent.appendChild(WhatsNewMenuButton);
   popupMenuContent.appendChild(MenuDonateButton);
   
   menuDiv.appendChild(popupMenuContent);
   
   document.body.appendChild(menuDiv);
   
	closeE.addEventListener("click", function() {			
		document.getElementById("popupMenu").style.display='none';
	})
		
	var newPage = document.getElementsByClassName("newPage");
	for (var i = 0; i < newPage.length; i++) {
		newPage[i].addEventListener('click', function() {
			document.getElementById("popupMenu").style.display='none';
		})
	}
	var expandingMenu = document.getElementsByClassName("SmallmenuButton");
	for (var i = 0; i < expandingMenu.length; i++) {
		expandingMenu[i].addEventListener('click', function() {
			if(this.classList.contains("active")) {
				this.classList.remove("active");
			}
			else {
				this.classList.add("active");
			}
			
				
			var subMenu = this.nextElementSibling;
			if(subMenu.style.maxHeight == 0) {
				subMenu.style.maxHeight = "" + subMenu.scrollHeight + "px";
			}
			else {
				subMenu.style.maxHeight = null;
			}
		})
	}

