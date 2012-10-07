var watch = require('watch'),
    exec = require('child_process').exec;

function shopifyWatcher(path) {
  watch.watchTree(path, {ignoreDotFiles: true}, function(file, curr, prev) {
    if (typeof file === 'string') {
      var matches = file.match(new RegExp('^' + path + '\/([^]+)')) || [],
          pathname = matches[1] || '';

      if (pathname && pathname[0] !== '.' && !/(.*)\/\./.test(pathname) && !/^node_modules/.test(pathname)) {
        console.log('theme upload ' + pathname);
        exec('theme upload ' + pathname, function(err, stdout, stderr) {
          if (err) {
            console.log(err);
          } else {
            console.log(stdout);
          }
        })
      }
    }
  });
}

module.exports = exports = shopifyWatcher;

