/*  Preventing Frame Busting and Click Jacking (UI Redressing) - This script resolves frame busting for old browsers. Note that new browsers will not allowed calling from IFrame.
This function will check if the user is calling your site from other site using IFrame and will get directed to the actual site which is calling in <iframe> - added on 8/12/2014 */

function bust() 
{var urlRefer = (window.location != window.parent.location) ? document.referrer: document.location;
var envName = window.location.hostname;
var envNameNew = new RegExp(envName);
//alert ("test:" + envNameNew.test(urlRefer));
if (!(envNameNew.test(urlRefer)))
	{	 window.top.location="https://"+envName;  
	} 
}
bust();
/* end of iframe bust code */

var scSASPFlag="N";
var scPermAO="N";
// NASA
var scPermNASA="N"; // NASA Preescreening user
var scPermNA="N"; // NASA Administrator, Can view all items
var scPermNF="N"; // External only
var scPermM1="N"; // External only
var scPermM2="N"; // External only
var scPermN1="N"; //Internal Only
var scPermN2="N"; // Internal Only
var scPermN3="N"; // Internal Only
var scPermNN="N"; // Internal Only. If Technical use, External also allowed
var scPermS2="N"; // External only
var scPermS3="N"; // External only
var scPermU1="N"; // External only
var scPermU2="N"; // External only
var scPermU3="N"; // External only
var scPermNO="N"; // External only
// 
