# Scanner

**ARCHIVED** Note, scanner is in an archived state as of v0.0.13. Subsequent updates will be made to [edxcli](https://github.com/GSA/EDX/tree/main/Tools/edxcli)

- [Scanner](#scanner)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Running Scripts](#running-scripts)
    - [Scan](#scan)
    - [Output to CSV](#output-to-csv)
    - [Organize Outputs](#organize-outputs)
    - [Get Evaluation Scores](#get-evaluation-scores)
  - [Release Notes](#release-notes)
    - [0.0.12](#0012)
    - [0.0.11](#0011)
    - [0.0.10](#0010)
    - [0.0.9](#009)
    - [0.0.8](#008)
    - [0.0.7](#007)
    - [0.0.6](#006)
    - [0.0.5](#005)
    - [0.0.4](#004)
    - [0.0.3](#003)
    - [0.0.2](#002)
    - [0.0.1](#001)

## Requirements

- Node >=14.8.0
- api.data.gov API key (https://api.data.gov/)

## Installation

Install all node dependencies:

`npm i`

Create a .env file and add api.data.gov key.

`echo "API_KEY=" >> .env`
`echo "AIRTABLE_API_KEY=" >> .env`

Build

`npm run build`

## Running Scripts

### Scan

`npm run scan`

Performs scans of websites using Puppeteer and saves relevant output in the `data/` directory. Output is organized by date of scan, website domain name, and a unique hash (md5) of the page which was scanned. For example:

```
data
│
└───20220131
│   │   mysite.gsa.gov_3888d0bdca29e1ee9b4e8bf31af13a33.json
│   │   mysite.gsa.gov_desktop_3888d0bdca29e1ee9b4e8bf31af13a33.png
│   │   mysite.gsa.gov_mobile_3888d0bdca29e1ee9b4e8bf31af13a33.png
│   │   anothersite.gsa.gov_eef43cee08182ff071924710f380e8d4.json
│   │   anothersite.gsa.gov_desktop_eef43cee08182ff071924710f380e8d4.png
│   │   anothersite.gsa.gov_mobile_eef43cee08182ff071924710f380e8d4.png
│   │   ...
│
└───20211220
│   │   mysite.gsa.gov_49f19d2991daf234309a99566370019a.json
│   │   mysite.gsa.gov_desktop_49f19d2991daf234309a99566370019a.png
│   │   mysite.gsa.gov_mobile_49f19d2991daf234309a99566370019a.png
```

### Output to CSV

`npm run condense -- -f {foldername}`

Recursively consumes specified folder of data and organizes the results in a CSV file.

### Organize Outputs

`npm run move -- -f {folder name} -d {destination folder}`

Consumes an array of directory names and copies files for a given site into their own folder. Using the example output directory from `scan`:

```
data
│
└───20220131
│   │   mysite.gsa.gov_3888d0bdca29e1ee9b4e8bf31af13a33.json
│   │   mysite.gsa.gov_desktop_3888d0bdca29e1ee9b4e8bf31af13a33.png
│   │   mysite.gsa.gov_mobile_3888d0bdca29e1ee9b4e8bf31af13a33.png
│   │   anothersite.gsa.gov_eef43cee08182ff071924710f380e8d4.json
│   │   anothersite.gsa.gov_desktop_eef43cee08182ff071924710f380e8d4.png
│   │   anothersite.gsa.gov_mobile_eef43cee08182ff071924710f380e8d4.png
│   │   ...
│
└───20211220
│   │   mysite.gsa.gov_49f19d2991daf234309a99566370019a.json
│   │   mysite.gsa.gov_desktop_49f19d2991daf234309a99566370019a.png
│   │   mysite.gsa.gov_mobile_49f19d2991daf234309a99566370019a.png
```

Copies of the files would be reorganized as:

```
data
│
└───mover
│   │
│   └───mysite.gsa.gov
│   │   │
│   │   │   mysite.gsa.gov_3888d0bdca29e1ee9b4e8bf31af13a33.json
│   │   │   mysite.gsa.gov_desktop_3888d0bdca29e1ee9b4e8bf31af13a33.png
│   │   │   mysite.gsa.gov_mobile_3888d0bdca29e1ee9b4e8bf31af13a33.png
│   │
│   └───anothersite.gsa.gov
│   │   │
│   │   │   anothersite.gsa.gov_eef43cee08182ff071924710f380e8d4.json
│   │   │   anothersite.gsa.gov_desktop_eef43cee08182ff071924710f380e8d4.png
│   │   │   anothersite.gsa.gov_mobile_eef43cee08182ff071924710f380e8d4.png
```

### Get Evaluation Scores

Retrieves website data from Airtable and saves results as .yml files. Resulting files are used to inform Statuscard charts available at [gsa.github.io/EDX](https://gsa.github.io/EDX/charts.html)

`npm run get:evals`

## Release Notes

All scan contain a `scanVersion` attribute which ties back to the version number listed in package.json. Each time an update has been made to the logic of the scans, the version number gets bumped. Doing so allows all teams to see the criteria at the time of the scan. We expect to update the version regularly so as to provide the most complete and accurate picture of websites at GSA.

### 0.0.12

Added 'send us an email' to allowed list for "Contact Us" IT Performance Metric.

### 0.0.11

Added 'email' and 'get support' to allowed list for "Contact Us" IT Performance Metric.

### 0.0.10

Added capability to check for custom privacy policy links as well as identify sites who are on the customPrivacyPolicy allowed list.

### 0.0.9

Updated criteria used when looking for a Search box on a page.

### 0.0.8

Added logic to perform an initial check of a given site and report errors such as DNS not resolving. This information is fed into a new scanStatus attribute which captures any errors or success messages.

Added two new sites to websites-metadata; slc.gsa.gov and pbs-billing.gsa.gov.

Bug fix: Switched dap and search regex options to type of "other" so as not to be included in the more robust required links evaluation.

### 0.0.7

Added support for urls which point at Drupal node numbers and ultimately resolve to the correct page.

### 0.0.6

[Issue #210](https://github.com/gsa/edx/issues/210) - GSA Digital Council met on March 22, 2022 to discuss the Search requirement on websites. Initial criteria was agreed upon which says that sites with no more than two public facing pages or those listed as an Application in our Touchpoints inventory ((require login and/or registration before content/features can be accessed) should not have the Search requirement imposed.

As a result, a new websites-metadata.js file was created so as to denote which sites meet this criteria. Subsequent attributes were also added to aid the scanning scripts so as to skip over javascript alert() messages, avoid cookie driven popups, or navigate to urls when the root url does not automatically redirect.

### 0.0.5

[Issue #302](https://github.com/gsa/edx/issues/302) - Updated regex criteria for required links. Previous versions assumed that links would point at "https://www" urls when pointing at a url without www is ok too. Added new privacy policy link which redirects to the correct location.

### 0.0.4

[Issue #297](https://github.com/GSA/EDX/pull/297) - Updated criteria for Search IT Performance Metric so as to account for sites using an `aria-label` to denote a search box.

### 0.0.3

[Issue #298](https://github.com/GSA/EDX/pull/298) - Updated Required Links logic to evaluate links which may not have `href` attributes. This occurs in some [Single Page Applications (SPA])](https://developer.mozilla.org/en-US/docs/Glossary/SPA) where navigation takes place through onClick attributes. The new logic navigates clicks links and looks at the resulting destination to make an assessment.

### 0.0.2

[Issue #284](https://github.com/GSA/EDX/pull/284) - Updated logic which informs the IT Performance metric DAP attribute. Prior scans searched for "https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js" to be present on the loaded page. However, many sites self-host the DAP.js file. The Site Scanner team addressed this issue with their code and looks for data passing to Google Analytics (see [https://github.com/GSA/site-scanning-engine/blob/7eecbb740b3d875d16f8b91187477db7945beed6/libs/core-scanner/src/scans/dap.ts#L16](https://github.com/GSA/site-scanning-engine/blob/7eecbb740b3d875d16f8b91187477db7945beed6/libs/core-scanner/src/scans/dap.ts#L16)).

### 0.0.1

Initial version of scanner committed
