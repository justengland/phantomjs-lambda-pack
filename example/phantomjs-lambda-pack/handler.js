'use strict';

// const path = require('path');
// const childProcess = require('child_process');
// const phantomjs = require('phantomjs-prebuilt');
// const binPath = phantomjs.path;
// const shellSync = require('./shellSync');
const fs = require('fs');

const pack = require('phantomjs-lambda-pack');
const exec = pack.exec;

module.exports.handler = function(event, context, onComplete) {

  exec('-v', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log(`phantom version: ${stdout}`);
    console.log(`Should have no error: ${stderr}`);

    onComplete(error, 'fin!!');
  });

};
