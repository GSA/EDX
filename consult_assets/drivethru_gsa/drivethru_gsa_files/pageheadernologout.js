// changelog
// 11856 - mitigate vulnarability presented by Defensive Driver Course access when logout     dxm

// https & host already defined in drivethru.js

//Following function is called from DTLOGIN page to show 'Login', "Register' links on the header.
function homepageheaderdlogin() {
	var qt = "'";
//	var winAttr = "&quot;Cc&quot;, &quot;scrollbars=yes, resizable=yes, width=1040, height=650, left=100, top=10&quot;";
	var loginLn="";
	if ((gsaInternal=="Y") && (window.location.host == ("drivethrub.gsa.gov") || window.location.host == ("drivethrud.fas.gsa.gov")))
		{	
			loginLn='<li><a href="javascript:submitLogon();">Login SSO</a></li>';
		}
//	else
//	 	{  
//			loginLn='<li><a data-toggle="modal" href="#" onclick="clickLogin(); $(this).trigger(&quot;keypress&quot;, {which: 18});">Login</a></li>';
//	 	}
	html = 
	'<div class="banner">'+ 
//		'<a id="logo" href="javascript: go(&quot;DTHOME&quot;)">'+
		'<img src="/images/DTbanner.jpg" width="465" height="63" title="GSA logo for Fleet Drive-thru" id="gsaLogo">'+
//		'</a>'+ 
		'<div title="Privacy and Security"><a href="#" onClick="openWindow(' + qt + '/html/privacy.HTM' + qt + ');" ' + 
			'style="font-size:11px; color:#6d6d6d; float:right; margin-top:-55px;">Privacy and Security</a></div>'+
//		'<div title="Privacy and Security"><a href="#" onClick="window.open(' + qt + '/html/privacy.HTM' + qt + ',' + qt + 'Cc' + qt + ',' + qt + 
//	   	   'scrollbars=yes,width=1040,height=600,left=100,top=90' + qt + ');" style="font-size:11px; color:#6d6d6d; float:right; margin-top:-55px;">Privacy and Security</a></div>'+
	'</div>'+
	'<div class="navbar navbar-default" style="cursor:pointer">'+
		'<div class="navbar-header" role="navigation">'+
			'<button id="idnavbtn" type="button" title="Main Navigation" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
				'<span class="icon-bar"></span>'+
				'<span class="icon-bar"></span>'+
				'<span class="icon-bar"></span>'+
			'</button>'+
		'</div>'+
		'<div class="collapse navbar-collapse" onmousemove="$(&quot;ul li a&quot;).blur()">'+
			'<ul id="idnav" class="nav navbar-nav">'+
//				'<li><a id="ddcrs" title="Defensive Driving Course" href="javaScript: goHDR(&quot;DTDEFDRVCOURSE&quot;);" target="_blank">Defensive Driving Course</a></li>'+
				'<li><a id="close" title="Close Window"  href="javaScript: window.close();">CLOSE WINDOW</a></li>'+
//dxm				'<li><a id="ddcrs" title="Defensive Driving Course" href="javaScript: openDDClogin();">Defensive Driving Course</a></li>'+		// defined in drivethru.js
				'<li><a id="findf" title="Find U.S. Alternative Fuel"     href="#" onclick="openWindow(&quot;http://www.eere.energy.gov/afdc/stations/advanced.php&quot;)">Find U.S. Alternative Fuel</a></li>'+
// dxm				'<li><a id="drvsf" title="Driver Safety" href="#" onclick="openWindow(&quot;/html/DTDRIVERSAFTY.htm&quot;)">Driver Safety</a></li>'+
//				'<li><a id="fnews" title="Fleet News - What&rsquo;s New" href="#" onclick="openWindow(&quot;/html/DTFLEETNEWS.htm&quot;)">Fleet News - What&rsquo;s New</a></li>'+
//dxm				'<li><a id="trng"  title="Training"      href="#" onclick="openWindow(&quot;/html/DTTRAINING.htm&quot;)">Training</a></li>'+
				'<li><a title="About Fleet"              href="#" onclick="openWindow(&quot;http://gsa.gov/portal/content/104624&quot;);">About Fleet</a></li>'+
				'<li><a id="conta" title="Contact Us"    href="#" onclick="openWindow(&quot;/html/DTCONTACTUS.htm&quot;)">Contact Us</a></li>'+
				'<li id="help"><a  title="Help"          href="#" onclick="openWindow(&quot;/help/HELP_' + temptcode + '.PDF&quot;)">Help</a></li>'+	// cannot use goMM if outside drivethru; no need to secure
//				'<li id="help"><a href="javaScript: goMM(&quot;HELP_' + temptcode + '.PDF&quot;);">Help</a></li>'+
			'</ul>'+
			'<ul class="nav navbar-nav navbar-right">'+
//				'<li><a href="#myModal1"  data-toggle="modal">Login</a></li>'+
				'<li><a href="javascript:submitRegister();">New User? Register here</a></li>'+
				'<li><a data-toggle="modal" href="#" onclick="clickLogin(); $(this).trigger(&quot;keypress&quot;, {which: 18});">Login</a></li>'+	// 18 is Alt key for orig font color
//BP				'<li><a href="javascript:submitLogon();">Login SSO</a></li>'+
				loginLn +
				
			'</ul>'+
		'</div>'+
	'</div>'+
	'<span id="username" style="display:none"> </span>';
	
	document.write (html);

	if (temptcode == "DTDRIVERSAFTY" || temptcode == "DTFLEETNEWS" || temptcode == "DTTRAINING" || temptcode == "DTCONTACTUS" || 
		temptcode == "DTHELP"        || temptcode == "PRIVACY"     || temptcode == "DTFORGOTPW") {
//		$("#drvsf, #fnews, #trng, #conta").attr("target", "_self");		// Driver Safety, Fleet News, Training, Contact Us links
//		$("#drvsf, #trng, #conta").attr("target", "_self");				// Driver Safety, Training, Contact Us links (_self doesn't work here)
//		$("#gsaLogo").css("cursor", "text").removeAttr("title");
		$("#ddcrs").hide();												// Defensive Driving Course link
		$("#findf").hide();												// Find Fuel link
		if (temptcode == "DTFORGOTPW")
			$("#close").hide();											// Close Window link		
	}
	else {
//		if (temptcode != "DTLOGIN")
//			$("#gsaLogo").click( function() {go("DTHOME");} );
		$("#close").hide();												// Close Window link
		$("#drvsf").hide();												// Driver Safety link
	}
}


function homepageheadernologout() {
	var qt = "'";
//	var winAttr = "&quot;Cc&quot;, &quot;scrollbars=yes, resizable=yes, width=1040, height=650, left=100, top=10&quot;";
	
	html = 
	'<div class="banner">'+ 
//		'<a id="logo" href="javascript: go(&quot;DTHOME&quot;)">'+
		'<img src="/images/DTbanner.jpg" width="465" height="63" title="GSA logo for Fleet Drive-thru" id="gsaLogo">'+
//		'</a>'+ 
		'<div title="Privacy and Security"><a href="#" onClick="openWindow(' + qt + '/html/privacy.HTM' + qt + ');" ' + 
			'style="font-size:11px; color:#6d6d6d; float:right; margin-top:-55px;">Privacy and Security</a></div>'+
//		'<div title="Privacy and Security"><a href="#" onClick="window.open(' + qt + '/html/privacy.HTM' + qt + ',' + qt + 'Cc' + qt + ',' + qt + 
//	   	   'scrollbars=yes,width=1040,height=600,left=100,top=90' + qt + ');" style="font-size:11px; color:#6d6d6d; float:right; margin-top:-55px;">Privacy and Security</a></div>'+
	'</div>'+
	'<div class="navbar navbar-default" style="cursor:pointer">'+
		'<div class="navbar-header" role="navigation">'+
			'<button id="idnavbtn" type="button" title="Main Navigation" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
				'<span class="icon-bar"></span>'+
				'<span class="icon-bar"></span>'+
				'<span class="icon-bar"></span>'+
			'</button>'+
		'</div>'+
		'<div class="collapse navbar-collapse" onmousemove="$(&quot;ul li a&quot;).blur()">'+
			'<ul id="idnav" class="nav navbar-nav">'+
//				'<li><a id="ddcrs" title="Defensive Driving Course" href="javaScript: goHDR(&quot;DTDEFDRVCOURSE&quot;);" target="_blank">Defensive Driving Course</a></li>'+
				'<li><a id="close" title="Close Window"  href="javaScript: window.close();">CLOSE WINDOW</a></li>'+
//dxm				'<li><a id="ddcrs" title="Defensive Driving Course" href="javaScript: openDDClogin();">Defensive Driving Course</a></li>'+		// defined in drivethru.js
				'<li><a id="findf" title="Find U.S. Alternative Fuel"     href="#" onclick="openWindow(&quot;http://www.eere.energy.gov/afdc/stations/advanced.php&quot;)">Find U.S. Alternative Fuel</a></li>'+
//dxm				'<li><a id="drvsf" title="Driver Safety" href="#" onclick="openWindow(&quot;/html/DTDRIVERSAFTY.htm&quot;)">Driver Safety</a></li>'+
//				'<li><a id="fnews" title="Fleet News - What&rsquo;s New" href="#" onclick="openWindow(&quot;/html/DTFLEETNEWS.htm&quot;)">Fleet News - What&rsquo;s New</a></li>'+
//dxm				'<li><a id="trng"  title="Training"      href="#" onclick="openWindow(&quot;/html/DTTRAINING.htm&quot;)">Training</a></li>'+
				'<li><a title="About Fleet"              href="#" onclick="openWindow(&quot;http://gsa.gov/portal/content/104624&quot;);">About Fleet</a></li>'+
				'<li><a id="conta" title="Contact Us"    href="#" onclick="openWindow(&quot;/html/DTCONTACTUS.htm&quot;)">Contact Us</a></li>'+
				'<li id="help"><a  title="Help"          href="#" onclick="openWindow(&quot;/help/HELP_' + temptcode + '.PDF&quot;)">Help</a></li>'+	// cannot use goMM if outside drivethru; no need to secure
			'</ul>'+			
		'</div>'+
	'</div>'+
	'<span id="username" style="display:none"> </span>';
	
	document.write (html);

	if (temptcode == "DTDRIVERSAFTY" || temptcode == "DTFLEETNEWS" || temptcode == "DTTRAINING" || temptcode == "DTCONTACTUS" || 
		temptcode == "DTHELP"        || temptcode == "PRIVACY"     || temptcode == "DTFORGOTPW") {
//		$("#drvsf, #fnews, #trng, #conta").attr("target", "_self");		// Driver Safety, Fleet News, Training, Contact Us links
//		$("#drvsf, #trng, #conta").attr("target", "_self");				// Driver Safety, Training, Contact Us links (_self doesn't work here)
//		$("#gsaLogo").css("cursor", "text").removeAttr("title");
		$("#ddcrs").hide();												// Defensive Driving Course link
		$("#findf").hide();												// Find Fuel link
		if (temptcode == "DTFORGOTPW") 
			$("#close").hide();											// Close Window link		
		else
			$("#help" ).hide();												
	}
	else {
//		if (temptcode != "DTLOGIN")
//			$("#gsaLogo").click( function() {go("DTHOME");} );
		$("#close").hide();												// Close Window link
		$("#drvsf").hide();												// Driver Safety link
	}
}
