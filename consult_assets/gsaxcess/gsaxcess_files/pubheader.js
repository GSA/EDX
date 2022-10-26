/* The HTM file Must contains the following CSS lines in the style tag or CSS file.
Refef FEDS.CSS file*/

/* The following code is to collect web site statistics as part of Digital Analytics Program (DAP) Universal Analytics (UA) - added on 2/25/2015*/
var ua_dap_script = document.createElement('script');
ua_dap_script.type = 'text/javascript';
ua_dap_script.id="_fed_an_ua_tag";
ua_dap_script.src = '/js/Universal-Federated-Analytics-Min.js?agency=GSA';
document.getElementsByTagName("head")[0].appendChild(ua_dap_script);
/* end of collect web site statistics as part of Digital Analytics Program (DAP) Universal Analytics (UA) */


  
var htmln="";
var htmln10="",htmln20="";
var newWindow;

function goBack(opt)
{
document.forms[0].scOption.value=opt;
selOpt();
}
function selOpt()
{
if (document.forms[0].scOption.value > "00")
document.forms[0].submit();
}
function selLnk(opt)
{if (opt=="GS" || opt=="IGS")
document.forms[0].scGSName.value=document.forms[0].scGSName.value.replace(/^\s+/, "");
if (opt=="CT")
{var confirmPrior=null;
winFeatures='toolbar=yes,titlebar=yes,locationbar=no,status=yes,scrollbars=yes,resizable=yes,alwaysRaised=yes';
confirmPrior=window.open('/htm/xcessConfirmPriority.htm','ConfirmPriority','width=400,height=150,top=160,left=200',"winFeatures");
if (!confirmPrior)
alert("We have detected that you are using popup blocking software, \n\n Please allow popup to show the Confirm Priority Situation");
}
else
{document.forms[0].SELLNK.value=opt;
//Added for ticket#243
var myEle = document.getElementById("AAC");
if (myEle != null)
    document.forms[0].AAC.disabled=false;
var myEle2 = document.getElementById("AB");
if (myEle2 != null)
    document.forms[0].AB.disabled=false;

document.forms[0].submit();
}
} // end fn selLnk()

function nw1(pgname)
{newWindow = window.open("/htm/"+pgname,"Help","");
}
function nwXcessFAQ()
{newWindow = window.open("/htm/XCESSFAQ.html","GSAXcessFAQ","");
}
function fasNW()
{newWindow = window.open("https://www.gsa.gov/portal/content/105080","FASGSA","");
}
function usaGovNW()
{newWindow = window.open("https://www.usa.gov","USAgov","");
}
function nwGSAAuc()
{newWindow = window.open("https://www.gsaauctions.gov","GSAAuctions","");}
function gsaNW()
{newWindow = window.open("https://www.gsa.gov","GSA","");
}
function supBrNW()
{newWindow = window.open("https://gsaauctions.gov/html/browsers.htm","SupBr","");
}
function confmHome() 
{if (confirm("Going Home, your current session will be closed \n \n       and you need to login again"))
return true;
else
return false;
}

function confmLogout() 
{if (confirm("Are you sure you want to Logout? Please confirm."))
return true;
else
return false;
}
var gSName='';
var gSOptn='';
var srchOptnLn="";

function bldGSOptn()
{var sO1,sO2,sO3=""; 
var sel='selected';
if (gSOptn == "2")
sO2=sel;
else
if (gSOptn == "3")
sO3=sel;
else
sO1=sel;
srchOptnLn='<label for="scGSOptnId"><img src="/pgmimg/hp_spacer.gif" alt=""></label><select name=scGSOptn ID=HB id="scGSOptnId" size=1>'
+'<option value="1"' + sO1 + ' >Exact Phrase</option>'
+'<option value="2"' + sO2 + ' >Any Word</option>'
+'<option value="3"' + sO3 + ' >All Words</option>'
+'</select>';
}
bldGSOptn();

var pubHost="";
if (window.location.host=="gsaxcess.gov")
pubHost="https://gsaxcess.gov";
else
pubHost="https://gsaxcesspractice.fas.gsa.gov";

function hdrFlag()
{htmln +='<table border="0" cellpadding="0" cellspacing="0" marginheight="0" marginwidth="0" topmargin="0" summary="Table Contains GSAXcess Banner, USA Flag">'
	+'<tr>'
	+'<td bgcolor="#990000" colspan="3"><img alt="" src="/pgmimg/hp_spacer.gif" width="1" height="3" border="0" alt=""></td>'
	+'</tr>'
	+'<tr>'
	+'<td width="100%"><img src="/pgmimg/hp_gsaxcess_logo.gif" height="67" alt="GSAXcess&#174; Logo" title="GSAXcess&reg; Logo" border="0"></td>' //font on image :Microsoft Sans Serif, type:Bold Italic, size:16
	+'<td><img src="/pgmimg/hp_flag1.jpg" width="241" height="67" alt="USA Flag" border="0"></td>'
	+'<td><img src="/pgmimg/hp_flag2.jpg" width="239" height="67" alt="USA Flag" border="0"></td>'
	+'</tr>'
	+'</table>';
	document.write(htmln);
}
function hdrBar1()
{htmln = '<table bgcolor="#003399" border="1" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+' marginheight="0" marginwidth="0" width=100% summary="Table contains User guides, FAQ, Program and Contact links">'
	+'<tr align="center" valign="middle">'
	+'<td align="center" width="20%" nowrap>'	
	+'<a id=HA title="DHS AAMS, USDA, EADS, IADS, GSAXcess&#174;, Report Property and VA AAMS User Guides"'
	+' href="javascript:nw1('
	+"'xcessuserguides.htm'"
	+')" onkeypress="nw1('
	+"'xcessuserguides.htm'"
	+')">User Guides</a><img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td align="center" valign="middle" width="20%"><a id=HA title="GSAXcess&#174; FAQ" href="javascript:nwXcessFAQ()" onkeypress="nwXcessFAQ()"'
	+'>FAQ</a><img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td align="center" valign="middle" width="20%"><a id=HA title="Program Links" href="javascript:nw1('
	+"'xcesspgmlinks.htm'"
	+')" onkeypress="nw1('
	+"'xcesspgmlinks.htm'"
	+')">Program Links</a><img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td align="center" valign="middle" nowrap width="20%"><a id=HA title="Contact Links" href="javascript:nw1('
	+"'xcesscontlinks.htm'"
	+')" onkeypress="nw1('
	+"'xcesscontlinks.htm'"
	+')">Contact Links</a><img src="/pgmimg/hp_spacer.gif" alt=""></td>'
    +'<td align="center" valign="middle" nowrap width="20%"><a id=HA title="GSAXcess&#174; HelpDesk" href="javascript:nw1('
	+"'xcesshelpdesk.htm'"
	+')" onkeypress="nw1('
	+"'xcesshelpdesk.htm'"
	+')">GSAXcess&#174; HelpDesk</a>'
	+'</td>'
	+'</tr>'
	+'</table>';
	document.write(htmln);
}
function hdrBar1NASA()
{htmln = '<table bgcolor="#003399" border="1" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+' marginheight="0" marginwidth="0" width=100% summary="Table contains User guides, FAQ, Program and Contact links">'
	+'<tr align="center" valign="middle">'
	+'<td align="center" width="20%" nowrap>'	
	+'<a id=HA title="NASA Historic Artifacts Prescreenin User Guide" href="javascript:nw1('
	+"'nasa/userguide/NASA_User_Guide.doc'"
	+')" onkeypress="nw1('
	+"'nasa/userguide/NASA_User_Guide.doc'"	
	+')">NASA User Guides</a><img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td align="center" valign="middle" width="20%"><a id=HA title="NASA Prescreening FAQ" href="javascript:nw1('
	+"'nasa/NASA_FAQ.doc'"
	+')" onkeypress="nw1('
	+"'nasa/NASA_FAQ.doc'"
	+')">NASA Prescreening FAQ</a><img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td align="center" valign="middle" width="20%"><a id=HA title="NASA Artifacts Definitions" href="javascript:nw1('
	+"'nasa/NASA_Artifacts_Definition.doc'"
	+')" onkeypress="nw1('
	+"'nasa/NASA_Artifacts_Definition.doc'"
	+')">NASA Artifacts Definitions</a><img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td align="center" valign="middle" nowrap width="20%"><a id=HA title="Contact Links" href="javascript:nw1('
	+"'xcesscontlinks.htm'"
	+')" onkeypress="nw1('
	+"'xcesscontlinks.htm'"
	+')">Contact Links</a><img src="/pgmimg/hp_spacer.gif" alt=""></td>'
    +'<td align="center" valign="middle" nowrap width="20%"><a id=HA title="GSAXcess&#174; HelpDesk" href="javascript:nw1('
	+"'xcesshelpdesk.htm'"
	+')" onkeypress="nw1('
	+"'xcesshelpdesk.htm'"
	+')">GSAXcess&#174; HelpDesk</a>'
	+'</td>'
	+'</tr>'
	+'</table>';
	document.write(htmln);
}
function hdrBar2()
{htmln ='<table bgcolor="#ffffff" border="0" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+' marginheight="0" marginwidth="0" width=95% align="center"'
	+' summary="Table contains AAMS, EADS, IADS, Report, GSAXcess Help links">'
	+'<tr align="justify" valign="middle">'
	+'<td align=center width="20%" nowrap><a class="HB" title="AAMS - DoVeterans Affairs, USDA and DHS"'
	+' href=javascript:selLnk("IM") onkeypress=selLnk("IM")>&#149; Agency Asset Management System (AAMS)&nbsp;</a>'
	+ '<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td align=center width="20%" nowrap><a class="HB" title="EADS - Department of Energy"'
	+' href=javascript:selLnk("IM") onkeypress=selLnk("IM")>&#149; Energy Asset Disposal System (EADS)&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td align=center width="20%" nowrap><a class="HB" title="IADS - Department of Interior"'
	+' href=javascript:selLnk("IM") onkeypress=selLnk("IM")>&#149; Interior Asset Disposal System (IADS)&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td align=center width="10%" nowrap><a class="HB" title="Report Property"'
	+' href=javascript:selLnk("RM") onkeypress=selLnk("IM")>&#149; Report Property &nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'	
	+'<td align=center width="10%" nowrap>'
	+'<a href="javascript:selLnk('
	+"'WL'"
	+')" onkeypress="selLnk('
	+"'WL'"
	+')"'
	+' title="Want Item List" class="HB">'
	+'&#149; Want List&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td nowrap width="10%"><a href="javascript:selLnk('
	+"'DS'"
	+')" onkeypress="selLnk('
	+"'DS'"
	+')"'
	+' title="Direct Select" class="HB">&#149; Direct Select&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt="">'
	+'</td>'
	+'<td nowrap width="10%"><a href="javascript:selLnk('
	+"'PT'"
	+')" onkeypress="selLnk('
	+"'PT'"
	+')"'
	+' title="CFL Post Transaction Module" class="HB">&#149; PTM&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt="">'
	+'</td>'
	+'</tr>'
	+'</table>';
	document.write(htmln);
}
function hdrBar2NASA()
{htmln ='<table bgcolor="#ffffff" border="0" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+' marginheight="0" marginwidth="0" width=95% align="center"'
	+' summary="Table contains AAMS, EADS, IADS, Report, GSAXcess Help links">'
	+'<tr align="justify" valign="middle">'
	+'<td>&nbsp;</td>'
	+'<img src="/pgmimg/hp_spacer.gif" alt="">'
	+'</td>'
	+'</tr>'
	+'</table>';
	document.write(htmln);
}
var htmBasic="",htmNASABasic="",htmAAMSStd="",htmNASAStd="",htmBStd="",htmBSASP="",htmDisa="",htmBNASA="", htmBFG="";
var htmApproveTO="</td>";
if (scPermAO=="Y")
htmApproveTO='</td><td nowrap><a href="javascript:selLnk('
	+"'XAT'"
	+')"'
	+' title="Approve your Transfer Orders" id=BTNBAR>'
	+' &nbsp;Approve TO&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>';	
htmBasic='<td align="right"><label for="scOptionId"><img src="/pgmimg/hp_spacer.gif" alt=""></label>'
	+'<select name="scOption" id="HD" id="scOptionId" onChange="selOpt()">'
	+'<option value="00" selected>Basic Search Options</option>'
	+'<option value="01" id=HDBLK>All Items by Category</option>'
	+'<option value="51" id=HDRED>All Unused Items by Category</option>'
	+'<option value="02" id=HDBLK>All Items by State</option>'
	+'<option value="52" id=HDRED>All Unused Items by State</option>'
	+'<option value="03" id=HDBLK>Newly Reported Items by Category</option>'
	+'<option value="53" id=HDRED>Newly Reported Unused Items by Category</option>'
	+'<option value="04" id=HDBLK>Newly Reported Items by State</option>'
	+'<option value="54" id=HDRED>Newly Reported Unused Items by State</option>'
	+'<option value="05" id=HDBLK>Closing Items by Category</option>'
	+'<option value="55" id=HDRED>Closing Unused Items by Category</option>'
	+'<option value="06" id=HDBLK>Closing Items by State</option>'
	+'<option value="56" id=HDRED>Closing Unused Items by State</option>'
	+'<option value="07" id=HDBLK>Overseas Items</option>';

if (scPermNA=="Y")
{htmBNASA='<option value="01" id=HDBLK>GSAXcess - All Items by Category</option>'
}	
htmNASABasic='<td align="right"><label for="scOptionId"><img src="/pgmimg/hp_spacer.gif" alt=""></label>'
	+'<select name="scOption" id="HD" id="scOptionId" onChange="selOpt()">'
	+'<option value="00" selected>Basic Search Options</option>'
	+ htmBNASA
	+'<option value="61" id=HDRED>NASA Prescreening - All Items by Category</option>'
	+'<option value="62" id=HDBLK>NASA Prescreening - Internal Screening Items</option>'
	+'<option value="63" id=HDRED>NASA Prescreening - External Screening Items</option>';
	
htmDisa='<option value="31" id=HDRED>Disaster Relief Items by Category</option>'
	+'<option value="35" id=HDBLK>Disaster Relief Items by State</option>';

if (scSASPFlag=="Y")
{htmBSASP='<option value="41" id=HDRED>All SASP Items by Category</option>'
	+'<option value="45" id=HDBLK>All SASP Items by State</option>';
}

if (scPermNA=="Y")
{htmBNASA='<option value="61" id=HDRED>NASA Prescreening - All Items</option>';
}

htmBFG='<option value="81" id=HDRED>Foreign Gift Items - All Items</option>';

htmBStd=htmBasic
	+ htmDisa
	+ htmBSASP
	+ htmBNASA
	+ htmBFG
	+'</select>'
	+'</td>';

htmAAMSStd=htmBasic
    +'</select>'
	+'</td>';
htmNASAStd=htmNASABasic
	+'</select>'
	+'</td>';
function hdrBar3()
{htmln = '<table bgcolor="#9f0c0c" border="1" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+'marginheight="0" marginwidth="0" width=100% summary="Table contains Global Search, Basic search Options">'
	+'<tr>'
	+'<td><img src="/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>'
	+'<td id=HC width=60%>&nbsp;</td>'
	+ htmBStd
	+'<td><img src="/pgmimg/hp_spacer.gif" width="2" height="1" alt=""></td>';
	document.write(htmln);
}
function hdrBar3A()
{htmln='</tr>'
	+'</table>';
	document.write(htmln);
}
function hdrBar3A1()
{bldGSOptn();
htmln = '<table bgcolor="#9f0c0c" border="1" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+'marginheight="0" marginwidth="0" width="100%" summary="Table contains Global Search, Basic search Options">'
	+'<tr>'
	+'<td><img src="/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>'
	+'<td width="60%" id="HC1" nowrap>'
	+'<label for="scGSNameId">&nbsp;&nbsp;Global Search&nbsp;</label>'
	+'<input id="scGSNameId" name="scGSName" size=25 maxlength=25 value="'
	+gSName
	+'" onblur="uC(this),trim(this)">'
	+ srchOptnLn
	+'&nbsp;<A title="Type Item Name and Click here to Search!" HREF="javascript:selLnk('
	+"'GS'"
	+')" onkeypress="selLnk('
	+"'GS'"
	+')" id=BTNG>&nbsp;Go!&nbsp;</A>&nbsp;&nbsp;'
//	+'</td>'
	+ htmApproveTO
	+'<td nowrap><img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+ htmBStd
	+'<td><img src="/pgmimg/hp_spacer.gif" width="2" height="1" alt=""></td>';
	document.write(htmln);
}
function hdrBar3B()
{
htmln ='<td nowrap><a href="javascript:selLnk('
	+"'CS'"
	+')"'
	+' title="Advanced Search - by AAC, Civilian Agency, DRMO, FSC or Item Name" id=BTNBAR>'
	+' &nbsp;Advanced Search&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td nowrap><a href="javascript:selLnk('
	+"'MU'"
	+')" onkeypress="selLnk('
	+"'MU'"
	+')"'
	+' title="GSAXcess&#174; Menu" id=BTNBAR>&nbsp;Menu&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td nowrap><a href='
	+ pubHost
	+' onClick="return confmHome()" onkeypress="return confmHome()"'
	+' title="GSAXcess&#174; Home" id=BTNBAR>&nbsp;Home&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td nowrap><a href="javascript:selLnk('
	+"'HE'"
	+')" onClick="return confmLogout()" onkeypress="return confmLogout()"'
	+' title="GSAXcess&#174; System Logout" id=BTNBAR>&nbsp;Logout&nbsp;</a></td>'
	+'<td><img src="/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>'
	+'</tr>'
	+'</table>';
	document.write(htmln);
}
//AAMS
function hdrBar3AAMS1()
{bldGSOptn();
htmln = '<table bgcolor="#9f0c0c" border="1" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+'marginheight="0" marginwidth="0" width="100%" summary="Table contains Global Search, Basic search Options">'
	+'<tr>'
	+'<td><img src="/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>'
	+'<td width="60%" id="HC1" nowrap>'
	+'<label for="scGSNameId">&nbsp;&nbsp;Global Search&nbsp;</label>'
	+'<input id="scGSNameId" name="scGSName" size=25 maxlength=25 value="'
	+gSName
	+'" onblur="uC(this),trim(this)">'
	+ srchOptnLn
	+'&nbsp;<A title="Type Item Name and Click here to Search!" HREF="javascript:selLnk('
	+"'IGS'"
	+')" onkeypress="selLnk('
	+"'IGS'"
	+')" id=BTNG>&nbsp;Go!&nbsp;</A>&nbsp;&nbsp;'
	+'</td>'
	+ htmAAMSStd
	+'<td><img src="/pgmimg/hp_spacer.gif" width="2" height="1" alt=""></td>';
	document.write(htmln);
}
function hdrBar3AAMS1A()
{htmln = '<table bgcolor="#9f0c0c" border="1" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+'marginheight="0" marginwidth="0" width="100%" summary="Table contains Global Search, Basic search Options">'
	+'<tr>'
	+'<td><img src="/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>'
	+'<td width="60%" id="HC1" nowrap>&nbsp;</td>'
	+ htmAAMSStd
	+'<td><img src="/pgmimg/hp_spacer.gif" width="2" height="1" alt=""></td>';
	document.write(htmln);
}
function hdrBar3AAMS2()
{
htmln ='<td nowrap><a href="javascript:selLnk('
	+"'ICS'"
	+')"'
	+' title="Advanced Search - by AAC, FSC, Internal Only, Date Reported, State, Region or Item Name" id=BTNBAR>'
	+' &nbsp;Advanced Search&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td nowrap><a href="javascript:selLnk('
	+"'MU'"
	+')" onkeypress="selLnk('
	+"'MU'"
	+')"'
	+' title="GSAXcess&#174; Menu" id=BTNBAR>&nbsp;Menu&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td nowrap><a href='
	+ pubHost
	+' onClick="return confmHome()" onkeypress="return confmHome()"'
	+' title="GSAXcess&#174; Home" id=BTNBAR>&nbsp;Home&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td nowrap><a href="javascript:selLnk('
	+"'HE'"
	+')" onClick="return confmLogout()" onkeypress="return confmLogout()"'
	+' title="GSAXcess&#174; System Logout" id=BTNBAR>&nbsp;Logout&nbsp;</a></td>'
	+'<td><img src="/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>'
	+'</tr>'
	+'</table>';
	document.write(htmln);
}
// end AAMS
//NASA Prescreening
function hdrBar3NASA1()
{bldGSOptn();
htmln = '<table bgcolor="#9f0c0c" border="1" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+'marginheight="0" marginwidth="0" width="100%" summary="Table contains Global Search, Basic search Options">'
	+'<tr>'
	+'<td><img src="/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>'
	+'<td width="60%" id="HC1" nowrap>'
	+'<label for="scGSNameId">&nbsp;&nbsp;Global Search&nbsp;</label>'
	+'<input id="scGSNameId" name="scGSName" size=25 maxlength=25 value="'
	+gSName
	+'" onblur="uC(this),trim(this)">'
	+ srchOptnLn
	+'&nbsp;<A title="Type Item Name and Click here to Search!" HREF="javascript:selLnk('
	+"'NGS'"
	+')" onkeypress="selLnk('
	+"'NGS'"
	+')" id=BTNG>&nbsp;Go!&nbsp;</A>&nbsp;&nbsp;'
	+'</td>'
	+ htmNASAStd
	+'<td><img src="/pgmimg/hp_spacer.gif" width="2" height="1" alt=""></td>';
	document.write(htmln);
}
function hdrBar3NASA1A()
{htmln = '<table bgcolor="#9f0c0c" border="1" bordercolor="#ffffff" cellpadding="0" cellspacing="0"'
	+'marginheight="0" marginwidth="0" width="100%" summary="Table contains Global Search, Basic search Options">'
	+'<tr>'
	+'<td><img src="/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>'
	+'<td width="60%" id="HC1" nowrap>&nbsp;</td>'
	+ htmNASAStd
	+'<td><img src="/pgmimg/hp_spacer.gif" width="2" height="1" alt=""></td>';
	document.write(htmln);
}
function hdrBar3NASA2()
{
htmln ='<td nowrap><a href="javascript:selLnk('
	+"'NMU'"
	+')" onkeypress="selLnk('
	+"'NMU'"
	+')"'
	+' title="GSAXcess&#174; Menu" id=BTNBAR>&nbsp;Menu&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td nowrap><a href='
	+ pubHost
	+ '/NASAWel.htm'
	+' onClick="return confmHome()" onkeypress="return confmHome()"'
	+' title="GSAXcess&#174; NASA Prescreening Home" id=BTNBAR>&nbsp;Home&nbsp;</a>'
	+'<img src="/pgmimg/hp_spacer.gif" alt=""></td>'
	+'<td nowrap><a href="javascript:selLnk('
	+"'NHE'"
	+')" onClick="return confmLogout()" onkeypress="return confmLogout()"'
	+' title="GSAXcess&#174; NASA Prescreening System Logout" id=BTNBAR>&nbsp;Logout&nbsp;</a></td>'
	+'<td><img src="/pgmimg/hp_spacer.gif" width="10" height="1" alt=""></td>'
	+'</tr>'
	+'</table>';
	document.write(htmln);
}
var prNASAAll='00';
var prNASAShuttle='01';
var prNASAApollo='02';
var prNASAMercury='03';
var prNASAHubble='04';
var prNASAGemini='05';
var prNASATile='06';
var prNASAOther='99';

function hdrNASATabs(curPr)
{var htmNASATabs1="";
var prNASA00="",prNASA01="",prNASA02="",prNASA03="",prNASA04="",prNASA05="",prNASA06="",prNASA99="";
var curId=' id=current';
if (curPr=="00" || curPr=="  ")
prNASA00=curId;
else
if (curPr=="01")
prNASA01=curId;
else
if (curPr=="02")
prNASA02=curId;
else
if (curPr=="03")
prNASA03=curId;
else
if (curPr=="04")
prNASA04=curId;
else
if (curPr=="05")
prNASA05=curId;
else
if (curPr=="06")
prNASA06=curId;
else
prNASA99=curId;

htmNASATabs1='<div id="slideDoor">'
+'<ul>'
+'<li' + prNASA00 +'><a href=javascript:selTabProgram("'+ prNASAAll + '")>All Items</a></li>'
+'<li' + prNASA01 +'><a href=javascript:selTabProgram("'+ prNASAShuttle +'")>Shuttle</a></li>'
+'<li' + prNASA02 +'><a href=javascript:selTabProgram("'+ prNASAApollo +'")>Apollo</a></li>'
+'<li' + prNASA03 +'><a href=javascript:selTabProgram("'+ prNASAMercury +'")>Mercury</a></li>'
+'<li' + prNASA04 +'><a href=javascript:selTabProgram("'+ prNASAHubble +'")>Hubble</a></li>'
+'<li' + prNASA05 +'><a href=javascript:selTabProgram("'+ prNASAGemini +'")>Gemini</a></li>'
//+'<li' + prNASA06 +'><a href=javascript:selTabProgram("'+ prNASATile +'")>Shuttle Tile</a></li>'
+'<li' + prNASA06 +'><a href=javascript:selTabProgram("'+ prNASATile +'")>Special Items</a></li>'
+'<li' + prNASA99 +'><a href=javascript:selTabProgram("'+ prNASAOther+'")>Other</a></li>'
+'</ul></div>';
document.write(htmNASATabs1);
}
//end NASA Prescreening
function ftrLn()
{htmln10 = '<center>[<a class="footer" title="Federal Acquisition Service (FAS) Home" href="javascript:fasNW()" onkeypress="fasNW()">FAS Home</a>]&nbsp;'
	+'[<a class="footer" title="GSAXcess&#174; Browser Troubleshooting Guide"'
	+'href="javascript:nw1('
	+"'btsguide.htm'"
	+')" onkeypress="nw1('
	+"'btsguide.htm'"
	+')">Browser Troubleshooting Guide</a>]&nbsp;'
	+'[<a class="footer" title="GSA Home" href="javascript:gsaNW()" onkeypress="gsaNW()">GSA Home</a>]&nbsp;'
	+'</center>';

var usaGTitle="USA.gov is the U.S. government's official web portal to all federal, state and local government web resources and services";
htmln20='<center><a class="footer" title="' 
	+ usaGTitle
	+ '" href="javascript:usaGovNW()">'
	+ '<img name="Click here to see picture" src="/pgmimg/hp_usagov_logo.jpg" width="130" height="36" alt="' 
	+ usaGTitle
	+ '" border="0">'
	+ '</a>&nbsp;'
	+'</center>';	
htmln30='<center><span class="footerWarn">This is a U.S. General Services Administration Federal Government computer system that is "FOR OFFICIAL USE ONLY." This system is subject to monitoring.<br> Individuals found performing unauthorized activities are subject to disciplinary action including criminal prosecution.</span></center>';
	document.write(htmln10+htmln20+htmln30);
}

function footerLine()
{var htmlFtrLn="";
 htmlFtrLn='<div class="container">'
  +'<p>'
    +'<a title="Federal Acquisition Service (FAS) Home" href="javascript:fasNW()" onkeypress="fasNW()" alt="FAS Home">FAS Home</a> | ' 
    +'<a title="GSAXcess&#174; Browser Troubleshooting Guide"'
    +'href="javascript:nw1('
    +"'btsguide.htm'"
    +')" onkeypress="nw1('
    +"'btsguide.htm'"
    +')" alt="Browser Troubleshooting Guide">Browser Troubleshooting Guide</a> |' 
    +'<a href="https://www.gsa.gov/" alt="GSA Home" title="GSA Home">GSA Home</a> | '
    +'<a href="https://www.usa.gov/" alt="USA.gov" title="USA.gov">USA.gov</a>'
  +'</p>'
  +'<p>'
    +'This is a U.S. General Services Administration Federal Government computer system that is "FOR OFFICIAL USE ONLY."'
    +'<br />'
    +'This system is subject to monitoring. Individuals found performing unauthorized activities are subject to disciplinary action including criminal prosecution.'
  +'</p>'		
			+'</div>';
 document.write(htmlFtrLn);
}