---
layout: design-consult
title: Contract Directory
type: diff
---

```diff
-<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
+<!DOCTYPE html>
 <!-- saved from url=(0048)https://contractdirectory.gov/contractdirectory/ -->
-<html xmlns="http://www.w3.org/1999/xhtml">
+<html lang="en-us" xmlns="http://www.w3.org/1999/xhtml">
   <head>
+    <meta name="viewport" content="width=device-width, initial-scale=1" />
     <meta http-equiv="Content-Type" content="text/html; charset=windows-1252" />
 
     <meta name="ROBOTS" content="INDEX, NOFOLLOW" />
     <meta
       name="Keywords"
       content="Interagency Contract Directory, Federal spending, Search Federal Procurement Data, Search Government, Search Government Contracts, FPDS, Federal Procurement Data System, Transparency in Government, Contract Spending, Government Contracts"
     />
     <meta
       name="Description"
       content="Welcome to the Interagency Contract Directory Portal"
     />
     <title>Interagency Contract Directory Portal</title>
-    <link
-      href="../../assets/design-consults/contractdirectory/default.css"
-      rel="stylesheet"
-      type="text/css"
-    />
+    
     <script
       type="text/javascript"
       id="www-widgetapi-script"
       src="../../assets/design-consults/contractdirectory/www-widgetapi.js"
       async=""
     ></script>
     <script src="../../assets/design-consults/contractdirectory/player_api"></script>
     <script
       async=""
       src="../../assets/design-consults/contractdirectory/analytics.js"
     ></script>
     <script type="text/javascript">
       var currentDomain = document.domain;
       function ClearText() {
         document.getElementsByName("q").innerHTML = "";
       }
       function SubmitForm() {
         var toPage = "";
         if (document.pressed == "Search") {
           // Try some input validation here for RTC 58367
           toPage = "icd?q=" + document.getElementById("q").value;
           document.form1.action = toPage;
         } else if (document.pressed == "Advanced Search") {
           document.getElementById("as").value = "true";
           toPage = "icd?q=" + document.getElementById("q").value;
           document.form1.action = toPage;
         } else if (document.pressed == "Clear") {
           document.getElementsByName("q").innerHTML = "";
         } else if (document.pressed === undefined) {
           toPage = "icd?q=" + document.getElementById("q").value;
           document.form1.action = toPage;
         }
         //if(toPage == "") {
         //toPage="icd";
         //document.form1.action=toPage;
         //}
       }
       function ClearAS() {
         document.getElementById("as").value = "";
       }
     </script>
     <script
       language="javascript"
       id="_fed_an_ua_tag"
       src="../../assets/design-consults/contractdirectory/Universal-Federated-Analytics.1.0.js"
     ></script>
+    <link
+      rel="stylesheet"
+      href="../../assets/css/uswds-theme.css"
+      type="text/css"
+    />
+    <script src="../../assets/uswds/js/uswds-init.min.js"></script>
   </head>
-  <body onload="ClearAS()" onunload="ClearAS()" style="background: #ebebeb">
-    <center>
-      <div style="width: 720px; background: #ffffff">
-        <br />
-        <table border="0" valign="middle">
-          <tbody>
-            <tr>
-              <td align="center">
-                <img
-                  width="700"
-                  alt="Interagency Contract Directory"
-                  title="Interagency Contract Directory"
-                  src="../../assets/design-consults/contractdirectory/Interagency-Contract-Directory.png"
-                />
-              </td>
-            </tr>
-          </tbody>
-        </table>
-        <table border="0" width="600" valign="middle">
-          <tbody>
-            <tr>
-              <td colspan="3">
-                <br />
-                <p style="text-align: left">
-                  <b><span style="color: #5486be">About ICD</span></b>
-                </p>
-                <p style="text-align: justify">
-                  <span style="color: black"
-                    >The <b>Interagency Contract Directory (ICD) </b> is a
-                    central repository of Indefinite Delivery Vehicles (IDV)
-                    awarded by the Federal agencies where the IDV is available
-                    for use at both the intra agency and interagency levels.
-                    IDVs include Government-Wide Acquisition Contracts (GWAC),
-                    Multi-Agency Contracts, Other Indefinite Delivery Contracts
-                    (IDC), Federal Supply Schedules (FSS), Basic Ordering
-                    Agreements (BOA), and Blanket Purchase Agreements
-                    (BPA).</span
-                  >
+  <body onload="ClearAS()" onunload="ClearAS()">
+    <a class="usa-skipnav" href="#main-content">Skip to main content</a>
+    <section class="usa-banner" aria-label="Official government website">
+      <div class="usa-accordion">
+        <header class="usa-banner__header">
+          <div class="usa-banner__inner">
+            <div class="grid-col-auto">
+              <img
+                class="usa-banner__header-flag"
+                src="../../assets/uswds/img/us_flag_small.png"
+                alt="U.S. flag"
+              />
+            </div>
+            <div class="grid-col-fill tablet:grid-col-auto">
+              <p class="usa-banner__header-text">
+                An official website of the United States government
+              </p>
+              <p class="usa-banner__header-action" aria-hidden="true">
+                Here's how you know
+              </p>
+            </div>
+            <button
+              class="usa-accordion__button usa-banner__button"
+              aria-expanded="false"
+              aria-controls="gov-banner"
+            >
+              <span class="usa-banner__button-text">Here's how you know</span>
+            </button>
+          </div>
+        </header>
+        <div class="usa-banner__content usa-accordion__content" id="gov-banner">
+          <div class="grid-row grid-gap-lg">
+            <div class="usa-banner__guidance tablet:grid-col-6">
+              <img
+                class="usa-banner__icon usa-media-block__img"
+                src="../../assets/uswds/img/icon-dot-gov.svg"
+                role="img"
+                alt=""
+                aria-hidden="true"
+              />
+              <div class="usa-media-block__body">
+                <p>
+                  <strong> Official websites use .gov </strong>
+                  <br />
+                  A <strong>.gov</strong> website belongs to an official
+                  government organization in the United States.
                 </p>
-              </td>
-            </tr>
-            <tr>
-              <td colspan="3" align="center">
-                <br />
-                <br />
-                <p style="text-align: justify">
-                  <span style="color: #5486be"
-                    >&nbsp;&nbsp;&nbsp;Enter keyword(s) to search</span
-                  >
+              </div>
+            </div>
+            <div class="usa-banner__guidance tablet:grid-col-6">
+              <img
+                class="usa-banner__icon usa-media-block__img"
+                src="../../assets/uswds/img/icon-https.svg"
+                role="img"
+                alt=""
+                aria-hidden="true"
+              />
+              <div class="usa-media-block__body">
+                <p>
+                  <strong> Secure .gov websites use HTTPS </strong>
+                  <br />
+                  A <strong>lock</strong> (
+                  <span class="icon-lock"
+                    ><svg
+                      xmlns="http://www.w3.org/2000/svg"
+                      width="52"
+                      height="64"
+                      viewBox="0 0 52 64"
+                      class="usa-banner__lock-image"
+                      role="img"
+                      aria-labelledby="banner-lock-title banner-lock-description"
+                      focusable="false"
+                    >
+                      <title id="banner-lock-title">Lock</title>
+                      <desc id="banner-lock-description">A locked padlock</desc>
+                      <path
+                        fill="#000000"
+                        fill-rule="evenodd"
+                        d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
+                      /></svg
+                  ></span>
+                  ) or <strong>https://</strong> means you've safely connected
+                  to the .gov website. Share sensitive information only on
+                  official, secure websites.
                 </p>
-                <form name="form1" method="get" onsubmit="SubmitForm();">
-                  <input
-                    alt="Search Text"
-                    title="Search Text"
-                    type="text"
-                    id="q"
-                    name="q"
-                    style="width: 95%"
-                    tabindex="1"
-                  />
-                  <p style="height: 5px"></p>
-                </form>
-              </td>
-            </tr>
-            <tr align="center">
-              <!--			<td><input type="submit" id="button_search" value="Search" onclick="document.pressed=this.value" class="green_button" /></td>-->
-              <td>
-                <input
-                  id="button_search"
-                  align="center"
-                  type="image"
-                  height="24"
-                  style="position: relative; top: -2px"
-                  value="Search"
-                  onclick="document.pressed=this.value"
-                  alt="Search"
-                  title="Search"
-                  src="../../assets/design-consults/contractdirectory/Search.png"
-                />
-              </td>
-              <td>
-                <input
-                  id="button_clear_text"
-                  type="image"
-                  height="24"
-                  value="Clear"
-                  onclick="document.pressed=this.value"
-                  alt="Clear"
-                  title="Clear"
-                  src="../../assets/design-consults/contractdirectory/clear.png"
-                />
-              </td>
-              <td>
+              </div>
+            </div>
+          </div>
+        </div>
+      </div>
+    </section>
+    <div class="usa-overlay"></div>
+    <header class="usa-header usa-header--extended">
+      <div class="usa-navbar">
+        <div class="usa-logo" id="extended-logo">
+          <em class="usa-logo__text">
+            <a href="/" title="Interagency Contract Directory">
+              Interagency Contract Directory
+            </a>
+          </em>
+        </div>
+        <button class="usa-menu-btn">Menu</button>
+      </div>
+      <nav aria-label="Primary navigation" class="usa-nav">
+        <div class="usa-nav__inner">
+          <button class="usa-nav__close">
+            <img
+              src="../../assets/uswds/img/usa-icons/close.svg"
+              role="img"
+              alt="Close"
+            />
+          </button>
+          <ul class="usa-nav__primary usa-accordion">
+            <li class="usa-nav__primary-item">
+              <a href="javascript:void(0)" class="usa-nav__link">
+                <span>Advanced Search</span>
+              </a>
+            </li>
+          </ul>
+          <div class="usa-nav__secondary"></div>
+        </div>
+      </nav>
+    </header>
+    <main id="main-content">
+      <div class="grid-container margin-top-2">
+        <div class="grid-row">
+          <div class="grid-col-12">
+            <div class="usa-prose">
+              <h2>Search</h2>
+              <form
+                class="usa-search usa-search--small"
+                role="search"
+                name="form1"
+                method="get"
+                onsubmit="SubmitForm();"
+              >
+                <label class="usa-sr-only" for="q"
+                  >Enter keyword(s) to search</label
+                >
                 <input
-                  type="image"
-                  id="button_advanced_search"
-                  height="24"
-                  value="Advanced Search"
-                  onclick="document.pressed=this.value"
-                  alt="Advanced Search"
-                  title="Advanced Search"
-                  src="../../assets/design-consults/contractdirectory/advanced_search.png"
+                  class="usa-input"
+                  alt="Search Text"
+                  title="Search Text"
+                  placeholder="Enter keyword(s)"
+                  type="search"
+                  id="q"
+                  name="q"
                 />
-              </td>
-              <td><input type="hidden" id="as" name="as" value="" /></td>
+                <button class="usa-button" type="submit">
+                  
+                </button>
+              </form>
+            </div>
+          </div>
+        </div>
+        <div class="grid-row margin-top-205">
+          <div class="grid-col-12">
+            <div class="usa-prose">
+              <h2>About ICD</h2>
+              <p>
+                The <b>Interagency Contract Directory (ICD) </b> is a central
+                repository of Indefinite Delivery Vehicles (IDV) awarded by the
+                Federal agencies where the IDV is available for use at both the
+                intra agency and interagency levels. IDVs include
+                Government-Wide Acquisition Contracts (GWAC), Multi-Agency
+                Contracts, Other Indefinite Delivery Contracts (IDC), Federal
+                Supply Schedules (FSS), Basic Ordering Agreements (BOA), and
+                Blanket Purchase Agreements (BPA).
+              </p>
+            </div>
+          </div>
+        </div>
+        <footer class="usa-footer usa-footer--big">
+          <div class="grid-container usa-footer__return-to-top">
+            <a href="#">Return to top</a>
+          </div>
+          <div class="usa-footer__primary-section">
+            <div class="grid-container">
+              <div class="grid-row grid-gap">
+                <div class="tablet:grid-col-12">
+                  <nav class="usa-footer__nav" aria-label="Footer navigation,,">
+                    <div class="grid-row grid-gap-4">
+                      <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
+                        <section
+                          class="usa-footer__primary-content usa-footer__primary-content--collapsible"
+                        >
+                          <h4 class="usa-footer__primary-link">GWACs</h4>
+                          <ul class="usa-list usa-list--unstyled">
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts-gwacs"
+                                title="Streamlined Technology Acquisition Resources for Services"
+                              >
+                                8(a) STARS II
+                              </a>
+                            </li>
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts/8a-stars-iii"
+                                title="Streamlined Technology Acquisition Resources for Services"
+                              >
+                                8(a) STARS III
+                              </a>
+                            </li>
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts/alliant-2-governmentwide-acquisition-contract-gwac"
+                              >
+                                Alliant 2
+                              </a>
+                            </li>
+                            <li class="usa-footer__secondary-link">
+                              <a href="http://nitaac.nih.gov/nitaac/">
+                                CIO SP3
+                              </a>
+                            </li>
+                            <li class="usa-footer__secondary-link">
+                              <a href="http://nitaac.nih.gov/nitaac/">
+                                CIO SP3 Small Business
+                              </a>
+                            </li>
+                            <li class="usa-footer__secondary-link">
+                              <a href="http://www.sewp.nasa.gov/index.shtml">
+                                SEWP 4
+                              </a>
+                            </li>
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts/vets-2-governmentwide-acquisition-contract-gwac"
+                              >
+                                VETS 2
+                              </a>
+                            </li>
+                          </ul>
+                        </section>
+                      </div>
 
-              <!--			<form name="form2" method="get" action="/test">
-			<input type="hidden" name="advSearch" value="true"/></td>
-			<td><input type="submit" id="button_advanced_search" value="Advanced Search" class="green_button" />
-				</td>
+                      <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
+                        <section
+                          class="usa-footer__primary-content usa-footer__primary-content--collapsible"
+                        >
+                          <h4 class="usa-footer__primary-link">
+                            ICD/ IDIQ/ BPA
+                          </h4>
+                          <ul class="usa-list usa-list--unstyled">
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedule/schedule-features/blanket-purchase-agreements"
+                                title="Governmentwide Schedule BPAs"
+                              >
+                                Governmentwide Schedule BPAs
+                              </a>
+                            </li>
+                            <li class="usa-footer__secondary-link">
+                              <a href="https://nitaac.nih.gov/services/cio-cs">
+                                ECS III
+                              </a>
+                            </li>
 
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://www.gsa.gov/technology/technology-purchasing-programs/telecommunications-and-network-services"
+                              >
+                                Enterprise Infrastructure Solutions (EIS)
+                              </a>
+                            </li>
 
-						<input width="123" align="center" type="image" height="24" alt="search" src="images/Search.png" tabindex="2" />
-				</form>-->
-            </tr>
-          </tbody>
-        </table>
-        <br />
-        <p style="height: 10px; width: 100%"></p>
-        <hr class="horizontal_line" style="height: 2px; width: 100%" />
-        <p style="height: 10px; width: 100%"></p>
-        <table id="footer_table" style="width: 100%">
-          <tbody>
-            <tr>
-              <td style="width: 20%">
-                <table>
-                  <tbody>
-                    <tr>
-                      <td>
-                        <img
-                          id="iae-logo"
-                          align="left"
-                          alt="IAE"
-                          title="IAE"
-                          src="../../assets/design-consults/contractdirectory/iae_logo_65.gif"
-                        />
-                      </td>
-                      <td>
-                        <img
-                          id="usa-logo"
-                          align="left"
-                          alt="USA.gov"
-                          title="USA.gov"
-                          src="../../assets/design-consults/contractdirectory/firstgovlogo.gif"
-                        />
-                      </td>
-                    </tr>
-                    <tr>
-                      <td>&nbsp;</td>
-                    </tr>
-                    <tr>
-                      <td>
-                        <img
-                          id="e-gov-logo"
-                          style="position: relative; left: 40px"
-                          src="../../assets/design-consults/contractdirectory/egov_30.gif"
-                          alt="E-Gov Logo"
-                          title="E-Gov"
-                        />
-                      </td>
-                    </tr>
-                  </tbody>
-                </table>
-              </td>
-              <td style="width: 70%">
-                <ul></ul>
-                <table
-                  id="gwacs_table"
-                  style="
-                    position: relative;
-                    left: 40px;
-                    width: 100%;
-                    font-size: 10px;
-                  "
-                >
-                  <tbody>
-                    <tr>
-                      <td
-                        align="left"
-                        style="text-align: left position: relative; left: 40px; font-size: 10px; "
-                        title="Government-Wide Contracts"
-                      >
-                        GWACs
-                      </td>
-                      <td
-                        align="left"
-                        style="text-align: left position: relative; left: 40px; font-size: 10px; "
-                        title="Government-Wide Contracts"
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology"
+                              >
+                                MAS Information Technology
+                              </a>
+                            </li>
+
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://www.gsa.gov/technology/technology-purchasing-programs/telecommunications-and-network-services/satellite-communications-satcom-products-and-services"
+                              >
+                                Satellite Communications (SATCOM)
+                              </a>
+                            </li>
+                          </ul>
+                        </section>
+                      </div>
+
+                      <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
+                        <section
+                          class="usa-footer__primary-content usa-footer__primary-content--collapsible"
+                        >
+                          <h4 class="usa-footer__primary-link">Other Links</h4>
+                          <ul class="usa-list usa-list--unstyled">
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://contractdirectory.gov/contractdirectory/FAQs.html"
+                              >
+                                FAQs
+                              </a>
+                            </li>
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://contractdirectory.gov/contractdirectory/ICD-Help.pdf"
+                              >
+                                Help
+                              </a>
+                            </li>
+
+                            <li class="usa-footer__secondary-link">
+                              <a
+                                href="https://www.fpds.gov/fpdsng_cms/index.php/en/?option=com_content&view=article&id=21"
+                              >
+                                Submit Comments
+                              </a>
+                            </li>
+                          </ul>
+                        </section>
+                      </div>
+                      <div
+                        class="usa-footer__contact-links mobile-lg:grid-col-3"
                       >
-                        ICD/IDIQ/BPA
-                      </td>
-                      <td
-                        align="left"
-                        style="position: relative; left: 40px; font-size: 10px"
-                      ></td>
-                    </tr>
-                    <tr></tr>
-                    <tr></tr>
-                    <tr>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts-gwacs"
-                            target="_new"
-                            title="Streamlined Technology Acquisition Resources for Services"
-                            id="anch_0"
-                          >
-                            8(a) STARS II
-                          </a>
-                        </li>
-                      </td>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedule/schedule-features/blanket-purchase-agreements"
-                            target="_new"
-                            title="Governmentwide Schedule BPAs"
-                            id="anch_1"
-                          >
-                            Governmentwide Schedule BPAs
-                          </a>
-                        </li>
-                      </td>
-                      <td align="left" style="width: 30%">
-                        <li>
-                          <a
-                            title="FAQs"
-                            target="_new"
-                            href="https://contractdirectory.gov/contractdirectory/FAQs.html"
-                            id="anch_2"
-                            >FAQs</a
-                          >
-                        </li>
-                      </td>
-                    </tr>
-                    <tr>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts-gwacs"
-                            target="_new"
-                            title="Streamlined Technology Acquisition Resources for Services"
-                            id="anch_3"
-                          >
-                            8(a) STARS III
-                          </a>
-                        </li>
-                      </td>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://nitaac.nih.gov/services/cio-cs"
-                            target="_new"
-                            title="Electronic Commodities Store III"
-                            id="anch_4"
-                          >
-                            ECS III
-                          </a>
-                        </li>
-                      </td>
-                      <td align="left">
-                        <li>
-                          <a
-                            title="Help"
-                            target="_new"
-                            href="https://contractdirectory.gov/contractdirectory/ICD-Help.pdf"
-                            id="anch_5"
-                            >Help</a
-                          >
-                        </li>
-                      </td>
-                    </tr>
-                    <tr>
-                      <td align="left" style="width: 30%">
-                        <li>
-                          <a
-                            href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts-gwacs"
-                            target="_new"
-                            title="Alliant 2"
-                            id="anch_6"
-                          >
-                            Alliant 2
-                          </a>
-                        </li>
-                      </td>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://www.gsa.gov/technology/technology-purchasing-programs/telecommunications-and-network-services"
-                            title="Enterprise Infrastructure Solutions (EIS)"
-                            id="anch_7"
-                          >
-                            Enterprise Infrastructure Solutions (EIS)</a
-                          >
-                        </li>
-                      </td>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://www.fpds.gov/fpdsng_cms/index.php/en/?option=com_content&amp;view=article&amp;id=21"
-                            alt="Submit Comments"
-                            title="Submit Comments"
-                            class="style30"
-                            id="anch_8"
-                            >Submit Comments</a
-                          >
-                        </li>
-                      </td>
-                    </tr>
-                    <tr>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="http://nitaac.nih.gov/nitaac/"
-                            target="_new"
-                            title="Chief Information Officer-Solutions and Partners 3 Innovations"
-                            id="anch_9"
-                          >
-                            CIO SP3
-                          </a>
-                        </li>
-                      </td>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology"
-                            title="MAS Information Technology"
-                            id="anch_10"
-                          >
-                            MAS Information Technology</a
-                          >
-                        </li>
-                      </td>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://www.fpds.gov/fpdsng_cms/index.php/en/?option=com_content&amp;view=article&amp;id=21"
-                            title="Contact Information"
-                            id="anch_11"
-                          >
-                            Contact Information</a
-                          >
-                        </li>
-                      </td>
-                    </tr>
-                    <tr>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="http://nitaac.nih.gov/nitaac/"
-                            target="_new"
-                            title="Chief Information Officer-Solutions and Partners 3 Innovations Small Business"
-                            id="anch_12"
-                          >
-                            CIO SP3 Small Business
-                          </a>
-                        </li>
-                      </td>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://www.gsa.gov/technology/technology-purchasing-programs/telecommunications-and-network-services"
-                            title="Satellite Communications (SATCOM)"
-                            id="anch_13"
-                          >
-                            Satellite Communications (SATCOM)</a
-                          >
-                        </li>
-                      </td>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="https://contractdirectory.gov/contractdirectory/"
-                            title="Copyright Information"
-                            id="anch_14"
-                            >Copyright Information</a
-                          >
-                        </li>
-                      </td>
-                    </tr>
-                    <tr>
-                      <td align="left">
-                        <li>
-                          <a
-                            href="http://www.sewp.nasa.gov/index.shtml"
-                            target="_new"
-                            title="Solutions for Enterprise Wide Procurement"
-                            id="anch_15"
-                          >
-                            SEWP 4
-                          </a>
-                        </li>
-                      </td>
-                      <td></td>
-                      <td></td>
-                    </tr>
-                    <tr>
-                      <td style="width: 20%" align="left">
-                        <li>
-                          <a
-                            href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts-gwacs"
-                            target="_new"
-                            title="Veterans Technology Services 2"
-                            id="anch_16"
-                          >
-                            VETS 2
-                          </a>
-                        </li>
-                      </td>
-                    </tr>
-                  </tbody>
-                </table>
-              </td>
-              <td style="width: 10%" align="center">
-                <img
-                  id="gsa-logo"
-                  align="right"
-                  src="/assets/design-consults/contractdirectory/gsa_logo_40.gif"
-                  alt="GSA"
-                  title="GSA"
-                />
-              </td>
-            </tr>
-          </tbody>
-        </table>
-        <br />
-        <center style="font-size: 10px">
-          **********************************WARNING***********************************
-        </center>
+                        <h3 class="usa-footer__contact-heading">Contact Us</h3>
+                        <address class="usa-footer__address">
+                          <div
+                            class="usa-footer__contact-info grid-row grid-gap"
+                          >
+                            <div class="grid-col-auto">
+                              <p>
+                                Hours of Operation<br />
+                                Monday - Friday<br />
+                                8 a.m. to 8 p.m. ET<br />
+                              </p>
+                            </div>
+                            <div class="grid-col-auto margin-top-105">
+                              <strong>US<br /></strong
+                              ><a href="tel:1-866-606-8220"> 866-606-8220 </a>
+                            </div>
+                            <div class="grid-col-auto margin-top-105">
+                              <strong>International<br /> </strong
+                              ><a href="tel:1-334-206-7828">+1 334-206-7828</a>
+                            </div>
+                            <div class="grid-col-auto margin-top-105">
+                              <strong>DSN<br /></strong
+                              ><a href="tel:94-866-606-8220">94-866-606-8220</a>
+                            </div>
+                          </div>
+                        </address>
+                      </div>
+                    </div>
+                  </nav>
+                </div>
+              </div>
+            </div>
+          </div>
+        </footer>
+        <div class="usa-identifier">
+          <section
+            class="usa-identifier__section usa-identifier__section--masthead"
+            aria-label="Agency identifier,"
+          >
+            <div class="usa-identifier__container">
+              <div class="usa-identifier__logos">
+                <a href="javascript:void(0);" class="usa-identifier__logo">
+                  <img
+                    class="usa-identifier__logo-img"
+                    src="../../assets/img/gsa_logo.png"
+                    alt="US General Administration Services Starmark logo"
+                    role="img"
+                  />
+                </a>
+              </div>
+              <div
+                class="usa-identifier__identity"
+                aria-label="Agency description"
+              >
+                <p class="usa-identifier__identity-domain">
+                  contractdirectory.gov
+                </p>
+                <p class="usa-identifier__identity-disclaimer">
+                  An official website of the
+                  <a href="javascript:void(0);"
+                    >US General Services Administration</a
+                  >
+                </p>
+              </div>
+            </div>
+          </section>
+          <nav
+            class="usa-identifier__section usa-identifier__section--required-links"
+            aria-label="Important links,"
+          >
+            <div class="usa-identifier__container">
+              <ul class="usa-identifier__required-links-list">
+                <li class="usa-identifier__required-links-item">
+                  <a
+                    href="https://www.gsa.gov/about-us"
+                    class="usa-identifier__required-link usa-link"
+                    >About GSA;</a
+                  >
+                </li>
+                <li class="usa-identifier__required-links-item">
+                  <a
+                    href="https://www.gsa.gov/website-information/accessibility-aids"
+                    class="usa-identifier__required-link usa-link"
+                    >Accessibility support</a
+                  >
+                </li>
+                <li class="usa-identifier__required-links-item">
+                  <a
+                    href="https://www.gsa.gov/reference/freedom-of-information-act-foia"
+                    class="usa-identifier__required-link usa-link"
+                    >FOIA requests</a
+                  >
+                </li>
+                <li class="usa-identifier__required-links-item">
+                  <a
+                    href="https://www.gsa.gov/website-information/website-policies#privacy"
+                    class="usa-identifier__required-link usa-link"
+                    >Privacy policy</a
+                  >
+                </li>
+              </ul>
+            </div>
+          </nav>
+          <section
+            class="usa-identifier__section usa-identifier__section--usagov"
+            aria-label="U.S. government information and services,"
+          >
+            <div class="usa-identifier__container">
+              <div class="usa-identifier__usagov-description">
+                Looking for U.S. government information and services?
+              </div>
+              <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
+            </div>
+          </section>
+        </div>
+
         <center style="font-size: 10px">
           This is a U.S. General Services Administration Federal Government
           computer system that is "FOR OFFICIAL USE ONLY." This system is
           subject to monitoring. Individuals found performing unauthorized
           activities are subject to disciplinary action including criminal
           prosecution.
         </center>
       </div>
-    </center>
+    </main>
     <script type="text/javascript">
       document.all.form1.q.focus();
     </script>
+    <script src="../../assets/uswds/js/uswds.min.js"></script>
+    <link
+      href="../../assets/design-consults/contractdirectory/default.css"
+      rel="stylesheet"
+      type="text/css"
+    />
   </body>
 </html>
```
