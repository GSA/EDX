// this function takes the nested arrays/ objects and turns them into a csv file
// node jsonFlatten.js >> tmp.csv
const flatten = function (data) {
  var result = {};
  var rowName = [];
  function recuse(dataArray, datastring) {
    //console.log("data row name: ", datastring.toString());
    for (const item in dataArray) {
      if (dataArray[item].hasOwnProperty("children")) {
        datastring.push(dataArray[item].name);
        recuse(dataArray[item].children, datastring);
      }
      //console.log(dataArray[item].name);

      dataArray[item].name.includes(".gov")
        ? console.log(datastring.toString() + "," + dataArray[item].name)
        : "";
      if (item == dataArray.length - 1) {
        datastring.pop();
      }
    }
  }
  recuse(data, rowName);
};

const data = [
  {
    name: "buying",
    children: [
      {
        name: "General Acquisition",
        children: [
          {
            name: "acquisition.gov",
            value: 1,
          },
          {
            name: "hallways.cap.gsa.gov",
            value: 1,
          },
          {
            name: "cmls.gsa.gov",
            value: 1,
          },
          {
            name: "cpars.gov",
            value: 1,
          },
          {
            name: "esrs.gov",
            value: 1,
          },
          {
            name: "fai.gov",
            value: 1,
          },
          {
            name: "fapiis.gov",
            value: 1,
          },
          {
            name: "fsd.gov",
            value: 1,
          },
          {
            name: "fedspecs.gsa.gov",
            value: 1,
          },
          {
            name: "gsaelibrary.gsa.gov",
            value: 1,
          },
          {
            name: "fpds.gov",
            value: 1,
          },
          {
            name: "gsaglobalsupply.gsa.gov",
            value: 1,
          },
          {
            name: "sam.gov",
            value: 1,
          },
          {
            name: "usmcservmart.gsa.gov",
            value: 1,
          },
          {
            name: "cic.gsa.gov",
            value: 1,
          },
          {
            name: "dhsadvantage.gsa.gov",
            value: 1,
          },
          {
            name: "afadvantage.gov",
            value: 1,
          },
          {
            name: "usdaadvantage.gsa.gov",
            value: 1,
          },
          {
            name: "vaadvantage.gsa.gov",
            value: 1,
          },
          {
            name: "autochoice.fas.gsa.gov",
            value: 1,
          },
          {
            name: "idmanagement.gov",
            value: 1,
          },
        ],
      },
      {
        name: "IT Acquisition",
        children: [
          {
            name: "8astars.fas.gsa.gov",
            value: 1,
          },
          {
            name: "cloud.cio.gov",
            value: 1,
          },
          {
            name: "cloud.gov",
            value: 1,
          },
          {
            name: "gsaadvantage.gov",
            value: 1,
          },
          {
            name: "navigator.gsa.gov",
            value: 1,
          },
          {
            name: "techfarhub.cio.gov",
            value: 1,
          },
          {
            name: "dhsadvantage.gsa.gov",
            value: 1,
          },
          {
            name: "afadvantage.gov",
            value: 1,
          },
          {
            name: "usdaadvantage.gsa.gov",
            value: 1,
          },
          {
            name: "vaadvantage.gsa.gov",
            value: 1,
          },
        ],
      },
      {
        name: "Supplies",
        children: [
          {
            name: "gsaadvantage.gov",
            value: 1,
          },
          {
            name: "gsaglobalsupply.gsa.gov",
            value: 1,
          },
          {
            name: "usmcservmart.gsa.gov",
            value: 1,
          },
          {
            name: "dhsadvantage.gsa.gov",
            value: 1,
          },
          {
            name: "afadvantage.gov",
            value: 1,
          },
          {
            name: "usdaadvantage.gsa.gov",
            value: 1,
          },
          {
            name: "vaadvantage.gsa.gov",
            value: 1,
          },
        ],
      },
      {
        name: "Credit Card",
        children: [
          {
            name: "smartpay.gsa.gov",
            value: 1,
          },
          {
            name: "training.smartpay.gsa.gov",
            value: 1,
          },
          {
            name: "spdatawarehouse.gsa.gov",
            value: 1,
          },
          {
            name: "epay.fas.gsa.gov",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Contracting",
    children: [
      {
        name: "Contract",
        children: [
          {
            name: "contractdirectory.gov",
            value: "1",
          },
          {
            name: "eoffer.gsa.gov",
            value: "1",
          },
          {
            name: "fpds.gov",
            value: "1",
          },
          {
            name: "sam.gov",
            value: "1",
          },
          {
            name: "vsc.gsa.gov",
            value: "1",
          },
          {
            name: "mcm.fas.gsa.gov",
            value: "1",
          },
          {
            name: "portal.eos.gsa.gov",
            value: "1",
          },
          {
            name: "recycling.gsa.gov",
            value: "1",
          },
          {
            name: "scopereview.gsa.gov",
            value: "1",
          },
          {
            name: "srp.fas.gsa.gov",
            value: "1",
          },
          {
            name: "tscportal.fas.gsa.gov",
            value: "1",
          },
        ],
      },
      {
        name: "Contractor",
        children: [
          {
            name: "cpars.gov",
            value: 1,
          },
          {
            name: "eoffer.gsa.gov",
            value: 1,
          },
          {
            name: "fapiis.gov",
            value: 1,
          },
          {
            name: "fsrs.gov",
            value: 1,
          },
          {
            name: "gsaelibrary.gsa.gov",
            value: 1,
          },
          {
            name: "sam.gov",
            value: 1,
          },
          {
            name: "fedpay.gsa.gov",
            value: 1,
          },
          {
            name: "mcm.fas.gsa.gov",
            value: 1,
          },
        ],
      },
      {
        name: "Subcontractor",
        children: [
          {
            name: "esrs.gov",
            value: 1,
          },
          {
            name: "fsrs.gov",
            value: 1,
          },
        ],
      },
      {
        name: "Modification",
        children: [
          {
            name: "eoffer.gsa.gov",
            value: 1,
          },
          {
            name: "mcm.fas.gsa.gov",
            value: 1,
          },
        ],
      },
      {
        name: "Vendor",
        children: [
          {
            value: 1,
            name: "itvmo.gsa.gov",
          },
          {
            value: 1,
            name: "financeweb.gsa.gov",
          },
          {
            value: 1,
            name: "marketplace.fedramp.gov",
          },
          {
            value: 1,
            name: "autovendor.fas.gsa.gov",
          },
          {
            value: 1,
            name: "tscportal.fas.gsa.gov",
          },
        ],
      },
      {
        name: "Contract Performance",
        children: [
          {
            value: 1,
            name: "cpars.gov",
          },
          {
            value: 1,
            name: "esrs.gov",
          },
          {
            value: 1,
            name: "fapiis.gov",
          },
        ],
      },
    ],
  },
  {
    name: "Selling",
    children: [
      {
        name: "Disposal",
        children: [
          {
            value: 1,
            name: "",
          },
          {
            value: 1,
            name: "gsaxcess.gov",
          },
          {
            value: 1,
            name: "autoauctions.gsa.gov",
          },
          {
            value: 1,
            name: "computersforlearning.gov",
          },
          {
            value: 1,
            name: "gsaxcesspractice.fas.gsa.gov",
          },
          {
            value: 1,
            name: "gsaauctions.gov",
          },
          {
            value: 1,
            name: "mysales.fas.gsa.gov",
          },
          {
            value: 1,
            name: "property.reporting.gov",
          },
        ],
      },
      {
        name: "Marketplace/Auction",
        children: [
          {
            value: 1,
            name: "gsaxcess.gov",
          },
          {
            value: 1,
            name: "autoauctions.gsa.gov",
          },
          {
            value: 1,
            name: "realestatesales.gov",
          },
          {
            value: 1,
            name: "gsaauctions.gov",
          },
        ],
      },
      {
        name: "Excess",
        children: [
          {
            value: 1,
            name: "computersforlearning.gov",
          },
          {
            value: 1,
            name: "disposal.gsa.gov",
          },
          {
            value: 1,
            name: "gsaxcesspractice.fas.gsa.gov",
          },
          {
            value: 1,
            name: "arm.fas.gsa.gov",
          },
          {
            value: 1,
            name: "fleet.fas.gsa.gov",
          },
          {
            value: 1,
            name: "mysales.fas.gsa.gov",
          },
        ],
      },
    ],
  },
  {
    name: "Policy/Regulation",
    children: [
      {
        name: "General Acquisition",
        children: [
          {
            value: 1,
            name: "accessibility.18f.gov",
          },
          {
            value: 1,
            name: "accessibility.digital.gov",
          },
          {
            value: 1,
            name: "section508.gov",
          },
        ],
      },
      {
        name: "Regulation",
        children: [
          {
            value: 1,
            name: "acquisition.gov",
          },
          {
            value: 1,
            name: "atf-eregs.18f.gov",
          },
          {
            value: 1,
            name: "pra.digital.gov",
          },
          {
            value: 1,
            name: "labs.gsa.gov",
          },
          {
            value: 1,
            name: "designsystem.digital.gov",
          },
          {
            value: 1,
            name: "regulations.gov",
          },
          {
            value: 1,
            name: "rocis.gov",
          },
          {
            value: 1,
            name: "dashboard.data.gov",
          },
          {
            value: 1,
            name: "fdms.gov",
          },
          {
            value: 1,
            name: "training.rocis.gov",
          },
        ],
      },
      {
        name: "IT Security",
        children: [
          {
            value: 1,
            name: "devicepki.idmanagement.gov",
          },
          {
            value: 1,
            name: "fedramp.gov",
          },
          {
            value: 1,
            name: "https.cio.gov",
          },
        ],
      },
      {
        name: "Open Data",
        children: [
          {
            value: 1,
            name: "open.gsa.gov",
          },
          {
            value: 1,
            name: "open.usa.gov",
          },
          {
            value: 1,
            name: "data.gov",
          },
          {
            value: 1,
            name: "dashboard.data.gov",
          },
        ],
      },
      {
        name: "IT Regulation",
        children: [
          {
            value: 1,
            name: "management.cio.gov",
          },
          {
            value: 1,
            name: "code.gov",
          },
          {
            value: 1,
            name: "mobile.reginfo.gov",
          },
          {
            value: 1,
            name: "reginfo.gov",
          },
          {
            value: 1,
            name: "training.reginfo.gov",
          },
        ],
      },
    ],
  },
  {
    name: "FAS and PBS Core Offerings",
    children: [
      {
        name: "Fleet",
        children: [
          {
            value: 1,
            name: "drivethru.gsa.gov",
          },
          {
            value: 1,
            name: "fleet.gsa.gov",
          },
          {
            value: 1,
            name: "amp.fas.gsa.gov",
          },
          {
            value: 1,
            name: "arm.fas.gsa.gov",
          },
          {
            value: 1,
            name: "autochoice.fas.gsa.gov",
          },
          {
            value: 1,
            name: "fleet.fas.gsa.gov",
          },
          {
            value: 1,
            name: "str.gsa.gov",
          },
          {
            value: 1,
            name: "vehicledispatch.fas.gsa.gov",
          },
        ],
      },
      {
        name: "Travel",
        children: [
          {
            value: 1,
            name: "reporting.gov",
          },
          {
            value: 1,
            name: "cpsearch.fas.gsa.gov",
          },
          {
            value: 1,
            name: "travel.reporting.gov",
          },
        ],
      },
      {
        name: "Real Property/ Building",
        children: [
          {
            value: 1,
            name: "courtsweb.gsa.gov",
          },
          {
            value: 1,
            name: "disposal.gsa.gov",
          },
          {
            value: 1,
            name: "frpg.gov",
          },
          {
            value: 1,
            name: "lop.gsa.gov",
          },
          {
            value: 1,
            name: "pbs-billing.gsa.gov",
          },
          {
            value: 1,
            name: "realestatesales.gov",
          },
          {
            value: 1,
            name: "realpropertyprofile.gov",
          },
          {
            value: 1,
            name: "ret.gsa.gov",
          },
          {
            value: 1,
            name: "sftool.gov",
          },
        ],
      },
    ],
  },
  {
    name: "Guidance",
    children: [
      {
        name: "General Guidance",
        children: [
          {
            value: 1,
            name: "eng-hiring.18f.gov",
          },
          {
            value: 1,
            name: "federation.data.gov",
          },
          {
            value: 1,
            name: "gsa.gov",
          },
          {
            value: 1,
            name: "product-guide.18f.gov",
          },
        ],
      },
      {
        name: "Acquisition Guidance",
        children: [
          {
            value: 1,
            name: "navigator.gsa.gov",
          },
          {
            value: 1,
            name: "techfarhub.cio.gov",
          },
          {
            value: 1,
            name: "vsc.gsa.gov",
          },
          {
            value: 1,
            name: "cic.gsa.gov",
          },
          {
            value: 1,
            name: "idmanagement.gov",
          },
        ],
      },
      {
        name: "IT Guidance",
        children: [
          {
            value: 1,
            name: "fedramp.gov",
          },
          {
            value: 1,
            name: "engineering.18f.gov",
          },
          {
            value: 1,
            name: "developers.login.gov",
          },
        ],
      },
      {
        name: "Accessibility Guidance",
        children: [
          {
            value: 1,
            name: "accessibility.18f.gov",
          },
          {
            value: 1,
            name: "accessibility.digital.gov",
          },
          {
            value: 1,
            name: "section508.gov",
          },
        ],
      },
      {
        name: "Real Property Guidance",
        children: [
          {
            value: 1,
            name: "sftool.gov",
          },
          {
            value: 1,
            name: "frpg.gov",
          },
        ],
      },
      {
        name: "Policy Guidance",
        children: [
          {
            value: 1,
            name: "management.cio.gov",
          },
          {
            value: 1,
            name: "code.gov",
          },
          {
            value: 1,
            name: "childtaxcredit.gov",
          },
          {
            value: 1,
            name: "https.cio.gov",
          },
        ],
      },
      {
        name: "IT Project Guidance",
        children: [
          {
            value: 1,
            name: "derisking-guide.18f.gov",
          },
          {
            value: 1,
            name: "agile.18f.gov",
          },
          {
            value: 1,
            name: "tech.gsa.gov",
          },
        ],
      },
      {
        name: "Human-centered Design Guidance",
        children: [
          {
            value: 1,
            name: "content-guide.18f.gov",
          },
          {
            value: 1,
            name: "design.login.gov",
          },
          {
            value: 1,
            name: "designsystem.digital.gov",
          },
          {
            value: 1,
            name: "digital.gov",
          },
          {
            value: 1,
            name: "labs.usa.gov",
          },
          {
            value: 1,
            name: "methods.18f.gov",
          },
          {
            value: 1,
            name: "playbook.cio.gov",
          },
          {
            value: 1,
            name: "plainlanguage.gov",
          },
          {
            value: 1,
            name: "public-sans.digital.gov",
          },
          {
            value: 1,
            name: "ux-guide.18f.gov",
          },
        ],
      },
      {
        name: "Performance Improvement Guidance",
        children: [
          {
            value: 1,
            name: "pic.gov",
          },
          {
            value: 1,
            name: "evaluation.gov",
          },
        ],
      },
      {
        name: "Authentication Guidance",
        children: [
          {
            value: 1,
            name: "idmanagement.gov",
          },
          {
            value: 1,
            name: "playbooks.idmanagement.gov",
          },
        ],
      },
    ],
  },
  {
    name: "Promoting an Organization or Program",
    children: [
      {
        name: "General Marketing",
        children: [
          { value: 1, name: "18f.gsa.gov" },
          { value: 1, name: "aas.gsa.gov" },
          { value: 1, name: "digitalcorps.gsa.gov" },
          { value: 1, name: "ussm.gsa.gov" },
          { value: 1, name: "brand.18f.gov" },
          { value: 1, name: "blog.usa.gov" },
          { value: 1, name: "madeinamerica.gov" },
          { value: 1, name: "cfo.gov" },
          { value: 1, name: "join.tts.gsa.gov" },
          { value: 1, name: "connect.usa.gov" },
          { value: 1, name: "cio.gov" },
          { value: 1, name: "cloud.gov" },
          { value: 1, name: "conectate.gobiernousa.gov" },
          { value: 1, name: "portfolios.18f.gov" },
          { value: 1, name: "tmf.cio.gov" },
          { value: 1, name: "search.gov" },
          { value: 1, name: "devicepki.idmanagement.gov" },
          { value: 1, name: "federalist.18f.gov" },
          { value: 1, name: "fai.gov" },
          { value: 1, name: "fedramp.gov" },
          { value: 1, name: "feedback.usa.gov" },
          { value: 1, name: "fellows-in-innovation.pif.gov" },
          { value: 1, name: "gsa.gov" },
          { value: 1, name: "oes.gsa.gov" },
          { value: 1, name: "login.gov" },
          { value: 1, name: "product-guide.18f.gov" },
          { value: 1, name: "presidentialinnovationfellows.gov" },
          { value: 1, name: "strategy.data.gov" },
          { value: 1, name: "tech.gsa.gov" },
          { value: 1, name: "data.gov" },
          { value: 1, name: "partners.login.gov" },
          { value: 1, name: "recycling.gsa.gov" },
        ],
      },
      {
        name: "Hiring",
        children: [
          { value: 1, name: "digitalcorps.gsa.gov" },
          { value: 1, name: "join.tts.gsa.gov" },
          { value: 1, name: "eng-hiring.18f.gov" },
          { value: 1, name: "fellows-in-innovation.pif.gov" },
          { value: 1, name: "presidentialinnovationfellows.gov" },
        ],
      },
      {
        name: "Committee/ Commission",
        children: [
          { value: 1, name: "facadatabase.gov" },
          { value: 1, name: "400yaahc.gov" },
          { value: 1, name: "saferfederalworkforce.gov" },
          { value: 1, name: "thenamingcommission.gov" },
          { value: 1, name: "fpc.gov" },
          { value: 1, name: "pic.gov" },
          { value: 1, name: "evaluation.gov" },
          { value: 1, name: "cdo.gov" },
        ],
      },
      {
        name: "Portal",
        children: [
          { value: 1, name: "apps.ocfo.gsa.gov" },
          { value: 1, name: "corporateapps.gsa.gov" },
          { value: 1, name: "reporting.gov" },
          { value: 1, name: "financeweb.gsa.gov" },
          { value: 1, name: "finance.ocfo.gsa.gov" },
          { value: 1, name: "fleet.gsa.gov" },
          { value: 1, name: "data.gov" },
          { value: 1, name: "fbohome.sam.gov" },
          { value: 1, name: "extportal.pbs.gsa.gov" },
          { value: 1, name: "fmitservices-external.gsa.gov" },
          { value: 1, name: "gsac0.fas.gsa.gov" },
        ],
      },
    ],
  },
  {
    name: "data",
    children: [
      {
        name: "Inventory",
        children: [
          { value: 1, name: "usdigitalregistry.digitalgov.gov" },
          { value: 1, name: "api.data.gov" },
          { value: 1, name: "touchpoints.digital.gov" },
          { value: 1, name: "catalog.data.gov" },
          { value: 1, name: "facadatabase.gov" },
          { value: 1, name: "fedspecs.gsa.gov" },
          { value: 1, name: "gsaelibrary.gsa.gov" },
          { value: 1, name: "fpds.gov" },
          { value: 1, name: "regulations.gov" },
          { value: 1, name: "sam.gov" },
          { value: 1, name: "resources.data.gov" },
          { value: 1, name: "marketplace.fedramp.gov" },
          { value: 1, name: "courtsweb.gsa.gov" },
          { value: 1, name: "dashboard.data.gov" },
          { value: 1, name: "fairs.reporting.gov" },
          { value: 1, name: "fdms.gov" },
          { value: 1, name: "fleet.fas.gsa.gov" },
          { value: 1, name: "gsa.folio.ecpic.gov" },
          { value: 1, name: "mysales.fas.gsa.gov" },
          { value: 1, name: "realpropertyprofile.gov" },
          { value: 1, name: "travel.reporting.gov" },
        ],
      },
      {
        name: "Publishing Data",
        children: [
          { value: 1, name: "rocis.gov" },
          { value: 1, name: "fdms.gov" },
          { value: 1, name: "gsa.folio.ecpic.gov" },
          { value: 1, name: "mysales.fas.gsa.gov" },
          { value: 1, name: "portal.eos.gsa.gov" },
          { value: 1, name: "property.reporting.gov" },
          { value: 1, name: "realpropertyprofile.gov" },
          { value: 1, name: "srp.fas.gsa.gov" },
          { value: 1, name: "training.rocis.gov" },
          { value: 1, name: "travel.reporting.gov" },
          { value: 1, name: "tscportal.fas.gsa.gov" },
        ],
      },
      {
        name: "Open Data",
        children: [
          { value: 1, name: "open.gsa.gov" },
          { value: 1, name: "open.usa.gov" },
          { value: 1, name: "data.gov" },
          { value: 1, name: "dashboard.data.gov" },
        ],
      },
      {
        name: "Analysis/Analytics",
        children: [
          { value: 1, name: "analytics.usa.gov" },
          { value: 1, name: "d2d.gsa.gov" },
          { value: 1, name: "digitaldashboard.gov" },
          { value: 1, name: "federation.data.gov" },
          { value: 1, name: "spdatawarehouse.gsa.gov" },
        ],
      },
      {
        name: "Data Sharing",
        children: [
          { value: 1, name: "api.data.gov" },
          { value: 1, name: "federation.data.gov" },
          { value: 1, name: "open.gsa.gov" },
          { value: 1, name: "open.usa.gov" },
        ],
      },
    ],
  },
  {
    name: "Budgeting and Accounting",
    children: [
      {
        name: "Budgeting/ Investment",
        children: [
          { value: 1, name: "financeweb.gsa.gov" },
          { value: 1, name: "gsa.folio.ecpic.gov" },
          { value: 1, name: "finance.ocfo.gsa.gov" },
        ],
      },
      {
        name: "Payment/ Invoicing",
        children: [
          { value: 1, name: "paymentaccuracy.gov" },
          { value: 1, name: "apps.ocfo.gsa.gov" },
          { value: 1, name: "financeweb.gsa.gov" },
          { value: 1, name: "tams.gsa.gov" },
          { value: 1, name: "fedpay.gsa.gov" },
        ],
      },
    ],
  },
  {
    name: "Miscellaneous",
    children: [
      {
        name: "Federal Performance",
        children: [
          { value: 1, name: "pic.gov" },
          { value: 1, name: "evaluation.gov" },
        ],
      },
      {
        name: "External Partner",
        children: [
          { value: 1, name: "mobile.reginfo.gov" },
          { value: 1, name: "reginfo.gov" },
          { value: 1, name: "sdg.data.gov" },
          { value: 1, name: "usmcservmart.gsa.gov" },
          { value: 1, name: "cic.gsa.gov" },
          { value: 1, name: "slc.gsa.gov" },
          { value: 1, name: "courtsweb.gsa.gov" },
          { value: 1, name: "dhsadvantage.gsa.gov" },
          { value: 1, name: "afadvantage.gov" },
          { value: 1, name: "usdaadvantage.gsa.gov" },
          { value: 1, name: "vaadvantage.gsa.gov" },
          { value: 1, name: "training.reginfo.gov" },
        ],
      },
      {
        name: "Crowdsourcing",
        children: [
          { value: 1, name: "citizenscience.gov" },
          { value: 1, name: "10x.gsa.gov" },
          { value: 1, name: "regulations.gov" },
        ],
      },
    ],
  },
];

const result = flatten(data);
