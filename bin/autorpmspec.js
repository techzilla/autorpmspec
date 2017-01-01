#! /usr/bin/env node

var path = require('path')
var program = require('commander')
var mixinDeep = require('mixin-deep')

var commandPkg = require('../package')
var prepare = require('../lib/prepare')
var archive = require('../lib/archive')
var batch = require('../lib/batch')

var workingDir = process.cwd()

try {
  var projectPkg = require(path.resolve(workingDir, './package.json'))
} catch (err) {
  console.error('Run within a NodeJS project directory')
  process.exit(1)
}

program
  .version(commandPkg.version)
  .description('Generate an RPM Spec from a NodeJS package')
  .option('-o, --output <value>', 'Set output directory', 'build')
  .option('-r, --release <value>', 'Set release number', /^(\d+)$/, '1')
  .option('-n, --name <name>', 'Set package name', projectPkg.name)
  .parse(process.argv)

var buildDir = path.resolve(workingDir, program.output)

var processPkg = {
  'name': program.name,
  'release': program.release
}

var basePkg = {
  'licence': 'UNLICENSED',
  'spec': {
    'username': projectPkg.name,
    'groupname': projectPkg.name
  }
}

var specPkg = mixinDeep(basePkg, projectPkg, processPkg)

prepare(buildDir)
archive(workingDir, buildDir, specPkg)
batch(buildDir, specPkg)

