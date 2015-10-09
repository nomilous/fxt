var os = require('os');

module.exports = function(fn) {

  var lines = fn.toString().split(os.EOL);
  var indent = 999;

  lines.pop();   // function() {/*
  lines.shift(); // */}

  return lines

  .map(function(line) {
    var m = line.match(/^(\s*)/);
    if (m && m[0].length !== 0 && m[0].length < indent) indent = m[0].length;
    return line;
  })

  .map(function(line) {
    return line.substr(indent);
  })

  .join(os.EOL)

}
