var fs = require('fs')
var path = require('path')

var handlebars = require('handlebars')

module.exports = function (ddir, pkg) {
  var templateFile = fs.readFileSync(path.resolve(__dirname, '../templates/spec.mustache'), 'utf-8')
  var template = handlebars.compile(templateFile)

  fs.writeFileSync(path.join(ddir, 'SPECS/', pkg.name + '.spec'), template(pkg))
}
