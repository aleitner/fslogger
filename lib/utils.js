
'use strict';

var fs = require('fs');

/**
 * Check if file exists
 * @param {String} file - Path to file
 */
module.exports.existsSync = function(file) {
  try {
    fs.statSync(file);
  } catch(err) {
    return !(err);
  }

  return true;
};
