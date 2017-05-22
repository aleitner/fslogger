FsLogger
========

Write some logs to the file system bro.

Installation
------------

```
npm install fslogger --save
```

Usage
-----
---

You can work with process specific logfiles by specifying a prefix
```
var fslogger = new FsLogger(logdir, prefix);
```

---
You can adjust the log level by `.setLogLevel()`

```
fslogger.setLogLevel(3);
```
Setting the log level of 1 means that anything that is logged at 2 or greater will not be written to the log file

Log levels:
 - none: 0
 - error: 1
 - warn: 2
 - info: 3
 - debug: 4
 - trace: 5

---
Write to the log file with the following method

```
fslogger.log(loglevel, timestamp, message);
```

Use `fslogger.write()` in order to write a preformatted message to the log file
```
fslogger.write(message);
```

---
Delete old log files
```
FsLogger.prototype._deleteOldFiles(tmpdir,
function(err) {
  if (err) {
    return console.log(err.message);
  }
});
```
