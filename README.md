# autorpmspec

Generate an RPM Spec from a NodeJS package

## Installation

```
npm install --save autorpmspec
```

## Features

* Generates an RPM Spec
* Creates a [systemd](https://www.freedesktop.org/wiki/Software/systemd/) service


## Usage


### `npm start` script

The systemd service file uses the `npm start` script to start your application.

```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

### Directory Structure

The following directories are used for your application:

|Directory|Purpose|
|---------|-------|
|`/var/lib/:projectName`|application|
|`/var/log/:projectName`|logs|
 the `spec` property inside your existing `package.json` file.

### Dependencies

list the package dependencies in the `requires` array:

```json
{
  "spec": {
    "requires": [
      "vim",
      "screen"
    ]
  }
}
```

```json
{
  "spec": {
    "buildRequires": [
      "python"
    ]
  }
}
```

### Executables

List files and directories that need to be executable:

```json
{
  "spec": {
    "executable": [
      "./other-scripts/my-script.js",
      "./scripts"
    ]
  }
}
```

### Scriptlet

```json
{
  "spec": {
    "pre": [
      "echo example"
    ],
    "post": [
      "echo example"
    ],
    "preun": [
      "echo example"
    ],
    "postun": [
      "echo example"
    ]
  }
}
```

### Environment variable

specify environment variables during startup:

```json
{
  "spec": {
    "environment": {
      "NODE_ENV": "production",
      "NODE_INSTANCE": "%i"
    }
  }
}
```

### Release Number

`--release` flag:

```sh
autorpmspec --release=7
```

### Custom Name

`--name` flag:

```sh
autorpmspec --name=my-cool-api
```
