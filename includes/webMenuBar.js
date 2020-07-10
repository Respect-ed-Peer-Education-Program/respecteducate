   var menuDiv = document.createElement('div');
   menuDiv.classList.add("Menu");
   menuDiv.setAttribute("id", "WideMenu");
   
   var menuLeft = document.createElement('div');
   menuLeft.classList.add("MenuLeft");
   
   var logo = document.createElement('a');
   logo.classList.add("logo");
   logo.href = "Home";
   
   var menuBarLogoImage = document.createElement('img');
   menuBarLogoImage.classList.add("menuBarLogoImage");
   menuBarLogoImage.src = "img/logo_narrow.jpg";
   
   logo.appendChild(menuBarLogoImage);
   
   menuLeft.appendChild(logo);
   
   menuDiv.appendChild(menuLeft);
   
   var MenuRight = document.createElement('div');
   MenuRight.classList.add("MenuRight");
   
   var homeMenuButton = document.createElement('a');
   homeMenuButton.setAttribute("id", "homeMenuButton");
   homeMenuButton.href = "Home";
   homeMenuButton.innerHTML = "Home";
   
   /* START of Expanding Menu Button */
   var AboutExpanding = document.createElement('div');
   AboutExpanding.classList.add("AboutExpanding");
   AboutExpanding.classList.add("expandingMenuItem");
   
   var AboutMenuButton = document.createElement('a');
   AboutMenuButton.onclick = function() {
       window.location.href='About';
   };
   AboutMenuButton.setAttribute("id", "AboutMenuButton");
   AboutMenuButton.classList.add("menuButton");
   AboutMenuButton.classList.add("AboutMenuButton");
   AboutMenuButton.innerHTML = "About";
   
   var AboutExpand = document.createElement('div');
   AboutExpand.classList.add("ItemsinExpandingMenu");
   
   var Abouta = document.createElement('a');
   Abouta.href = "About";
   Abouta.innerHTML = "Our Mission";
   
   var AboutStaff = document.createElement('a');
   AboutStaff.href = "Staff";
   AboutStaff.innerHTML = "Our Team";
   
   var AboutStory = document.createElement('a');
   AboutStory.href = "Story";
   AboutStory.innerHTML = "Our Story";
   
   AboutExpand.appendChild(Abouta);
   AboutExpand.appendChild(AboutStaff);
   AboutExpand.appendChild(AboutStory);
   
   AboutExpanding.appendChild(AboutMenuButton);
   AboutExpanding.appendChild(AboutExpand);
   /* END of Expanding Menu Button */
   
   /* START of Expanding Menu Button */
   var EducationExpanding = document.createElement('div');
   EducationExpanding.classList.add("EducationExpanding");
   EducationExpanding.classList.add("expandingMenuItem");
   
   var EduMenuButton = document.createElement('a');
   EduMenuButton.onclick = function() {
       window.location.href='Education';
   };
   EduMenuButton.setAttribute("id", "EduMenuButton");
   EduMenuButton.classList.add("menuButton");
   EduMenuButton.classList.add("EducationButton");
   EduMenuButton.innerHTML = "Education";
   
   var EducationExpand = document.createElement('div');
   EducationExpand.classList.add("ItemsinExpandingMenu");
   
   var Educurr = document.createElement('a');
   Educurr.href = "Education";
   Educurr.innerHTML = "Our Curriculum";
   
   var PeerEdModel = document.createElement('a');
   PeerEdModel.href = "PeerEdModel";
   PeerEdModel.innerHTML = "Peer Education Model";

   var EduPhil = document.createElement('a');
   EduPhil.href = "EduPhil";
   EduPhil.innerHTML = "Educational Philosophy";

   var ErinsLaw = document.createElement('a');
   ErinsLaw.href = "ErinsLaw";
   ErinsLaw.innerHTML = "Erin's Law";
   
   var Edures = document.createElement('a');
   Edures.href = "Resources";
   Edures.innerHTML = "Resources";
   
   var Educanon = document.createElement('a');
   Educanon.href = "AnonQ";
   Educanon.innerHTML = "Anonymous Questions";

   var Educask = document.createElement('a');
   Educask.href = "AskAQ";
   Educask.innerHTML = "Ask a Question";
   
   EducationExpand.appendChild(Educurr);
   EducationExpand.appendChild(PeerEdModel);
   EducationExpand.appendChild(EduPhil);
   EducationExpand.appendChild(ErinsLaw);
   EducationExpand.appendChild(Edures);
   EducationExpand.appendChild(Educanon);
   EducationExpand.appendChild(Educask); 
   
   EducationExpanding.appendChild(EduMenuButton);
   EducationExpanding.appendChild(EducationExpand);
   /* END of Expanding Menu Button */
   
   /* START of Expanding Menu Button */
   var GetInvExpanding = document.createElement('div');
   GetInvExpanding.classList.add("GetInvExpanding");
   GetInvExpanding.classList.add("expandingMenuItem");
   
   var GetInvButton = document.createElement('a');
   GetInvButton.onclick = function() {
       window.location.href='GetInvolved';
   };
   GetInvButton.setAttribute("id", "GetInvMenuButton");
   GetInvButton.classList.add("menuButton");
   GetInvButton.classList.add("GetInvButton");
   GetInvButton.innerHTML = "Get Involved";
   
   var GetInvExpand = document.createElement('div');
   GetInvExpand.classList.add("ItemsinExpandingMenu");
   
   var AtSchool = document.createElement('a');
   AtSchool.href = "GetInvolved";
   AtSchool.innerHTML = "Respect(Ed) at Your School";
   
   var Contact = document.createElement('a');
   Contact.href = "ContactUs";
   Contact.innerHTML = "Contact Us";
   
   GetInvExpand.appendChild(AtSchool);
   GetInvExpand.appendChild(Contact);
   
   GetInvExpanding.appendChild(GetInvButton);
   GetInvExpanding.appendChild(GetInvExpand);
   /* END of Expanding Menu Button */
   
   var WhatsNewMenuButton = document.createElement('a');
   WhatsNewMenuButton.setAttribute("id", "WhatsNewMenuButton");
   WhatsNewMenuButton.href = "WhatsNew";
   WhatsNewMenuButton.innerHTML = "What's New?";
   
   var MenuDonateButton = document.createElement('a');
   MenuDonateButton.classList.add("MenuDonateButton");
   MenuDonateButton.href = "https://secure.actblue.com/donate/respect-ed";
   MenuDonateButton.innerHTML = "Donate";
   
   MenuRight.appendChild(homeMenuButton);
   MenuRight.appendChild(AboutExpanding);
   MenuRight.appendChild(EducationExpanding);
   MenuRight.appendChild(GetInvExpanding);
   MenuRight.appendChild(WhatsNewMenuButton);
   MenuRight.appendChild(MenuDonateButton);
   
   menuDiv.appendChild(MenuRight);
   
   document.body.appendChild(menuDiv);  

