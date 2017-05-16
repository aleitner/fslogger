
'use strict';

var expect = require('chai').expect;
var utils = require('../lib/utils');
var proxyquire = require('proxyquire');
var sinon = require('sinon');
var os = require('os');
var tmpdir = os.tmpdir();
var FsLogger = require('./../lib/fslogger');
var fs = require('fs');

describe('fslogger', function() {

  describe('@constructor', function() {

    var fslogger = new FsLogger(tmpdir, 'butts');

    it('it will set default log level to 3', function() {
      expect(fslogger._loglevel).to.equal(3);
    });

    it('it will set the prefix', function() {
      expect(fslogger._prefix).to.equal('butts_');
    });

    fs.unlinkSync(fslogger._logfile);
  });

});
