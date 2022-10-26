//This feds.js is used by all CFL programs except CFLLOG.
var winFeatures;
var winBrowser=navigator.appName;
// window.history.forward(1);
var isNN = (navigator.appName.indexOf("Netscape")!=-1);
var NSX = navigator.appName == "Netscape";
var IEX = navigator.appName == "Microsoft Internet Explorer";
var BV = parseInt(navigator.appVersion);

function hlpOpen(trnNumb)
{
var htmlName1="/help/htm/help";
var htmlName2=trnNumb.toString();
var htmlName3="F.htm";
var htmlName=htmlName1+htmlName2+htmlName3;
winFeatures='toolbar=yes,titlebar=yes,locationbar=no,status=yes,scrollbars=yes,resizable=yes';
window.open(htmlName,'Help',winFeatures);
}

// to uppercase
function uC(fld)
{
fld.value=fld.value.toUpperCase();
}
var imgSpace='<img src="../computersforlearning_files/pgmimg/hp_spacer.gif" width="4" alt="">';
/*trim first white spaces
/            open search
^            beginning of string
\s           find White Space, space, TAB and Carriage Returns
+            one or more
|            logical OR
\s           find White Space, space, TAB and Carriage Returns
$            at end of string
/            close search
g            global search
							*/
function trim(fld)
{
fld.value=fld.value.replace(/^\s+/, "");
}
// Removes leading whitespaces
function LTrim( value ) 
{
var re = /\s*((\S+\s*)*)/;
return value.replace(re, "$1");
}
// Removes ending whitespaces
function RTrim( value ) 
{
var re = /((\s*\S+)*)\s*/;
return value.replace(re, "$1");
}

// warning after 25 mins
var timer = null
//begin Session Timeout Scripts
var timOutWin=null;
function timeOut()
{winFeatures='toolbar=yes,titlebar=yes,locationbar=no,status=yes,scrollbars=yes,resizable=yes,alwaysRaised=yes';
if (scSignIn !="N")
timeOutWin=window.open('/htm/cfltimeout.htm','Timeout','width=550,height=200,top=160,left=200',"winFeatures");
if (scSignIn !="N")
{if (timeOutWin)
{window.focus();
timeOutWin.focus();
}
}
else
window.focus();
}
var timer=null;
var timerRetnHome=null;
timer = setTimeout("timeOut()",1500000);
// timer = setTimeout("timeOut()",120000); ** set time for 2 minutes for testing **
function saveData()
{if (scSignIn !="N")
{if (timeOutWin)
timeOutWin.close();
}
if (scSignIn=="Y")
{document.forms[0].scSelLink.value="RH";
document.forms[0].submit();
}
}
timerRetnHome = setTimeout("saveData()",1800000);
//timerRetnHome = setTimeout("saveData()",180000); ** set time for 3 minutes for testing **
// 1000 milliseconds = 1 sec (e.g. for 3 mins, 3*60*1000 = 180,000)
//end Session Timeout scripts
/*  Preventing Frame Busting and Click Jacking (UI Redressing) - This script resolves frame busting for old browsers. Note that new browsers will not allowed calling from IFrame.
This function will check if the user is calling your site from other site using IFrame and will get directed to the actual site which is calling in <iframe> */

function bust() 
{var urlRefer = (window.location != window.parent.location) ? document.referrer: document.location;
var envName = window.location.hostname;
var envPieces = envName.split(".");
switch(envPieces[0]) {
	case "computersforlearning":
  	if (!(/\/(computersforlearning.gov)\//.test(urlRefer)))
	{	 window.top.location="https://computersforlearning.gov"; 
	}
	break;
	case "cflpractice":
  	if (!(/\/(cflpractice.fas.gsa.gov)\//.test(urlRefer)))
	{//alert('busting you out, please wait...');
		 window.top.location="https://cflpractice.fas.gsa.gov/"; 
	}
	break;
	case "computersforlearning-dr":
  	if (!(/\/(computersforlearning-dr.fas.gsa.gov)\//.test(urlRefer)))
	{	 window.top.location="https://computersforlearning-dr.fas.gsa.gov"; 
	}
	break;
}
}
bust();
/* end of iframe bust code */
