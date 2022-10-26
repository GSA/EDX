/* The HTM file Must contains the following CSS lines in the style tag or CSS file.
Refer cfl_StyleSheet.CSS file*/

/* The following code is to collect web site statistics as part of Digital Analytics Program (DAP) Universal Analytics (UA) - added on 2/25/2015*/
// var ua_dap_script = document.createElement('script');
// ua_dap_script.type = 'text/javascript';
// ua_dap_script.id="_fed_an_ua_tag";
// ua_dap_script.src = '/js/Universal-Federated-Analytics-Min.js?agency=GSA';
// document.getElementsByTagName("head")[0].appendChild(ua_dap_script);
/* end of collect web site statistics as part of Digital Analytics Program (DAP) Universal Analytics (UA) */

var htmln="";
var htmln10="",htmln20="";
var newWindow;

var pubHost="";
if ((window.location.host=="computersforlearning.gov") || (window.location.host=="www.cfl.gov") ||
    (window.location.host=="computers4learning.gov"))
pubHost="https://ComputersforLearning.gov";
else
pubHost="https://cflpractice.fas.gsa.gov";

function selState()
{
document.forms[0].scSelLink.value="";
document.forms[0].scGSName.value="";
document.forms[0].submit();
}
function signIn()
{alert("clicked sign in");
}
function selLnk(opt)
{
if (scSignIn=="Y")
document.forms[0].scSelState[0].selected=true;
document.forms[0].scSelLink.value=opt;
if (opt=="GS")
document.forms[0].scGSName.value=document.forms[0].scGSName.value.replace(/^\s+/, "");
document.forms[0].submit();
}
function blankGSName(fld)
{
fld.value="";
}
function uCGSName(fld)
{if (fld.value != 'Search Entire Site')
fld.value=fld.value.toUpperCase();
}
function nw1(pgname)
{
newWindow = window.open("/htm/"+pgname,"Help","");
}

function nwHP(htmPage)
{var loc = pubHost + "/htm/" + htmPage;
if (htmPage=="privacy")
loc="https://www.gsa.gov/portal/content/116609";
else
if (htmPage=="usa")
loc="https://www.usa.gov";
if (scSignIn=="Y")
newWindow = window.open(loc ,"CFLPage","");
else
window.location=loc;
}

function fssNW()
{
newWindow = window.open("https://www.fas.gsa.gov","FSSGSA","");
}

function firstGovNW()
{
newWindow = window.open("https://firstgov.gov","FirstGov","");
}

function gsaNW()
{
newWindow = window.open("https://www.gsa.gov","GSA","");
}
function confmHome() 
{if (scSignIn=="Y")
{if (confirm("Going Home, your current session will be closed \n \n       and you need to Sign in again"))
return true;
else
return false;
}
else
return true;
}

function confmLogout() 
{if (confirm("Are you sure you want to Sign out? Please confirm."))
return true;
else
return false;
}

var gSName='';
var gSOptn='';
var srchOptnLn="";

function bldGSOptn()
{
var sO1,sO2,sO3=""; 
var sel='selected';
if (gSOptn == "2")
sO2=sel;
else
if (gSOptn == "3")
sO3=sel;
else
sO1=sel;
srchOptnLn='<label for="scGSOptnId"></label><select name=scGSOptn id="scGSOptnId" size=1 class=fontLB9>'
+'<option value="1"' + sO1 + ' >All Words</option>'
+'<option value="2"' + sO2 + ' >Any Word</option>'
+'<option value="3"' + sO3 + ' >Exact Phrase</option>'
+'</select>';
}
bldGSOptn();
var stateLn="";
//state
function bldState()
{
stateLn='<label for="StateList">or Browse by State: </label>'
+'<select id="StateList" name=scSelState onChange="selState()">'
+'<option value=" " selected>Select State'
+'<option value="ZZ">All States'
+'<option value="AL">Alabama'
+'<option value="AK">Alaska'
+'<option value="AS">American Samoa'
+'<option value="AZ">Arizona'
+'<option value="AR">Arkansas'
+'<option value="CA">California'
+'<option value="CO">Colorado'
+'<option value="CT">Connecticut'
+'<option value="DE">Delaware'
+'<option value="DC">District of Columbia'
+'<option value="FL">Florida'
+'<option value="GA">Georgia'
+'<option value="GU">Guam'
+'<option value="HI">Hawaii'
+'<option value="ID">Idaho'
+'<option value="IL">Illinois'
+'<option value="IN">Indiana'
+'<option value="IA">Iowa'
+'<option value="KS">Kansas'
+'<option value="KY">Kentucky'
+'<option value="LA">Louisiana'
+'<option value="ME">Maine'
+'<option value="MD">Maryland'
+'<option value="MA">Massachusetts'
+'<option value="MI">Michigan'
+'<option value="MN">Minnesota'
+'<option value="MS">Mississippi'
+'<option value="MO">Missouri'
+'<option value="MT">Montana'
+'<option value="NE">Nebraska'
+'<option value="NV">Nevada'
+'<option value="NH">New Hampshire'
+'<option value="NJ">New Jersey'
+'<option value="NM">New Mexico'
+'<option value="NY">New York'
+'<option value="NC">North Carolina'
+'<option value="ND">North Dakota'
+'<option value="MP">Northern Marianas'
+'<option value="OH">Ohio'
+'<option value="OK">Oklahoma'
+'<option value="OR">Oregon'
+'<option value="PA">Pennsylvania'
+'<option value="PR">Puerto Rico'
+'<option value="RI">Rhode Island'
+'<option value="SC">South Carolina'
+'<option value="SD">South Dakota'
+'<option value="TN">Tennessee'
+'<option value="TX">Texas'
+'<option value="UT">Utah'
+'<option value="VT">Vermont'
+'<option value="VA">Virginia'
+'<option value="VI">Virgin Islands'
+'<option value="WA">Washington'
+'<option value="WV">West Virginia'
+'<option value="WI">Wisconsin'
+'<option value="WY">Wyoming'
+'</select></td>';
}
bldState();
//

function hdrFlag() {
	var htmSign_in="",htmBanner="";
	if (scSignIn=="Y") {
		htmSign_in='<a href="javascript:selLnk('
		+"'HE'"
		+')" onClick="return confmLogout()" onkeypress="return confmLogout()"'
		+' title="CFL Sign out">'
		+'<img src="../computersforlearning_files/pgmimg/sign_out_button.gif" alt="Sign out" border="0" align="top"></a>';
	} else if (scSignIn=="N") {
		//htmSign_in='<a href="javascript:openCflLog()" title="Sign in">'
		//+'<img src="../computersforlearning_files/pgmimg/sign_in_button.gif" alt="Sign in" border="0" align="top"></a>';
	} else {
		scSignIn=' ';
	}

	/* hp_Top_Nav sets the top, right, bottom margins. height is 22 inches */
	htmBanner='<div id="hp_Top_Nav">' 
	/* non_Languages sets the float property to left which moves following hyperlinks to left  e.g. "Home" */
	+'<div id="hp_bar">'
	/* flag_Top.jpg is top part of the flag image with 22 px height */
	+'<img src="../computersforlearning_files/pgmimg/cfl_flag_top.jpg" border="0" alt="Image of Flag" id="hp_Top_Flag">'
	+'<a href='
	+ pubHost
	+' onClick="return confmHome()" onkeypress="return confmHome()"'
	+' title="CFL Home">Home</a> | '
	+'<a href="mailto:computers.learning@gsa.gov">Contact Us</a> | '
	+'<a href=javascript:nwHP("hp_faq.htm") title="Frequent Questions">Frequent Questions</a>'
	+'</div>'  
	+'</div>'
	/* hp_Top_Nav sets the top, right, bottom margins. height is 83 inches */
	+'<div id="header">'
	/* hp_flag_Image sets the float property to left which moves flag.jpg to left */
	+'<div id="hp_Flag_Image"><img src="../computersforlearning_files/pgmimg/cfl_flag_left.jpg" alt="General Services Administration, Computers For Learning" border="0"></div>'
	/* right_Flag sets the float property to left which moves flag_Right.gif to right */
	+'<div id="right_Flag"><div align="right">'
	+htmSign_in
	+'<img src="../computersforlearning_files/pgmimg/cfl_flag_right.gif" border="0" alt="United States Flag"></a></div>'
	+'</div>'
	+'</div>'
	+'<div id="main_Audience">'
	document.write(htmBanner);
}

function htmlTabsHome()
{
var htmTabs="";
htmTabs='<div id="hp_hdr_bar">'
+'<table id="hp_hdr_bar"><tr>'
+'<td>&nbsp;</td>'
+'<td><a href=javascript:nwHP("hp_aboutprogram.htm")'
+' title="About the Program">About the Program</a>&nbsp;</td>'
+'<td><a href=javascript:nwHP("hp_fedPropertyMgrs.htm") title="Federal Property Managers">Federal Property Managers</a>&nbsp;</td>'
+'<td><a href=javascript:nwHP("hp_schooleducation.htm") title="Schools/Educational Nonprofits">Schools/Educational Nonprofits</a>&nbsp;</td>'
+'<td><a href=javascript:nwHP("hp_successstories.htm") title="Success Stories">Success Stories</a></td>'
+'</tr></table>'
+'</div>';
document.write(htmTabs);
}
var catAll='00000';
var catCPU='01001';
var catDesktop='01002';
var catLaptop='01003';
var catServer='01004';
var catKeyboard='02001';
var catModem='02002';
var catMonitor='02003';   
var catMouse='02004'; 
var catPrinter='02005';
var catScanner='02006'; 
var catDiskDrive='02007'; 
var catOpticalDrive='02008';
var catTapeDrive='02009';   
function hdrTabs()
{var htmTabs1="";
var curTabCat=document.forms[0].scCurTabCat.value.substring(0,5);
var selTabCat=document.forms[0].scSelTabCat.value.substring(0,5);
var cat00_000="",cat01_001="",cat01_002="",cat01_003="",cat01_004="", cat02_001="",cat02_002="",cat02_003="",cat02_004="",cat02_005="",cat02_006="",
cat02_007="",cat02_008="",cat02_009="";
var curId=' id=current';
if (curTabCat=="01001")
cat01_001=curId;
else
if (curTabCat=="01002")
cat01_002=curId;
else
if (curTabCat=="01003")
cat01_003=curId;
else
if (curTabCat=="01004")
cat01_004=curId;
else
if (curTabCat=="02001")
cat02_001=curId;
else
if (curTabCat=="02002")
cat02_002=curId;
else
if (curTabCat=="02003")
cat02_003=curId;
else
if (curTabCat=="02004")
cat02_004=curId;
else
if (curTabCat=="02005")
cat02_005=curId;
else
if (curTabCat=="02006")
cat02_006=curId;
else
if (curTabCat=="02007")
cat02_007=curId;
else
if (curTabCat=="02008")
cat02_008=curId;
else
if (curTabCat=="02009")
cat02_009=curId;
else
cat00_000=curId;

htmTabs1='<div id="tab">'
+'<ul>'
+'<li' + cat00_000 +'><a href=javascript:selLnk("'+ 'AI' + '")>All Items</a></li>'
+'<li' + cat01_001 +'><a href=javascript:selTabCat("'+catCPU+'")>CPUs</a></li>'
+'<li' + cat01_002 +'><a href=javascript:selTabCat("'+catDesktop+'")>Desktop Systems</a></li>'
+'<li' + cat01_003 +'><a href=javascript:selTabCat("'+catLaptop+'")>Laptops</a></li>'
+'<li' + cat01_004 +'><a href=javascript:selTabCat("'+catServer+'")>Servers</a></li>'
+'<li' + cat02_007 +'><a href=javascript:selTabCat("'+catDiskDrive+'")>Disk Drives</a></li>'
+'<li' + cat02_001 +'><a href=javascript:selTabCat("'+catKeyboard+'")>Keyboards</a></li>'
+'<li' + cat02_002 +'><a href=javascript:selTabCat("'+catModem+'")>Modems</a></li>'
+'<li' + cat02_003 +'><a href=javascript:selTabCat("'+catMonitor+'")>Monitors</a></li>'
+'<li' + cat02_004 +'><a href=javascript:selTabCat("'+catMouse+'")>Mouses</a></li>'
+'<li' + cat02_008 +'><a href=javascript:selTabCat("'+catOpticalDrive+'")>Optical Drives</a></li>'
+'<li' + cat02_005 +'><a href=javascript:selTabCat("'+catPrinter+'")>Printers</a></li>'
+'<li' + cat02_006 +'><a href=javascript:selTabCat("'+catScanner+'")>Scanners</a></li>'
+'<li' + cat02_009 +'><a href=javascript:selTabCat("'+catTapeDrive+'")>Tape Drives</a></li>'
+'</ul>';
document.write(htmTabs1);
}
	
function hdrSrchBar()
{
bldGSOptn();
gSName=gSName.replace(/\{+/g,'\&quot;');
if (gSName=="")
{
gSName="Search Entire Site";
}
var srchLn1="",srchLn2="",srchLn3="";
srchLn1='<table align="left" id=hp_hdr_bar border="1" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
+'marginheight="0" marginwidth="0" width="100%" summary="Table contains Search Options">'
+'<tr>'
+'<td><img src="../computersforlearning_files/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>';
srchLn2='<td nowrap width=40%><input id="scGSNameId" onclick="blankGSName(this)" onblur="uCGSName(this),trim(this)" name="scGSName" size="25%" maxlength=25 value="Search Entire Site">&nbsp;'
+'<label for="scGSOptn1Id"></label>'
+'<select name=scGSOptn1 id="scGSOptn1Id" size=1>'
+'<option value="1" selected>All Words</option>'
+'<option value="2">Any Word</option>'
+'<option value="3">Exact Phrase</option>'
+'</select>'
+'&nbsp;'
+'<input type="button" value="Search" name="Search" onClick="javascript:selLnk('
+"'GS'"
+')" onkeypress="selLnk('
+"'GS'"
+')"'
+' onSubmit="javascript:selLnk('
+"'GS'"
+')"'
+'>';
srchLn3='<td width=30%><img src="../computersforlearning_files/pgmimg/hp_spacer.gif" alt=""></td>';
//+'<td nowrap width=0%>&nbsp;</td>';

var srchLn3a='<td width=10%><a href="javascript:selLnk('
+"'UU'"
+')">Update User Profile</a></dt>';

var srchLn3b='<td width=10%><a href="javascript:selLnk('
+"'CP'"
+')">Change Password</a></dt>';

var srchLn3c='<td width=15%><img src="../computersforlearning_files/pgmimg/hp_spacer.gif" alt=""></td>';
//+'<td nowrap width=0%>&nbsp;</td>';

srchLn4='</tr></table>';
htmln = '</div>'
+'</div>'
+'<div id="main_Box">'
+'<div id="hp_Content">'
+srchLn1
+srchLn2
+stateLn
+srchLn3
+srchLn3a
+srchLn3b
//+srchLn3c
+srchLn4
+'</div>'				
document.write(htmln);
document.forms[0].scGSName.focus();
}

function ftrLn()
{
htmln10 = '</div><!-- end main_box -->'
+'<div id="bottom_Nav"><hr>'
+'<a href=javascript:nwHP("privacy")  title="Privacy and Security">Privacy and Security</a>'
+'</div>'
+'<div id="footer_content">'
+'<a href=javascript:nwHP("usa")> <img src="../computersforlearning_files/pgmimg/usagov_logo.jpg" border="0" alt="USA.gov is the U.S. government\u0027s official web portal to all federal, state and local government web resources and services."></a></div>';
htmln30='<div id="footer_content"><span class="footerWarn">This is a U.S. General Services Administration Federal Government computer system that is "FOR OFFICIAL USE ONLY." This system is subject to monitoring.<br> Individuals found performing unauthorized activities are subject to disciplinary action including criminal prosecution.</span></div>';
document.write(htmln10+htmln30);
}