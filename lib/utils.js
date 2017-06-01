
'use strict';

var fs = require('fs');

/**
 * Check if file exists
 * @param {String} file - Path to file
 */
function existsSync(file) {
  try {
    fs.statSync(file);
  } catch(err) {
    return false;
  }

  return true;
};

function isAccessibleDir(dir) {
  let fsStat;

  try {
    fsStat = fs.statSync(dir);
  } catch(err) {
    return false;
  }

  return fsStat.isDirectory();
}

module.exports = {
  existsSync: existsSync,
  isAccessibleDir: isAccessibleDir
};
