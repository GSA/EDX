# edxcli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [edxcli](#edxcli)
<!-- tocstop -->

## Usage

<!-- usage -->
```sh-session
$ npm install -g edx_cli
$ edxcli COMMAND
running command...
$ edxcli (--version)
edx_cli/0.0.0 darwin-x64 node-v16.14.2
$ edxcli --help [COMMAND]
USAGE
  $ edxcli COMMAND
...
```
<!-- usagestop -->

## Commands

<!-- commands -->
* [`edxcli help [COMMAND]`](#edxcli-help-command)
* [`edxcli plugins`](#edxcli-plugins)
* [`edxcli plugins:inspect PLUGIN...`](#edxcli-pluginsinspect-plugin)
* [`edxcli plugins:install PLUGIN...`](#edxcli-pluginsinstall-plugin)
* [`edxcli plugins:link PLUGIN`](#edxcli-pluginslink-plugin)
* [`edxcli plugins:uninstall PLUGIN...`](#edxcli-pluginsuninstall-plugin)
* [`edxcli plugins update`](#edxcli-plugins-update)
* [`edxcli websites`](#edxcli-websites)
* [`edxcli websites fetch SOURCE`](#edxcli-websites-fetch-source)
* [`edxcli websites push`](#edxcli-websites-push)
* [`edxcli websites scan`](#edxcli-websites-scan)
* [`edxcli websites scan bulk`](#edxcli-websites-scan-bulk)

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

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

_See code: [dist/commands/websites/index.ts](https://github.com/gsa/edx/blob/v0.0.0/dist/commands/websites/index.ts)_

## `edxcli websites fetch SOURCE`

Retrieves a list of websites from one or more data sources.

```
USAGE
  $ edxcli websites fetch [SOURCE] [--loglevel error|warn|info|debug] [-o <value>]

ARGUMENTS
  SOURCE  (Site Scanner|Touchpoints) Website list source

FLAGS
  -o, --output=<value>  [default: .] Output directory. Defualts to current directory
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
  -o, --output=<value>  [default: data] Output directory. Defualts to /edxcli/data directory
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
    |all|edx scan]

FLAGS
  -d, --domains=<value>   (required) Comma-separated list of domains to scan.
  -f, --facets=<options>  Comma-separated list of facets to use for the scan. e.g. (-f "screenshot,lighthouse,it
                          metric").
                          <options: | cui banner|screenshot|lighthouse desktop|lighthouse mobile|it performance
                          metric|site scanner|uswds components>
  -o, --output=<value>    Output directory. Defualts to current directory
  -p, --preset=<option>   Run a pre-configured suite of scan facets whose results will be output into a single file.
                          <options: |all|edx scan>
  --[no-]headless         Boolean flag, whether or not to run scans in headless mode. Defaults to true
  --loglevel=<option>     [default: info]
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
```

## `edxcli websites scan bulk`

Scans websites using various modules to capture information about the sites

```
USAGE
  $ edxcli websites scan bulk [--loglevel error|warn|info|debug] [-d Airtable|Touchpoints] [-f <value>] [--headless] [-o
    <value>] [-p |all|edx scan]

FLAGS
  -d, --domains=<option>  Name of the system to pull the list of domains
                          <options: Airtable|Touchpoints>
  -f, --facets=<options>  Comma-separated list of facets to use for the scan. e.g. (-f "screenshot,lighthouse,it
                          metric").
                          <options: | cui banner|screenshot|lighthouse desktop|lighthouse mobile|it performance
                          metric|site scanner|uswds components>
  -o, --output=<value>    Output directory. Defualts to current directory
  -p, --preset=<option>   Run a pre-configured suite of scan facets whose results will be output into a single file.
                          <options: |all|edx scan>
  --[no-]headless         Boolean flag, whether or not to run scans in headless mode. Defaults to true
  --loglevel=<option>     [default: info]
                          <options: error|warn|info|debug>

DESCRIPTION
  Scans websites using various modules to capture information about the sites

EXAMPLES
  $ edxcli websites scan bulk
```
<!-- commandsstop -->

<!-- Updating -->

```sh
yarn run build
yarn run test
yarn run prepack
```
