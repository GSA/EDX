function pagefooter() {
  html =
    '<div class="footer">' +
    '<div class="col-md-2">' +
    "<p>Related Sites</p>" +
    '<p><a  title="GSA.gov"       href="javascript: openWindow(&quot;http://gsa.gov/portal/category/100000&quot;)">GSA</a></br>' +
    '<a title="Auto Auctions" href="javascript: openWindow(&quot;https://autoauctions.gsa.gov&quot;)">Auto Auctions</a></br>' +
    '<a title="AutoChoice"    href="javascript: openWindow(&quot;https://autochoice.fas.gsa.gov&quot;)">AutoChoice</a></br>' +
    '<a title="DRM or Vehicle Dispatch" href="#" id="drm">DRM</a></br>' +
    '<a title="Fastweb"       href="javascript: openWindow(&quot;https://fastweb.inl.gov&quot;)">F.A.S.T.</a></br>' +
    "</p>" +
    "</div>" +
    '<div class="col-md-2">' +
    "<p>&nbsp;</p>" +
    '<p><a  title="Federal Vehicle Standards" href="javascript: openFedVehStd()">Federal Vehicle Standards</a></br>' +
    '<a title="FedFMS"  href="#" id="ffms">FedFMS</a></br>' +
    '<a title="STR"     href="#" id="str" >STR</a></br>' +
    '<a title="VCSS"    href="javascript: openWindow(&quot;https://vcss.ocfo.gsa.gov&quot;)">VCSS</a></br>' + // used to be VCSS - WebBill
    '<a title="VFE or Vehicle Fleet Exchange" href="javascript: openWindow(&quot;' +
    https +
    host +
    '/vfe.htm&quot;)">VFE</a>' +
    "</p>" +
    "</div>" +
    '<div class="col-md-2">' +
    "<p>Other Interest</br>" +
    '<p><a  title="USA.gov"        href="javascript: openWindow(&quot;http://usa.gov&quot;)">USA.gov</a></br>' +
    '<a title="Data.gov"       href="javascript: openWindow(&quot;http://data.gov&quot;)">Data.gov</a></br>' +
    '<a title="Whitehouse.gov" href="javascript: openWindow(&quot;http://whitehouse.gov&quot;)">Whitehouse.gov</a><br>' +
    '<a title="Section508.gov" href="javascript: openWindow(&quot;https://www.section508.gov/manage/laws-and-policies&quot;)">Section508.gov</a><br>' +
    '<a title="GSA API Directory" href="javascript: openWindow(&quot;https://open.gsa.gov/api/&quot;)">GSA API Directory</a>' +
    "</p>" +
    "</p>" +
    "</div>" +
    '<div class="col-md-2">' +
    "<p>&nbsp;</p>" +
    "</div>" +
    '<div class="col-md-4 footerbkg">' +
    '<p style="color:#000">GSA/FAS Asset and Transportation Management Helpdesk</p>' +
    "<p>Hours of Operation<br>" +
    "8:00 AM - 7:00 PM EST<br> " +
    "Tel: 1-866-472-6711<br>" +
    "Email:&nbsp;" +
    '<a href="mailto:gsadrivethruhelp@gsa.gov" title="GSA Drive-thru Help Desk email address" style="color:white">gsadrivethruhelp@gsa.gov</a>' +
    "</p>" +
    "</div>" +
    "</div>";
  document.write(html);
  if (host == "drivethrud.fas.gsa.gov" || host == "drivethrub.gsa.gov") {
    // Dev or Test
    $("#drm").attr(
      "href",
      'javascript: openWindow("https://vehicledispatchb.fas.gsa.gov")'
    );
    $("#ffms").attr(
      "href",
      'javascript: openWindow("https://ffmsb.fas.gsa.gov")'
    );
    $("#str").attr("href", 'javascript: openWindow("https://strb.gsa.gov")');
  } else {
    $("#drm").attr(
      "href",
      'javascript: openWindow("https://vehicledispatch.fas.gsa.gov")'
    );
    $("#ffms").attr(
      "href",
      'javascript: openWindow("https://ffms.fas.gsa.gov")'
    );
    $("#str").attr("href", 'javascript: openWindow("https://str.gsa.gov")');
  }
}

//////////////////////////////////////////////////////////////////////////////////
var timer = null;

function start() {
  if (typeof temptcode == "undefined") return;
  if (temptcode == "" || temptcode == " ") return;
  if (temptcode != "DTLOGIN") {
    var maxTimeWait = 2 * 60 * 1000;
    var curDateTime = new Date();
    var t = curDateTime.getTime();
    var conf = confirm(
      " Drive-thru page is about to timeout due to inactivity...\n \n Current date and time is " +
        curDateTime +
        " \n Click 'OK' button within next 2 minutes to extend session time. \n \n Click 'Cancel' button to login again. "
    );
    var timeDiff = new Date() - curDateTime;

    if (conf == false) go("DTHOME/?session=expired");
    else {
      if (timeDiff > maxTimeWait) go("DTHOME/?session=expired");
      else {
        if (host == "drivethrud.fas.gsa.gov")
          // Dev
          timer = setTimeout("start()", 300000); // Dev
        else timer = setTimeout("start()", 1680000); // Test and Prod
        return;
      }
    }
  }
}
//timer = setTimeout("start()",60000);			// 60 seconds ( 1 minute ) - for testing only
if (window.location.host == "drivethrud.fas.gsa.gov")
  timer = setTimeout(
    "start()",
    3000000
  ); // 3000 seconds (50 minutes) 	// Dev only
else timer = setTimeout("start()", 1680000); // 1680 seconds (28 minutes) 	// Test and Prod
//////////////////////////////////////////////////////////////////////////////////////////////////////

function bust() {
  var urlRefer =
    window.location != window.parent.location
      ? document.referrer
      : document.location;
  if (
    /\/(drivethrud.fas.gsa.gov)\//.test(urlRefer) ||
    /\/(drivethrub.gsa.gov)\//.test(urlRefer) ||
    /\/(drivethru.gsa.gov)\//.test(urlRefer) ||
    /\/(drivethru-dr.gsa.gov)\//.test(urlRefer) ||
    /\/(drivethru-dr.fas.gsa.gov)\//.test(urlRefer)
  ) {
  } else {
    // alert('busting you out, please wait...');
    window.top.location = https + host;
  }
}
bust();
/* end of iframe bust code */

//======================
//function bust()        // ERROR
//======================
//{
//    var urlRefer = (window.location != window.parent.location) ? document.referrer : document.location;
//    if (urlRefer.indexOf("drivethru.fas.gsa.gov") == "-1") {
//        alert('busting you out, please wait...');
//        window.top.location = "http://drivethru.fas.gsa.gov";
//    }
//}
//bust();
/* end of iframe bust code */

//Following code is for DAP universal analytics
var ua_dap_script = document.createElement("script");
ua_dap_script.type = "text/javascript";
ua_dap_script.id = "_fed_an_ua_tag";
ua_dap_script.src = "/js/Universal-Federated-Analytics.js?agency=GSA";
document.getElementsByTagName("head")[0].appendChild(ua_dap_script);
//End DAP universal analytics
