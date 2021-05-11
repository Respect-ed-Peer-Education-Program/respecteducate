var menuDiv = document.createElement('div');
menuDiv.classList.add("bottomMenu");
   
var menuLeft = document.createElement('div');
menuLeft.classList.add("leftBottomMenu");
   
var logo = document.createElement('a');
logo.href = "Home";

var menuBarLogoImage = document.createElement('img');
menuBarLogoImage.classList.add("smallLogo");
menuBarLogoImage.src = "img/logo_narrow.jpg";

logo.appendChild(menuBarLogoImage);

var logoText = document.createElement('p');
logoText.classList.add('bottomMenuText');
logoText.innerHTML = "Respect(Ed) Peer Education Program is a registered 501(c)(3) nonprofit under EIN 83-4269894. All donations are fully tax-deductible.";


var social_ul = document.createElement('ul');
var social_li = document.createElement('li');

var facebook = document.createElement('a');
facebook.classList.add('leftmost');
facebook.classList.add('fa');
facebook.classList.add('fa-facebook');
facebook.classList.add('bottomMenuSocials');
facebook.setAttribute("href", "https://www.facebook.com/respectedpeereducation/");

var twitter = document.createElement('a');
twitter.classList.add('fa');
twitter.classList.add('fa-twitter');
twitter.classList.add('bottomMenuSocials');
twitter.setAttribute("href", "https://twitter.com/respecteducate");

var instagram = document.createElement('a');
instagram.classList.add('fa');
instagram.classList.add('fa-instagram');
instagram.classList.add('bottomMenuSocials');
instagram.setAttribute("href", "https://www.instagram.com/respecteducate/");

var linkedin = document.createElement('a');
linkedin.classList.add('fa');
linkedin.classList.add('fa-linkedin');
linkedin.classList.add('bottomMenuSocials');
linkedin.setAttribute("href", "https://www.linkedin.com/company/respecteducate");

var donate = document.createElement('a');
donate.classList.add('donateFooter');
donate.setAttribute("href", "https://secure.actblue.com/donate/respect-ed");
donate.innerHTML = "DONATE";

social_li.appendChild(facebook);
social_li.appendChild(twitter);
social_li.appendChild(instagram);
social_li.appendChild(linkedin);
social_li.appendChild(donate);

social_ul.appendChild(social_li);

var menuRight = document.createElement('div');
menuRight.classList.add("rightBottomMenu");

var about_ul = document.createElement('div');
about_ul.setAttribute("id", "AboutBottomMenu");

var about1 = document.createElement('li');
about1.classList.add('mainBottom');
var about1_a = document.createElement('a');
about1_a.setAttribute("href", "About");
about1_a.innerHTML = "About";
about1.appendChild(about1_a);

var about2 = document.createElement('li');
about2.classList.add('minorBottom');
var about2_a = document.createElement('a');
about2_a.setAttribute("href", "About");
about2_a.innerHTML = "Our Mission";
about2.appendChild(about2_a);

var about3 = document.createElement('li');
about3.classList.add('minorBottom');
var about3_a = document.createElement('a');
about3_a.setAttribute("href", "Staff");
about3_a.innerHTML = "Our Team";
about3.appendChild(about3_a);

var about4 = document.createElement('li');
about4.classList.add('minorBottom');
var about4_a = document.createElement('a');
about4_a.setAttribute("href", "Story");
about4_a.innerHTML = "Our Story";
about4.appendChild(about4_a);

about_ul.appendChild(about1);
about_ul.appendChild(about2);
about_ul.appendChild(about3);
about_ul.appendChild(about4);


var edu_ul = document.createElement('div');
edu_ul.setAttribute("id", "EducationBottomMenu");

var edu1 = document.createElement('li');
edu1.classList.add('mainBottom');
var edu1_a = document.createElement('a');
edu1_a.setAttribute("href", "Education");
edu1_a.innerHTML = "Education";
edu1.appendChild(edu1_a);

var edu2 = document.createElement('li');
edu2.classList.add('minorBottom');
var edu2_a = document.createElement('a');
edu2_a.setAttribute("href", "Education");
edu2_a.innerHTML = "Our Curriculum";
edu2.appendChild(edu2_a);

var edu3 = document.createElement('li');
edu3.classList.add('minorBottom');
var edu3_a = document.createElement('a');
edu3_a.setAttribute("href", "Toolkits");
edu3_a.innerHTML = "Toolkits";
edu3.appendChild(edu3_a);

var edu4 = document.createElement('li');
edu4.classList.add('minorBottom');
var edu4_a = document.createElement('a');
edu4_a.setAttribute("href", "PeerEdModel");
edu4_a.innerHTML = "Peer Education Model";
edu4.appendChild(edu4_a);

var edu5 = document.createElement('li');
edu5.classList.add('minorBottom');
var edu5_a = document.createElement('a');
edu5_a.setAttribute("href", "EduPhil");
edu5_a.innerHTML = "Educational Philosophy";
edu5.appendChild(edu5_a);

var edu6 = document.createElement('li');
edu6.classList.add('minorBottom');
var edu6_a = document.createElement('a');
edu6_a.setAttribute("href", "ErinsLaw");
edu6_a.innerHTML = "Erin's Law";
edu6.appendChild(edu6_a);

var edu7 = document.createElement('li');
edu7.classList.add('minorBottom');
var edu7_a = document.createElement('a');
edu7_a.setAttribute("href", "Resources");
edu7_a.innerHTML = "Resources";
edu7.appendChild(edu7_a);

var edu8 = document.createElement('li');
edu8.classList.add('minorBottom');
var edu8_a = document.createElement('a');
edu8_a.setAttribute("href", "AnonQ");
edu8_a.innerHTML = "Anonymous Questions";
edu8.appendChild(edu8_a);

var edu9 = document.createElement('li');
edu9.classList.add('minorBottom');
var edu9_a = document.createElement('a');
edu9_a.setAttribute("href", "AskAQ");
edu9_a.innerHTML = "Ask a Question";
edu9.appendChild(edu9_a);

var edu10 = document.createElement('li');
edu10.classList.add('minorBottom');
var edu10_a = document.createElement('a');
edu10_a.setAttribute("href", "SexEd");
edu10_a.innerHTML = "Sex(Ed)";
edu10.appendChild(edu10_a);

edu_ul.appendChild(edu1);
edu_ul.appendChild(edu2);
edu_ul.appendChild(edu3);
edu_ul.appendChild(edu4);
edu_ul.appendChild(edu5);
edu_ul.appendChild(edu6);
edu_ul.appendChild(edu7);
edu_ul.appendChild(edu8);
edu_ul.appendChild(edu9);
edu_ul.appendChild(edu10);



var gi_ul = document.createElement('div');
gi_ul.setAttribute("id", "GetInvBottomMenu");

var gi1 = document.createElement('li');
gi1.classList.add('mainBottom');
var gi1_a = document.createElement('a');
gi1_a.setAttribute("href", "GetInvolved");
gi1_a.innerHTML = "Get Involved";
gi1.appendChild(gi1_a);

var gi2 = document.createElement('li');
gi2.classList.add('minorBottom');
var gi2_a = document.createElement('a');
gi2_a.setAttribute("href", "Get Involved");
gi2_a.innerHTML = "Respect(Ed) at Your School";
gi2.appendChild(gi2_a);

var gi3 = document.createElement('li');
gi3.classList.add('minorBottom');
var gi3_a = document.createElement('a');
gi3_a.setAttribute("href", "ContactUs");
gi3_a.innerHTML = "Contact Us";
gi3.appendChild(gi3_a);

var gi4 = document.createElement('li');
gi4.classList.add('minorBottom');
var gi4_a = document.createElement('a');
gi4_a.setAttribute("href", "Events");
gi4_a.innerHTML = "Events";
gi4.appendChild(gi4_a);

gi_ul.appendChild(gi1);
gi_ul.appendChild(gi2);
gi_ul.appendChild(gi3);
gi_ul.appendChild(gi4);

var se_ul = document.createElement('div');
se_ul.setAttribute("id", "SexEdBottomMenu");

var se1 = document.createElement('li');
se1.classList.add('mainBottom');
var se1_a = document.createElement('a');
se1_a.setAttribute("href", "SexEd");
se1_a.innerHTML = "Sex(Ed)";
se1.appendChild(se1_a);

var se2 = document.createElement('li');
se2.classList.add('minorBottom');
var se2_a = document.createElement('a');
se2_a.setAttribute("href", "SexEd");
se2_a.innerHTML = "About the Program";
se2.appendChild(se2_a);

var se3 = document.createElement('li');
se3.classList.add('minorBottom');
var se3_a = document.createElement('a');
se3_a.setAttribute("href", "LeadershipInstitute");
se3_a.innerHTML = "Leadership Institute";
se3.appendChild(se3_a);

var se4 = document.createElement('li');
se4.classList.add('minorBottom');
var se4_a = document.createElement('a');
se4_a.setAttribute("href", "DropInProgramming");
se4_a.innerHTML = "Drop-In Programming";
se4.appendChild(se4_a);

var se5 = document.createElement('li');
se5.classList.add('minorBottom');
var se5_a = document.createElement('a');
se5_a.setAttribute("href", "GuideBook");
se5_a.innerHTML = "Guide Book";
se5.appendChild(se5_a);

se_ul.appendChild(se1);
se_ul.appendChild(se2);
se_ul.appendChild(se3);
se_ul.appendChild(se4);
se_ul.appendChild(se5);



var whatsnew_ul = document.createElement('div');
whatsnew_ul.setAttribute("id", "WhatsNewBottomMenu");

var whatsnew1 = document.createElement('li');
whatsnew1.classList.add('mainBottom');
var whatsnew1_a = document.createElement('a');
whatsnew1_a.setAttribute("href", "WhatsNew");
whatsnew1_a.innerHTML = "What's New";
whatsnew1.appendChild(whatsnew1_a);

whatsnew_ul.appendChild(whatsnew1);

menuLeft.appendChild(logo);
menuLeft.appendChild(logoText);
menuLeft.appendChild(social_ul);

menuRight.appendChild(about_ul);
menuRight.appendChild(edu_ul);
menuRight.appendChild(se_ul);
menuRight.appendChild(gi_ul);
menuRight.appendChild(whatsnew_ul);


menuDiv.appendChild(menuLeft);
menuDiv.appendChild(menuRight);


var credits = document.createElement('div');
credits.setAttribute("id", "copyAndCredit");

var additional_buttons = document.createElement('div');
additional_buttons.setAttribute("id", "bottom_buttons_div");

var legal = document.createElement('li');
legal.classList.add('additional_buttons');
var legal_a = document.createElement('a');
legal_a.setAttribute("href", "Legal");
legal.style.marginRight = '2%';
legal_a.innerHTML = "Legal";
legal.appendChild(legal_a);

var careers = document.createElement('li');
careers.classList.add('additional_buttons');
var careers_a = document.createElement('a');
careers_a.setAttribute("href", "Careers");
careers_a.innerHTML = "Careers";
careers.appendChild(careers_a);

additional_buttons.appendChild(legal);
additional_buttons.appendChild(careers);

var creditText = document.createElement('p');
creditText.innerHTML = "&copy; 2020 Respect(Ed) Peer Education Program   |   Website Developed and Designed by <a class='nameLink' href='https://www.linkedin.com/in/jenna-everard/'>Jenna Everard</a> and <a class='nameLink' href='https://www.linkedin.com/in/catherine-e-obrien/'>Catherine O'Brien</a>";

credits.appendChild(creditText);
credits.appendChild(additional_buttons);

document.body.appendChild(menuDiv);
document.body.appendChild(credits)
