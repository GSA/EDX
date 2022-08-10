// 12019 - mitigate session and logout
var winFeatures;
var winBrowser=navigator.appName;
var tbrowser;
var isNN = (navigator.appName.indexOf("Netscape")!=-1);
var defaultEmptyOK = false;
var reWhitespace     = /^\s+$/    // one or more whitespace characters

var https = "https://";
var host  = window.location.host;

var sys   = "";
if (host == "drivethrud.fas.gsa.gov")	// dev
	sys   = "/fmdtdsys/";
else									// test or prod
	sys   = "/fmdtsys/";

//alert(navigator.userAgent);
var browser = "";
if (navigator.userAgent.search("Chrome" ) >= 0)     browser = "Chrome";		else                            
if (navigator.userAgent.search("MSIE"   ) >= 0)     browser = "MSIE";     	else
if (navigator.userAgent.search(".NET"   ) >= 0)     browser = "MSIE";     	else
if (navigator.userAgent.search("Firefox") >= 0)     browser = "Firefox";  	else   	
if (navigator.userAgent.search("Opera"  ) >= 0)     browser = "Opera";   	else  
if (navigator.userAgent.search("Safari" ) >= 0)     browser = "Safari";   	  
//alert(browser);

var sysMsg = "Under Construction! \n\nThe Defensive Driving Course is not available at this time.\nThe current contract with the National Safety Council (NSC) for the Defensive Driving Course (DDC) and Professional Truck Driver (PTD) course has expired.\n\nBe on the lookout for the new course coming soon."; 
function openDDClogin() {		// Temp Defensive Driving Course login
	if (temptcode == 'DTHOME' || temptcode == 'DTLOGIN' || temptcode == 'DTNEWUSER' || temptcode == 'DTFORGOTPW' || temptcode == "DTTRAINING" || temptcode == "DTDRIVERSAFTY") 
	{}
	else
		if (dtu.isInEurope) {
			alert("NOT AVAILABLE FOR EUROPE!  "); 
			return;
		}
	else	{
			alert (sysMsg);
			return;
		}
	}


var ddcClicked = "";			// Defensive Driving Course link clicked

function openDDCloginTemp() {		// Defensive Driving Course login
	if (temptcode == 'DTHOME' || temptcode == 'DTLOGIN' || temptcode == 'DTNEWUSER' || temptcode == 'DTFORGOTPW' || temptcode == "DTTRAINING" || temptcode == "DTDRIVERSAFTY") 
	{}
	else
		if (dtu.isInEurope) {
			alert("NOT AVAILABLE FOR EUROPE!  "); 
			return;
		}

// Modal for DDC login			// Defensive Driving Course login
	var DDChtml =
		'<div id="DDCmodal" class="modal fade" data-backdrop="static" style="padding-top:60px">' + 
			'<div class="modal-dialog">' +
				'<div class="modal-content">' +
					'<div class="modal-header">Defensive Driving Course Login - United States' +
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="ddcloginclose" title="Close DDC Login Window">x</button>' +
					'</div>' +
					'<div class="modal-body">' +
						'<div class="form-group"><label id="DDCloginMsg" style="color:red"></label></div>' +
						'<div class="form-group">' +
							'<p><span><h5 style="color:#3478cd">' + 
								'<strong>This Defensive Driving Course is available to Federal employees of current GSA Fleet leasing customers only.</strong></h5></span></p>' + 
										
						'</div>' +						
						'<div class="form-group">' +        
							'<label for="scDDCtagno" class="control-label">Vehicle Tag Number:</label>' +
							'<input type="text" class="form-control" id="scDDCtagno" title="Vehicle Tag Number" placeholder="Vehicle Tag Number in GXX-XXXXX format" ' + 
								'name="scDDCtagno" $replace-value="SC-DDC-TAGNO" onBlur="this.value = this.value.toUpperCase();">' +
						'</div>' +
						'<div class="form-group">' +
							'<label for="scDDCemail" class="control-label">Email Address:</label>' +
							'<input type="text" class="form-control" id="scDDCemail" title="Email Address" placeholder="Email Address" name="scDDCemail" ' + 
								'value="" autocomplete="off" onKeyPress="checkEnterDDC(this)" onBlur="this.value = this.value.toUpperCase();">' +
//							'<div class="form-group"><p><span class="text-danger"><strong>Note: Password is case sensitive. </strong></span></p>' + 
						'</div>' +
						'<div id="DDCcheckboxDiv" class="checkbox" style="padding-top:3px">' + 
							'<label for="scDDCcheckbox" title="checkbox">' +
								'<input type="checkbox" name="scDDCcheckbox" id="scDDCcheckbox">' + 
								'<strong>Please select the box to certify that you are authorized to drive a GSA Fleet leased vehicle.</strong></label></div>' +
								'<p><span class="text-danger"><strong>Note: Pop-up blocker must be disabled in order to take this course.</strong></span></p>' + 				
						'<div class="form-group" style="text-align:center"><button type="button" class="btn btn-dt" title="Log in" ' + 
							'onClick="submitDDClogin();">LOG IN</button></div>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
	// End of Modal for DDC login 

	$("body").append(DDChtml);
	if (browser == "MSIE")	$("#DDCcheckboxDiv").css("padding-top","4px");
    $('#DDCmodal').modal('show');
	$("#DDCmodal").on('shown.bs.modal', function() { $("#scDDCtagno").focus() }); 
//	$("#ddcrs, #ddcrs2").attr("href","#DDCmodal").attr("data-toggle","modal");		// ddcrs is used in blue bar menu; ddcrs2 is used in Driver Safety & Training pages.
	
	if (ddcClicked == "") {		
		$("#ddcrs").click();	// to avoid twice click the first time; ddcrs2 is fine.	
		ddcClicked = "Y";
	}

//	var left  = ($(window).width ()/2) - (700/2),
//		top   = 80;
////    top   = ($(window).height()/2) - (400/2) - 10,
//    	popup = window.open ("/html/dsample.htm", "popup", "width=700, height=400, top=" + top + ", left=" + left);

////var winFeatures = "scrollbars=yes, resizable=yes, width=700, height=400, left=300, top=200";
////window.open('/html/dsample.htm', '_blank', winFeatures); 									
}

function checkEnterDDC(e) {
	if (event.keyCode == 13)	// 'Enter key' was pressed 
		submitDDClogin();
}

function submitDDClogin() {
	if ($("#scDDCtagno").val() <= " ") { 
		$("#DDCloginMsg").hide().fadeIn(2000).text("Vehicle Tag Number is required.");
		$("#scDDCtagno").focus();
		return false;		
	}
	
	if ($("#scDDCtagno").val().substr(0,[1]) != "G"){
		$("#DDCloginMsg").hide().fadeIn(2000).text("Vehicle Tag Number must begin with the letter G.");
		$("#scDDCtagno").focus();
		return false; }

	if ($("#scDDCtagno").val().substr(3,[1]) != "-"){
		$("#DDCloginMsg").hide().fadeIn(2000).text("Vehicle Tag Number must be in GXX-XXXXX format.");
		$("#scDDCtagno").focus();
		return false; }

	if ($("#scDDCtagno").val().length != 9){
		$("#DDCloginMsg").hide().fadeIn(2000).text("Vehicle Tag Number must be in GXX-XXXXX format.");
		$("#scDDCtagno").focus();
		return false; }

	if ($("#scDDCemail").val() <= " ") { 
		$("#DDCloginMsg").hide().fadeIn(2000).text("Email Address is required.");
		$("#scDDCemail").focus();
		return false;		
	}
	else {
		var emailObj = document.getElementById("scDDCemail");
		if ( !chkEmail(emailObj) )
			return false;
	}
				 
	if ($("#scDDCcheckbox").is(":checked")) {}
	else {
		$("#DDCloginMsg").hide().fadeIn(2000).text("Please certify that you are authorized to drive a GSA Fleet leased vehicle.");
		$("#scDDCcheckbox").focus();
		return false;		
	}
	// Pass parameters to DTHOME then DTHOME will pass param to DTLOGIN.  DTLOGIN validates then creates URL.  DTLOGIN.htm opens the DDC url.
	// Doesn't work if directly passed to DTLOGIN
	var homeUrl = https + host + sys + "DTHOME?action=ddcLogin&scDDCtagno=" + $("#scDDCtagno").val() + "&scDDCemail=" + $("#scDDCemail").val();
	if (temptcode == "DTLOGIN" && browser == "Chrome")
		window.open(homeUrl, '_self');		// have to do this since DTLOGIN.htm doesn't show the slideshow in Chrome after closing DDC page
	else
		window.open(homeUrl, '_blank');
	$("#ddcloginclose").click();
//sample only; modify DTHOME and DTLOGIN
//	alert("You will be redirected to a TEST URL only.");
//	window.open('http://www.safetyserve.com/gsafleet/?region=11&agencyCode=097&agency=Office%20of%20the%20Secretary%20&email=' + $("#scDDCemail").val(), '_blank');
}

function addHyphenCust(field,e) {
	var val=field.value;
	var valHyphen=val;
	var len=val.length;
	
	val= val.replace(/-/g,"");

	var kCode;
	if (!e) var e = window.event;
		if (e.keyCode) 
			kCode = e.keyCode;
		else 
		if (e.which) 
			kCode = e.which;
	
	if (kCode != 8 && kCode != 37) {
		valHyphen="";
		for(i=0;i<val.length; i++) {
			valHyphen+=val[i];
			if (i==1 || i==3 || i==5 || i==11)
				valHyphen+="-";
		}
	}
	
	field.value=valHyphen;
} //end fn addHyphenCust()

function openWindow(url) {
	// alert("A new window will open.  Please click OK.  \n\n"); // Commented out by BP on 5/19/2016 (Requested by Chris)
	winFeatures='toolbar=yes, titlebar=yes, locationbar=yes, status=yes, scrollbars=yes, resizable=yes, width=1040, height=700, top=0, left=100';
	window.open(url, '_blank', winFeatures);
}

function openDFASMsg() {
	winFeatures='toolbar=no,titlebar=no,locationbar=no,status=no,scrollbars=yes,resizable=yes,width=600, height=300,top=150,left=100';
	window.open('/news/dfaspopup.htm','_blank',winFeatures);
}

//function openWebBill() {
//	winFeatures='toolbar=no,titlebar=yes,locationbar=no,status=yes,scrollbars=no,resizable=yes,width=820,height=350';
//	window.open('/html/DTVCSSWEBBILL.htm','_blank',winFeatures);
//}

/*function openVideoLinks() {
	winFeatures='toolbar=no,titlebar=yes,locationbar=no,status=yes,scrollbars=yes,resizable=yes,width=830,height=650';
	window.open('/html/FDT9001Evideolinks.HTM','_blank',winFeatures);
} */

function openFMC() {
	winFeatures='toolbar=yes,titlebar=yes,locationbar=yes,status=yes,scrollbars=yes,resizable=yes';
	window.open('http://www.gsa.gov/portal/content/194821','_blank','');
}

//function openUserGuide() {
//	winFeatures='toolbar=yes,titlebar=yes,locationbar=yes,status=yes,scrollbars=yes,resizable=yes';
//	window.open('http://www.gsa.gov/portal/content/174285','_blank','');
//}

function openFedVehStd() {
	winFeatures='toolbar=yes,titlebar=yes,locationbar=yes,status=yes,scrollbars=yes,resizable=yes';
	window.open('https://vehiclestd.fas.gsa.gov');
//	window.open('http://apps.fas.gsa.gov/vehiclestandards/ ');
}

function openCamInstruct() {
	winFeatures='toolbar=yes,titlebar=yes,locationbar=yes,status=yes,scrollbars=yes,resizable=yes';
//	window.open('http://www.gsa.gov/fleetdrivethru/caminstructions/ ');
//  window.open ( '/help/SampleHelp.htm','_blank',winFeatures);
//	window.open ( '/help/CAMInstructions.pptx');
//	window.open ( 'http://gsafas.adobeconnect.com/p56huno8umi/ ');
//	window.open ( 'http://www.youtube.com/watch?v=UwjSAgme7UI');	
//  window.open ( 'http://www.youtube.com/user/GSADesktopWorkshop');
//  window.open ( 'https://www.youtube.com/playlist?list=PLvdwyPgXnxxU-g9PiCHSIxI7cC9y1S8Cu');  
//  window.open ( 'https://www.youtube.com/watch?v=sLqlsUDYQbQ');  chgd 11/21
//	window.open ( 'https://youtu.be/397bJpZTqnI');
        window.open ( 'https://www.youtube.com/watch?v=6BxThcRogV8');
}

function openFYRates() {
	winFeatures='toolbar=yes,titlebar=yes,locationbar=yes,status=yes,scrollbars=yes,resizable=yes';
//	window.open('http://www.gsa.gov/portal/content/104468','_blank','');
	window.open('https://www.gsa.gov/buying-selling/products-services/transportation-logistics-services/vehicle-leasing/vehicle-rates','_blank','');
//	window.open ( '/help/RATEBULLETIN.xlsx');
}

function openAFVGuide() {
	winFeatures='toolbar=yes,titlebar=yes,locationbar=yes,status=yes,scrollbars=yes,resizable=yes';
//	window.open('http://www.gsa.gov/portal/content/104211','_blank','');
	window.open('https://www.gsa.gov/buying-selling/products-services/transportation-logistics-services/vehicle-leasing/alternative-fuel-vehicles-technology/alternative-fuel-vehicle-afv-guides-and-helpful-links','_blank','');
//	window.open ( '/help/AFVLEASINGGUIDE.xlsx');
//	window.open ( '/help/AFVLEASINGGUIDE.xlsm');
//	window.open ( '/help/AFVLEASINGGUIDE.zip');
}
 
function openAgencyGuidance(elem) {
	if (dtu.isGSAUser && elem == "")
		elem = 47;
	var vOpenAgy = "OPEN " + elem;
	FormSubmit(vOpenAgy);
// 	var vAgyGuid = "/help/Agency " + elem + " Guidance.docx";
// 	winFeatures='toolbar=yes,titlebar=yes,locationbar=yes,status=yes,scrollbars=yes,resizable=yes';
// 	window.open (vAgyGuid);
}

function openFDT() {
	winFeatures='toolbar=yes,titlebar=yes,locationbar=yes,status=yes,scrollbars=yes,resizable=yes';
	window.open('http://www.gsa.gov/fleetdrivethru','_blank','');
}

function openPoc() {
	winFeatures='toolbar=no,titlebar=no,locationbar=no,status=no,scrollbars=yes,resizable=yes,width=500, height=200,top=215,left=120';
	window.open('/help/dfasPoc.htm','_blank',winFeatures);
}

//function openFSR() {
//	winFeatures='toolbar=no,titlebar=no,locationbar=no,status=no,scrollbars=yes,resizable=yes,width=500, height=200,top=215,left=120';
//	window.open('/html/fsrhelp.htm','_blank',winFeatures);
//}  

function openCDDUpld() {
	var sUSEurope="U";
	if (dtu.isInEurope)
	    sUSEurope="E";

//	var sID = document.forms[0].SESSIONID.value; 	

	var sFileType="CDDFLUPLD"+sUSEurope;

//	var sIP = document.forms[0].scIPAddress.value;
//	var sCustID = document.forms[0].fsrCust.value;

//	if (host=="drivethru.gsa.gov")
//		var act = "https://gsaupload.fas.gsa.gov/wFleetDTCDDupld/?sid=";		        //prod
//	else
//	if (host=="drivethrud.fas.gsa.gov")							        //dev
//		var act = "https://gsauploadb.fas.gsa.gov/wFleetDTCDDupld/?sid=";
//	else
//	if (host=="drivethrub.gsa.gov")								        //test
//		var act = "https://gsauploadb.fas.gsa.gov/wFleetDTCDDupld/?sid="; 
//	else
//	if (host=="drivethru-dr.gsa.gov" || host=="drivethru-dr.fas.gsa.gov")	//20120103 Selva	//prod-dr (disaster recovery)
//		var act = "https://gsaupload-dr.fas.gsa.gov/wFleetDTCDDupld/?sid=";

	if (host=="drivethru.gsa.gov")
		var act = "https://gsaupload.fas.gsa.gov/wFleetDTCDDupld/";		                //prod
	else
	if (host=="drivethrud.fas.gsa.gov")							        //dev
		var act = "https://gsauploadb.fas.gsa.gov/wFleetDTCDDupld/";
	else
	if (host=="drivethrub.gsa.gov")								        //test
		var act = "https://gsauploadb.fas.gsa.gov/wFleetDTCDDupld/"; 
	else
	if (host=="drivethru-dr.gsa.gov" || host=="drivethru-dr.fas.gsa.gov")	//20120103 Selva	//prod-dr (disaster recovery)
		var act = "https://gsaupload-dr.fas.gsa.gov/wFleetDTCDDupld/";

	//var winParam = act + '"' + sID + '"' + "," +sIP + "," + sCustID + "," + sFileType;  
	//var winParam = act + sID + "," +sIP + "," + sCustID + "," + sFileType;

   	var winParam = act;
	winFeatures='dependent=yes,alwaysRaised=yes,toolbar=yes,titlebar=yes,locationbar=yes,status=yes,resizable=yes,width=1000,height=1000,top=100,left=300,scrollbars=yes';
	window.open(winParam,"wFleetDTCDDupld",winFeatures);
}

function openVideo(fileName) {
	var videoFile=" ";

//	if (fileName=="Full")			videoFile="/VIDEO/final.htm";			else
//	if (fileName=="Overview")		videoFile="/VIDEO/Overview.htm";		else
//	if (fileName=="AMC")			videoFile="/VIDEO/AMC.htm";				else
//	if (fileName=="ServicesCard")	videoFile="/VIDEO/ServicesCard.htm";	else
//	if (fileName=="DriveThru")		videoFile="/VIDEO/DriveThru.htm";		else
//	if (fileName=="Solutions")		videoFile="/VIDEO/Solutions.htm";		else
//	if (fileName=="findFSR")		videoFile="/VIDEO/findFSR.htm";			else
//	if (fileName=="MCC")			videoFile="/VIDEO/MCC.htm";

	if (fileName=="Full")				videoFile="/TRAINING/VEHICLE-OPERATOR-VIDEOS/Full Vehicle Orientation.mp4";				else
	if (fileName=="Overview")			videoFile="/TRAINING/VEHICLE-OPERATOR-VIDEOS/1-Overview.mp4";							else
	if (fileName=="DayToDay")			videoFile="/TRAINING/VEHICLE-OPERATOR-VIDEOS/2-Day to Day.mp4";							else
	if (fileName=="FleetServicesCard")	videoFile="/TRAINING/VEHICLE-OPERATOR-VIDEOS/3-Fleet Services Card.mp4";				else
	if (fileName=="FleetDrivethru")		videoFile="/TRAINING/VEHICLE-OPERATOR-VIDEOS/4-Fleet Drive Thru.mp4";					else
	if (fileName=="MCC-AMC")			videoFile="/TRAINING/VEHICLE-OPERATOR-VIDEOS/5-Maintenance & Accident Management.mp4";	else
	if (fileName=="STR")				videoFile="/TRAINING/VEHICLE-OPERATOR-VIDEOS/6-Short Term Rental.mp4";					

	videoFile  = https + temphost + videoFile;			// temphost is from DTTRAINING.htm
//	winFeatures='toolbar=No,titlebar=No,locationbar=no,status=yes,scrollbars=yes,resizable=yes,width=500, height=400';
	winFeatures='toolbar=No,titlebar=No,locationbar=no,status=yes,scrollbars=yes,resizable=yes,width=900, height=800';
	window.open(videoFile,'_blank',winFeatures);
}
	
function open508Video(fileName) {
	var video508File=" ";
	if (fileName=="Full")			video508File="/VIDEO/Flash-Video/fleetcomplete/fleetcomplete.html";		else
	if (fileName=="Overview")		video508File="/VIDEO/Flash-Video/overview/overview.html";				else
	if (fileName=="AMC")			video508File="/VIDEO/Flash-Video/amc/amc.html";							else
	if (fileName=="ServicesCard")	video508File="/VIDEO/Flash-Video/servicescard/servicescard.html";		else
	if (fileName=="DriveThru")		video508File="/VIDEO/Flash-Video/drivethru/drivethru.html";				else
	if (fileName=="Solutions")		video508File="/VIDEO/Flash-Video/solutions/solutions.html";				else
	if (fileName=="findFSR")		video508File="/VIDEO/Flash-Video/findfsr/findfsr.html";					else
	if (fileName=="MCC")			video508File="/VIDEO/Flash-Video/mcc/mcc.html";
	
	video508File = https + temphost + video508File;		// temphost is from DTTRAINING.htm
	winFeatures='toolbar=No,titlebar=No,locationbar=no,status=yes,scrollbars=yes,resizable=yes,width=770, height=600';
	window.open(video508File,'_blank',winFeatures);
}

function openDFASHelp(hlpFile) {
	var fileName=" ";
	if (hlpFile=="FDT9070")		fileName="/help/fdt9070Hlp.htm";	else
	if (hlpFile=="FDT9090")		fileName="/help/fdt9090Hlp.htm";
	
	winFeatures='toolbar=No,titlebar=No,locationbar=no,status=yes,scrollbars=yes,resizable=yes,width=800, height=600';
	window.open(fileName,'_blank',winFeatures);
}

function chkMailOpt(frm,i,j) {
	if (isNN) {
		sel=frm.reminder494.options[1].selected;
		if (sel)
			document.forms[0].elements[j].focus();
	}
	else {
		var opt  = document.forms[0].elements[i].value;
		if (opt == 'N')
			document.forms[0].elements[j].focus();
	}
}

/* -------    validate  9050  ----------  */
function GOACT(action) {
	document.forms[0].scAction.value=action;
	document.forms[0].scRadioFlag.value="Y";
}

function submit9050() {	
	var tf="true";
	var selObj = document.forms[0].scRadioFlag;
	var action = document.forms[0].scAction.value;

/*	if ( selObj.value == "Z")
	{	document.forms[0].scAction.value="FDT9070";
	    action = document.forms[0].scAction.value;
		document.forms[0].scRadioFlag.value="Y";
	} */

	if (document.forms[0].radiobutton[0].checked ||
	    document.forms[0].radiobutton[1].checked ||
	    document.forms[0].radiobutton[2].checked ||
	    document.forms[0].radiobutton[3].checked) 
		{
	    	document.forms[0].scRadioFlag.value="Y";
		}

	if (selObj.value != "Y") {	
		tf="false";
		alert ("Please select One of the Options");
	}

	if (tf == "true")
		FormSubmit(action);
}

/* -------    validate  9080  ----------  */

function tagSel2(agcl,tag) {   
	document.forms[0].hdAgencyCl.value=agcl;
   	document.forms[0].hdTag.value=tag;
   	document.forms[0].scAction.value="FDT9091";
   	var action = document.forms[0].scAction.value;
   	go(action);
}

/*   -----   new js start -------------- */

function go(action) {	
	if (action.substr(0,[5]) == "DTCAM") {
		if (dtu.CamDisable) {
			alert("*** DISABLED FOR NOW ***");
			return;
		}
	}

	if (action == "DTHOME/?session=expired")
	   location.href= https + host + sys + action;
	else
	if (action == "DTHOME" || action == "DTLOGIN")
		location.href = https + host;
	else {
		document.forms[0].scAction.value = action;		// will work if you have tags <form> </form> in your html
	    document.forms[0].action = sys + temptcode;		// see dtmainmenu.htm for sample <form> </form> tag.
	    document.forms[0].submit();						//
	}
}

function goHDR(action) {								// for pageheader.js & pageheadernologout.js header links (blue bar menu)
	document.forms[0].scAction.value = action;			// will work if you have tags <form> </form> in your html
	document.forms[0].action = sys + "DTLOGIN";			// see dtmainmenu.htm for sample <form> </form> tag.
	document.forms[0].submit();							//
}

function goMM(action) {									// for pageheader.js & pageheadernologout.js header links (blue bar menu)
	var df = document.forms[0]; 

	if (temptcode == "DTMASTERUSER" || temptcode == "DTUSERPROFILE")									
		df.scAddCust.value = "";						// to avoid parse-post error due to > 80 characters textarea field.
	else
	if (temptcode == "DTBULKUPLM"   || temptcode == "DTCDDUPL")									
		df.scClob.value = "";							// to avoid parse-post error due to > 80 characters textarea field.
	
	df.scAction.value = action;							// will work if you have tags <form> </form> in your html
	df.action = sys + "DTMAINMENU";						// see dtmainmenu.htm for sample <form> </form> tag.

	if (action.substr(0,[5]) == "DTCAM") {
		if (dtu.CamDisable) {
			alert("*** DISABLED FOR NOW ***");
			return;
		}
	}

	if (action == "openCDDUpld") {							// CDD Upload Tool
		var url = https + host + sys + "DTMAINMENU?SESSIONID=" + df.SESSIONID.value + "&WEBPCMTRANSID=" + df.WEBPCMTRANSID.value + "&scAction=" + action; 
		winFeatures = "scrollbars=no, resizable=no, width=100px, height=1%, left=10000, top=10000";
		window.open(url, "_blank", winFeatures);			// DTMAINMENU & DTMAINMENU.htm will be the one to open the window.
	}
	else
	if (action == "openFTP") {							// FTP Monthly Mileage Upload Tool
		var url = https + host + sys + "DTMAINMENU?SESSIONID=" + df.SESSIONID.value + "&WEBPCMTRANSID=" + df.WEBPCMTRANSID.value + "&scAction=" + action; 
		winFeatures = "scrollbars=no, resizable=no, width=100px, height=1%, left=10000, top=10000";
		window.open(url, "_blank", winFeatures);					// DTMAINMENU & DTMAINMENU.htm will be the one to open the FTP window.
	}
	else {  
		df.submit();
	}
}

function FormSubmit(action) {										
	if (action == "DTHOME" || action == "DTLOGIN")
		location.href = https + host;
	else {   
		document.forms[0].scAction.value = action;
		document.forms[0].action = sys + temptcode;
		document.forms[0].submit();
	}
	return true;
}

var reEmail = /^.+\@.+\..+$/;
function chkEmail (fieldObject) {
     s = fieldObject.value;
     myResult = reEmail.test(s);
     if ( !myResult ) {
		 fieldObject.focus();
		 var invEmail = "Invalid Email Address: \n" + s; 
		 if (fieldObject.id == "scDDCemail")			// Defensive Driving Course email address 
		 	$("#DDCloginMsg").hide().fadeIn(2000).text(invEmail);
		 else
	     	alert (invEmail);
			
	     return false;
     }
     return true;
}  //end of function chkEmail()

function valDigit(z,str,field,Obj) {
   	var valid="0123456789";
   	for (var j = 0; j < z; j++) {
      	var ch = str.substring(j, j + 1);
	  	if (valid.indexOf(ch) == "-1") {
		 	if (temptcode == "DTADHOCRPT")
				errmsg = field + " accepts only digits '0-9'.";
			else
				alert(" \n Customer " + field + " only accepts digits '0-9' \n ");
         	Obj.select();
         	Obj.focus();
         	return false;
      	}
   	}
	return true;
}

function valNumb(z,obj,str,name1) {
   	var valid="0123456789,"
   	for (var j = 0; j < z; j++) {
      	var ch = str.substring(j, j + 1);
	  	if ( valid.indexOf(ch) == "-1") {
		 	alert( name1 + "\n\n The field only accepts digits '0-9 " );
		 	obj.select();
         	obj.focus();
         	return false;
      	}
   	}
	return true;
}

function valAlphab(z,obj,str,name1) {
   	var valid="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "
   	for (var j = 0; j < z; j++) {
   		var ch = str.substring(j, j + 1);
		if ( valid.indexOf(ch) == "-1") {
		 	alert( name1 + "\n\n The field only accepts digits 'A-Z,0-9 & SPACES " );
         	obj.select();
         	obj.focus();
         	return false;
   		}
   	}
	return true;
}

function valAlpha(z,obj,str,name1) {
   	for (var j = 0; j < z; j++) {
      	var ch = str.substring(j, j + 1);
	  	if (ch != "") {
      		if ( (ch < "0" || "9" < ch ) && (ch < "A" || ch > "Z" ) ) {
         		alert(" "+ name1 + "\n\n This field Accepts digits \n\n '0-9 and A-Z ' only .\n\n " );
         		obj.select();
         		obj.focus();
         		return false;
         	}
	  	}
   	}
 	return true;
}

function trimbdZeros() {
	var len = document.forms[0].length;
	for (var i=0; i < len; i++) {
		if  ( document.forms[0].elements[i].type == "text")
			removeLeadBlanks(i);
	}
}

function removeLeadBlanks(ele) {
	var editedVal="";
	var len = document.forms[0].elements[ele].value.length;
	var val = document.forms[0].elements[ele].value;
	var j = 0;
	for (var i=0; i<len; i++) {
		var ch = val.substring(i,i+1);
		if ( ch > " " ) {
		    editedVal=val.substring(j,len);
			break;
		}
		j++;
	}
	document.forms[0].elements[ele].value=editedVal;
}

// Check whether string s is empty.
function isEmpty(s) {
  	return ( (s == null) || (s.length == 0) || reWhitespace.test(s) );
}

function toUCase(ele) {
	ele.value=ele.value.toUpperCase();
}

function autoTab(input,len, e) {
	var keyCode = (isNN) ? e.which : e.keyCode;
	var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
	if (input.value.length >= len && !containsElement(filter,keyCode)) {
		input.value = input.value.slice(0, len);
		input.form[(getIndex(input)+1) % input.form.length].focus();
	}

	function containsElement(arr, ele) {
		var found = false, index = 0;
		while(!found && index < arr.length)
			if(arr[index] == ele)
				found = true;
			else
				index++;
		return found;
	} //end of function containsElement()

	function findIndex(input) {
		var index = -1, i = 0, found = false;
		while (i < input.form.length && index == -1)
			if (input.form[i] == input)
				index = i;
			else i++;
				return index;
	}

	function getIndex(input) {
		var index = -1, i = 0, found = false;
		while (i < input.form.length && index == -1)
		if (input.form[i] == input)
			index = i;
		else i++;
			return index;
	} //end of function getIndex()

	return true;
} //end of function autoTab

function textCounter(field, maxlimit) {
    if (field.value.length > maxlimit) { 	// if too long...trim it! 
        alert ("Text cannot exceed the maximum limit of " + maxlimit + " characters");
	    field.value = field.value.substring(0, maxlimit);
	}
}

function checkQuote(fieldname, inField) {
	var inVal    = inField.value;
	var len      = inVal.length;
	var validVal = "`1234567890-=~!@#$%^&*()_+qwertyuiop[]QWERTYUIOP{}|asdfghjkl;ASDFGHJKL:zxcvbnm,./ZXCVBNM<>? ";  
	// invalid values are: apostrophe, quote, backslash, enter key
	var token    = "";
	
	if (len > 0) {
		for ( var i=0; i < len; i++) {
			token = inVal.substring(i,i+1);
			if (validVal.indexOf(token) == "-1") {
				if (temptcode == "DTADHOCRPT")
					errmsg = fieldname + " : " + "Invalid character ==> " + token + "   Note: enter or return key is also invalid. ";
				else
				  	alert (fieldname + " : " + "Invalid character ==> " + token + "   Note: enter or return key is also invalid.  ");
				inField.focus ();
				inField.select();
				return false;
			}
		}
	}
	return true;
}

function dateChange(fieldname, datefield) {
	if ( cal_prs_date2(datefield.value) == undefined )
	{									
        datefield.focus ();
		datefield.select();
	}
}

//function openFSR() {
//	var Cust  = document.forms[0].fsrCust.value;
//	var Name  = document.forms[0].fsrName.value;
//	var Phone = document.forms[0].fsrPhone.value;
//	var Email = document.forms[0].fsrEmail.value;
//	var PhExt = document.forms[0].fsrPhext.value;
//
//	alert ("               Fleet Service Representative (FSR) \n\n"   +
//		   "\n Contact information for Customer # : " + Cust + "\n" +
//		   "\n     FSR Name  :  " + Name   + " \n" +
//		   "\n     FSR Phone :  " + Phone  + "       Ext # : "  + PhExt + " \n" +
//		   "\n     FSR Email :  " + Email  + " \n"  );
//}

function openAFV(fileName) {
  var fileAFV = "";
  if (fileName == "notes1")		fileAFV="/VIDEO/ScriptPart1 April 2014.pdf";
  if (fileName == "notes2")		fileAFV="/VIDEO/ScriptPart2 April 2014.pdf";

  winFeatures='toolbar=No,titlebar=No,locationbar=no,status=yes,scrollbars=yes,resizable=yes,width=770, height=600';
  window.open(fileAFV,'_blank',winFeatures);
}

//////////////////////////////   MOVED TO PAGEFOOTER.JS   ///////////////////////////////////////////////////////////////////////
//function bust() {
// ...
//}
//bust();
///* end of iframe bust code */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ======================== CROCKFORD JS PROTOTYPAL INHERITANCE MODEL OBJECT =====
// ======================== We use this instead of Object.create which isnt cross browser or IE8
// ======================== and instead of new to preserve inherited property access

Object.gen = function(o) {
   var makeArgs = arguments
   function F() {
	  var prop, i=1, arg, val
	  for(prop in o) {
		 if(!o.hasOwnProperty(prop)) continue
		 val = o[prop]
		 arg = makeArgs[i++]
		 if(typeof arg === 'undefined') break
		 this[prop] = arg
	  }
   }
   F.prototype = o
   return new F()
}

//generic trim function - removes leading and trailing whitespace. 
function trim(s1)
{
  return s1.replace(/^\s+|\s+$/, '');
}

// ======================== CROSS BROWSER ADD EVENT LISTENER ================================	
// ===== from http://stackoverflow.com/questions/3763080/javascript-add-events-cross-browser-function-implementation-use-attachevent-add
// ===== This Adds a listener to an element
// =====   html_element:   the element to add listener to
// =====   event_name:     eg: click, keyup, focus, blur...
// =====   event_function: the function
// =====
// =====
function AddEvent(html_element, event_name, event_function) 
{       
   if(html_element.attachEvent) //Internet Explorer
      html_element.attachEvent("on" + event_name, function() {event_function.call(html_element);}); 
   else if(html_element.addEventListener) //Firefox & company
      html_element.addEventListener(event_name, event_function, false); //don't need the 'call' trick because in FF everything already works in the right way          
} 

var initAgency = "";
var initBureau = "";
