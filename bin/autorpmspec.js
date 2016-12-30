#! /usr/bin/env node

var path = require('path')
var program = require('commander')

var commandPkg = require('../package')

var cwd = process.cwd()

try {
  var projectPkg = require(path.resolve(cwd, './package.json'))
} catch (err) {
  console.error('Run within a NodeJS project directory')
  process.exit(1)
}

program
  .version(commandPkg.version)
  .option('-r --release <release>', 'Set release number')
  .option('-o --output <build>', 'Set output directory')
  .option('-n --name <name>', 'Set package name')
  .parse(process.argv)

// var name = program.name instanceof Function ? undefined : program.name

console.log(JSON.stringify(projectPkg, null, 2))
