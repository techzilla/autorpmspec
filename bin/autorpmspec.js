#! /usr/bin/env node

var path = require('path')
var program = require('commander')

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
  .option('-o, --output <value>', 'Set output directory', 'build')
  .option('-r --release <value>', 'Set release number', /^(\d+)$/, '1')
//  .option('-n --name <name>', 'Set package name')
  .parse(process.argv)

// var name = program.name instanceof Function ? undefined : program.name
var buildDir = path.resolve(workingDir, program.output)

prepare(buildDir)

archive(workingDir, buildDir, projectPkg)

batch(buildDir, projectPkg)

// console.log(JSON.stringify(projectPkg, null, 2))

