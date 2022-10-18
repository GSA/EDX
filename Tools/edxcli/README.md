# edxcli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [edxcli](#edxcli)
* [Usage](#usage)
* [Commands](#commands)
* [Release Notes](#release-notes)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g edx_cli
$ edxcli COMMAND
running command...
$ edxcli (--version)
edx_cli/0.0.20 darwin-x64 node-v17.9.1
$ edxcli --help [COMMAND]
USAGE
  $ edxcli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`edxcli data condense`](#edxcli-data-condense)
* [`edxcli help [COMMAND]`](#edxcli-help-command)
* [`edxcli plugins`](#edxcli-plugins)
* [`edxcli plugins:install PLUGIN...`](#edxcli-pluginsinstall-plugin)
* [`edxcli plugins:inspect PLUGIN...`](#edxcli-pluginsinspect-plugin)
* [`edxcli plugins:install PLUGIN...`](#edxcli-pluginsinstall-plugin-1)
* [`edxcli plugins:link PLUGIN`](#edxcli-pluginslink-plugin)
* [`edxcli plugins:uninstall PLUGIN...`](#edxcli-pluginsuninstall-plugin)
* [`edxcli plugins:uninstall PLUGIN...`](#edxcli-pluginsuninstall-plugin-1)
* [`edxcli plugins:uninstall PLUGIN...`](#edxcli-pluginsuninstall-plugin-2)
* [`edxcli plugins update`](#edxcli-plugins-update)
* [`edxcli websites`](#edxcli-websites)
* [`edxcli websites fetch SOURCE`](#edxcli-websites-fetch-source)
* [`edxcli websites push`](#edxcli-websites-push)
* [`edxcli websites scan`](#edxcli-websites-scan)
* [`edxcli websites scan bulk`](#edxcli-websites-scan-bulk)

## `edxcli data condense`

Consolidates json output from website scans into CSV files

```
USAGE
  $ edxcli data condense [--loglevel error|warn|info|debug] [-f <value>] [-o <value>] [-p <value>]

FLAGS
  -f, --folders=<value>  List of comma-separated folders within the /data/scans directory.
  -o, --output=<value>   [default: /data/condensedData] Output directory. Defualts to current directory
  -p, --preset=<value>   [default: default] A collection of fields to extract into CSV
  --loglevel=<option>    [default: info]
                         <options: error|warn|info|debug>

DESCRIPTION
  Consolidates json output from website scans into CSV files

EXAMPLES
  $ edxcli data condense

  $ edxcli data condense -f "20220719,20220720"

  $ edxcli data condense -o customDirectory

  $ edxcli data condense -p "lighthouse accessibility"
```

## `edxcli help [COMMAND]`

Display help for edxcli.

```
USAGE
  $ edxcli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for edxcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.14/src/commands/help.ts)_

## `edxcli plugins`

List installed plugins.

```
USAGE
  $ edxcli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ edxcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `edxcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ edxcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ edxcli plugins add

EXAMPLES
  $ edxcli plugins:install myplugin 

  $ edxcli plugins:install https://github.com/someuser/someplugin

  $ edxcli plugins:install someuser/someplugin
```

## `edxcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ edxcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ edxcli plugins:inspect myplugin
```

## `edxcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ edxcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ edxcli plugins add

EXAMPLES
  $ edxcli plugins:install myplugin 

  $ edxcli plugins:install https://github.com/someuser/someplugin

  $ edxcli plugins:install someuser/someplugin
```

## `edxcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ edxcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ edxcli plugins:link myplugin
```

## `edxcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ edxcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ edxcli plugins unlink
  $ edxcli plugins remove
```

## `edxcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ edxcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ edxcli plugins unlink
  $ edxcli plugins remove
```

## `edxcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ edxcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ edxcli plugins unlink
  $ edxcli plugins remove
```

## `edxcli plugins update`

Update installed plugins.

```
USAGE
  $ edxcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `edxcli websites`

Performs a number of operations against lists of websites published by Touchpoints https://github.com/GSA/touchpoints/wiki/API#available-api-endpoints and Site Scanner https://open.gsa.gov/api/site-scanning-api/

```
USAGE
  $ edxcli websites [--loglevel error|warn|info|debug]

FLAGS
  --loglevel=<option>  [default: info]
                       <options: error|warn|info|debug>

DESCRIPTION
  Performs a number of operations against lists of websites published by Touchpoints
  https://github.com/GSA/touchpoints/wiki/API#available-api-endpoints and Site Scanner
  https://open.gsa.gov/api/site-scanning-api/

EXAMPLES
  $ edxcli websites fetch Touchpoints

  $ edxcli websites fetch "Site Scanner"

  $ edxcli websites push

  $ edxcli websites scan

  $ edxcli websites scan bulk
```

_See code: [dist/commands/websites/index.ts](https://github.com/gsa/edx/blob/v0.0.20/dist/commands/websites/index.ts)_

## `edxcli websites fetch SOURCE`

Retrieves a list of websites from one or more data sources.

```
USAGE
  $ edxcli websites fetch [SOURCE] [--loglevel error|warn|info|debug] [-o <value>]

ARGUMENTS
  SOURCE  (Site Scanner|Touchpoints) Website list source

FLAGS
  -o, --output=<value>  [default: data/fetch] Output directory. Defualts to current directory
  --loglevel=<option>   [default: info]
                        <options: error|warn|info|debug>

DESCRIPTION
  Retrieves a list of websites from one or more data sources.

EXAMPLES
  $ edxcli websites fetch "Site Scanner"

  $ edxcli websites fetch Touchpoints -o ~/mydirectory
```

## `edxcli websites push`

Grabs an extract of Touchpoints data and updates or inserts it into Airtable. If the data in Touchpoints matches Airtable, the script will record that an "update" was made but Airtable will not show an updated modified date.

```
USAGE
  $ edxcli websites push [--loglevel error|warn|info|debug] [-o <value>]

FLAGS
  -o, --output=<value>  [default: data/push] Output directory. Defualts to /edxcli/data/push directory
  --loglevel=<option>   [default: info]
                        <options: error|warn|info|debug>

DESCRIPTION
  Grabs an extract of Touchpoints data and updates or inserts it into Airtable. If the data in Touchpoints matches
  Airtable, the script will record that an "update" was made but Airtable will not show an updated modified date.

EXAMPLES
  $ edxcli websites push

  $ edxcli websites push -o ~/mydirectory
```

## `edxcli websites scan`

Scans websites using various facets to capture information about the sites

```
USAGE
  $ edxcli websites scan -d <value> [--loglevel error|warn|info|debug] [-f <value>] [--headless] [-o <value>] [-p
    |all|edx scan] [--auth]

FLAGS
  -d, --domains=<value>      (required) Comma-separated list of domains to scan.
  -f, --facets=<options>...  Comma-separated list of facets to use for the scan. e.g. (-f "screenshot,lighthouse,it
                             metric").
                             <options: | cui banner|screenshot|lighthouse desktop|lighthouse mobile|it performance
                             metric|site scanner|uswds components>
  -o, --output=<value>       Output directory. Defualts to current directory
  -p, --preset=<option>      Run a pre-configured suite of scan facets whose results will be output into a single file.
                             <options: |all|edx scan>
  --auth                     Boolean flag denoting whether or not to prompt for basic auth credentials for the given
                             site. Defaults to false
  --[no-]headless            Boolean flag, whether or not to run scans in headless mode. Defaults to true
  --loglevel=<option>        [default: info]
                             <options: error|warn|info|debug>

DESCRIPTION
  Scans websites using various facets to capture information about the sites

EXAMPLES
  $ edxcli websites scan -d gsa.gov -f screenshot

  $ edxcli websites scan -d buy.gsa.gov -f "screenshot,lighthouse mobile,site scanner" -o ~/some/other/directory

  $ edxcli websites scan -d buy.gsa.gov -f screenshot -o ~/some/other/directory

  $ edxcli websites scan -d sftool.gov -p Performance Metric

  $ edxcli websites scan -d "18f.gsa.gov,buy.gsa.gov,gsa.gov" -p "edx scan" --no-headless

  $ edxcli websites scan -d "18f.gsa.gov" -f "screenshot" --loglevel debug

  $ edxcli websites scan -d "18f.gsa.gov" -f "screenshot" --auth
```

## `edxcli websites scan bulk`

Scans websites using various modules to capture information about the sites

```
USAGE
  $ edxcli websites scan bulk [--loglevel error|warn|info|debug] [-d Airtable|Touchpoints] [-f <value>] [--headless] [-o
    <value>] [-p |all|edx scan] [--resume]

FLAGS
  -d, --domains=<option>     Name of the system to pull the list of domains
                             <options: Airtable|Touchpoints>
  -f, --facets=<options>...  Comma-separated list of facets to use for the scan. e.g. (-f "screenshot,lighthouse,it
                             metric").
                             <options: | cui banner|screenshot|lighthouse desktop|lighthouse mobile|it performance
                             metric|site scanner|uswds components>
  -o, --output=<value>       Output directory. Defualts to current directory
  -p, --preset=<option>      Run a pre-configured suite of scan facets whose results will be output into a single file.
                             <options: |all|edx scan>
  --[no-]headless            Boolean flag, whether or not to run scans in headless mode. Defaults to true
  --loglevel=<option>        [default: info]
                             <options: error|warn|info|debug>
  --resume                   Resumes a previously launched operation. If a local cache file is not found, begins the
                             process from scratch.

DESCRIPTION
  Scans websites using various modules to capture information about the sites

EXAMPLES
  $ edxcli websites scan bulk -d Touchpoints

  $ edxcli websites scan bulk -d Touchpoints --resume
```
<!-- commandsstop -->

<!-- Updating -->

```sh
yarn run build
yarn run test
yarn run prepack
```

<!-- Release Notes -->

# Release Notes

All scan contain a `scanVersion` attribute which ties back to the version number listed in package.json. Each time an update has been made to the logic of the scans, the version number gets bumped. Doing so allows all teams to see the criteria at the time of the scan. We expect to update the version regularly so as to provide the most complete and accurate picture of websites at GSA.

## 0.0.20

pbs-billing.gsa.gov has a public face via https://www.pbs-billing.gsa.gov/users/CheckIfUserExists.aspx, updating metadata to scan the public-page

## 0.0.19

sftool.gov has it's own privacy policy, added it to website-metadata

## 0.0.18

[Issue 556](https://github.com/GSA/EDX/issues/556) - Included new attribute for customFOIA policies. Specifically added to address sites managed by GSA for OMB OIRA (rocis.gov and reginfo.gov).

## 0.0.17

[Issue 573](https://github.com/GSA/EDX/issues/573) - added ability to pass Basic Auth credentials when running a scan

## 0.0.16

[Issue 562](https://github.com/GSA/EDX/issues/562) - updated DAP regex value to cover teams using an updated version of Universal Federated Analytics (GA4) or th legacy version.

## 0.0.15

Added `searchNotReq: true` for vltp.gsa.gov

## 0.0.14

Added `customPrivacyPolicy: true` for code.gov and vote.gov

## 0.0.13

Set "www" prefix for gsa.gov. Transitioned to using edxcli over scanner.

## 0.0.12

Added 'send us an email' to allowed list for "Contact Us" IT Performance Metric.

## 0.0.11

Added 'email' and 'get support' to allowed list for "Contact Us" IT Performance Metric.

## 0.0.10

Added capability to check for custom privacy policy links as well as identify sites who are on the customPrivacyPolicy allowed list.

## 0.0.9

Updated criteria used when looking for a Search box on a page.

## 0.0.8

Added logic to perform an initial check of a given site and report errors such as DNS not resolving. This information is fed into a new scanStatus attribute which captures any errors or success messages.

Added two new sites to websites-metadata; slc.gsa.gov and pbs-billing.gsa.gov.

Bug fix: Switched dap and search regex options to type of "other" so as not to be included in the more robust required links evaluation.

## 0.0.7

Added support for urls which point at Drupal node numbers and ultimately resolve to the correct page.

## 0.0.6

[Issue #210](https://github.com/gsa/edx/issues/210) - GSA Digital Council met on March 22, 2022 to discuss the Search requirement on websites. Initial criteria was agreed upon which says that sites with no more than two public facing pages or those listed as an Application in our Touchpoints inventory ((require login and/or registration before content/features can be accessed) should not have the Search requirement imposed.

As a result, a new websites-metadata.js file was created so as to denote which sites meet this criteria. Subsequent attributes were also added to aid the scanning scripts so as to skip over javascript alert() messages, avoid cookie driven popups, or navigate to urls when the root url does not automatically redirect.

## 0.0.5

[Issue #302](https://github.com/gsa/edx/issues/302) - Updated regex criteria for required links. Previous versions assumed that links would point at "https://www" urls when pointing at a url without www is ok too. Added new privacy policy link which redirects to the correct location.

## 0.0.4

[Issue #297](https://github.com/GSA/EDX/pull/297) - Updated criteria for Search IT Performance Metric so as to account for sites using an `aria-label` to denote a search box.

## 0.0.3

[Issue #298](https://github.com/GSA/EDX/pull/298) - Updated Required Links logic to evaluate links which may not have `href` attributes. This occurs in some [Single Page Applications (SPA])](https://developer.mozilla.org/en-US/docs/Glossary/SPA) where navigation takes place through onClick attributes. The new logic navigates clicks links and looks at the resulting destination to make an assessment.

## 0.0.2

[Issue #284](https://github.com/GSA/EDX/pull/284) - Updated logic which informs the IT Performance metric DAP attribute. Prior scans searched for "https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js" to be present on the loaded page. However, many sites self-host the DAP.js file. The Site Scanner team addressed this issue with their code and looks for data passing to Google Analytics (see [https://github.com/GSA/site-scanning-engine/blob/7eecbb740b3d875d16f8b91187477db7945beed6/libs/core-scanner/src/scans/dap.ts#L16](https://github.com/GSA/site-scanning-engine/blob/7eecbb740b3d875d16f8b91187477db7945beed6/libs/core-scanner/src/scans/dap.ts#L16)).

## 0.0.1

Initial version of scanner committed
