var tarfs = require('tar-fs')
var fs = require('fs')
var zlib = require('zlib')
var path = require('path')

var IGNORE_REGEX = /build|SOURCES|SPECS|RPMS|SRPMS|\.git/

module.exports = function (sdir, ddir, pkg) {
  tarfs.pack(sdir, {
    ignore: function (name) {
      return IGNORE_REGEX.test(path.relative(sdir, name))
    }
  }).pipe(zlib.createGzip()).pipe(fs.createWriteStream(path.join(ddir, 'SOURCES/', pkg.name + '-' + pkg.version + '.tar.gz')))
}

