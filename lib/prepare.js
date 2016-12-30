var path = require('path')
var mkdirp = require('mkdirp')

module.exports = function (dir) {
  mkdirp.sync(path.join(dir, 'SOURCES'), function (err) {
    if (err) console.error(err)
  })

  mkdirp.sync(path.join(dir, 'SPECS'), function (err) {
    if (err) console.error(err)
  })
}
