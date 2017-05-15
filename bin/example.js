var FsLogger = require('./../lib/fslogger');
var tmpdir = require('os').tmpdir();

var fslogger;
try {
  fslogger = new FsLogger(tmpdir, 'Drivelogs');
} catch (err) {
  return console.log(err.message);
}

// Set the log level
fslogger.setLogLevel(3);

// Handle any errors in the logger
fslogger.on('error', function(err) {
  console.log(err.message);
});

// Log data
setInterval(function() {
  fslogger.log(3, Date.now(), "I'm a message!!");
}, 7200000);


// Check to delete old files every 2 hours
setInterval(function() {
  FsLogger.prototype._deleteOldFiles(tmpdir,
  function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
}, 7200000);
