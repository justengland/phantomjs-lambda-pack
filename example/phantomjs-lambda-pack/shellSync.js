var execSync = require('child_process').execSync;

var BUILD_DIRECTORY = '/tmp/build';
var COMMAND_DELIMITER = ';';


var isWindows = /^win/.test(process.platform);

module.exports = shell;

function shell(command, cwd) {
    console.log('shellSync:', command);


    // var phantomjs = require('phantomjs-prebuilt')
    // var binPath = phantomjs.path;
    //
    // var childArgs = [
    //     path.join(__dirname, 'phantomjs-script.js'),
    //     'some other argument (passed to phantomjs script)'
    // ]
    
    const options = {};
    const env = process.env;
    env.npm_config_cache ='/tmp/.npm'
    options.cwd = cwd;
    options.env = env;

    return execSync(command, options).toString();
}

//// Tests
// console.log(shellSync('npm install phantomjs-prebuilt', '.'));
//shellSync('npm install; npm run test1', '.', function() { console.log('test finished') });