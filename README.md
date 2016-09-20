# PhantomJS wrapper for AWS Lambda
> Simplify the usage of [PhantomJS](http://phantomjs.org/) on [AWS Lambda](https://aws.amazon.com/lambda/)

```bash
$ npm install phantomjs-lambda-pack --save
```

## Usage
```js
'use strict';
const phantomjsLambdaPack = require('phantomjs-lambda-pack');
const exec = phantomjsLambdaPack.exec;

exports.handler = (event, context, callback) => {
    exec('-v', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }

        console.log(`phantom version: ${stdout}`);
        console.log(`Should have no error: ${stderr}`);

        callback(error, 'fin!!');
    });
};
```
### To Do
1. Support phantomjs versioning, currently it just uses the latest of [phatomjs-prebuilt](https://www.npmjs.com/package/phantomjs-prebuilt)
1. Better support in the local environments, currently phantomjs needs to be installed in the path
1. Check if the lambda memory requirements are met.

### Notes
Use more memory at least 1024 and a timeout greater than 180 seconds
Make sure to zip up the entire directory and ship it

### Example
[Basic Version Check](https://github.com/justengland/phantomjs-lambda-pack/tree/master/example) using [Serverless](http://serverless.com/)

### Thanks
[PhantomJS](http://phantomjs.org/)

[AWS Lambda](https://aws.amazon.com/lambda/)

[PhantomJS-Prebuilt](https://github.com/Medium/phantomjs)

[Serverless](http://serverless.com/)


