var watch = require('watch'),
    root = __dirname;

function shopifyWatcher(path) {
  watch.watchTree(path, function(file, curr, prev) {
    if (typeof file === 'string') {
      var matches = file.match(new RegExp('^' + root + '\/([^]+)')) || [],
          pathname = matches[1] || '';

      if (pathname && pathname[0] !== '.') {
        console.log(pathname);
      }
    }
  });
}

module.exports = exports = shopifyWatcher;
