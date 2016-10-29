'use strict';

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

    console.log(`phantomjsPrebuiltVersion: ${pack.phantomjsPrebuiltVersion}`);

    onComplete(error, 'fin!!');
  });

};
