/**
 * Javascript warning file
 * Ryan Day - 6/22/2012
 */

/* this function retrieves the first request variable */
				function getQueryVariable(variable) {
				  var query = window.location.search.substring(1);
				  var vars = query.split("&");
				  for (var i=0;i<vars.length;i++) {
				    var pair = vars[i].split("=");
				    if (pair[0] == variable) {
				      return pair[1];
				    }
				  }
				}

var msg;

 msg = " ******************* WARNING *******************\n";
 msg = msg + "\n This is a U.S. General Services Administration Federal Government computer system that is FOR OFFICIAL USE ONLY. This system is subject to monitoring. Therefore, no expectation of privacy is to be assumed. Individuals found performing unauthorized activities are subject to disciplinary action including criminal prosecution.\n";
 msg = msg + "\n ******************* WARNING *******************\n";

/*
if (getQueryVariable("warning") != "0") {
	if (!confirm(msg)) 
	{ window.location.href ="http://www.gsa.gov/";}
	else 
	{window.location.href = window.location.href + "?warning=0";};
}*/