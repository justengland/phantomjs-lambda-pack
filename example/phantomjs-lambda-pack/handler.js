'use strict';

// const path = require('path');
// const childProcess = require('child_process');
// const phantomjs = require('phantomjs-prebuilt');
// const binPath = phantomjs.path;
// const shellSync = require('./shellSync');
const fs = require('fs');

const pack = require('./lambda-pack');
const exec = pack.exec;



module.exports.handler = function(event, context, onComplete) {

  pack.installPhantom();

  console.log('Number got high');


  exec('-v', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log('Number got high 2');

    console.log(`phantom stdout: ${stdout}`);
    console.log(`phantom stderr: ${stderr}`);

    onComplete(error, {
      shellResult: 'whhhattt',
      //state: packModule.state
    });
  });

};
