var exec = require('child_process').exec;

var BUILD_DIRECTORY = '/tmp/build';
var NPM_SH_COMMAND = 'sh ' + BUILD_DIRECTORY + '/node_modules/.bin/npm ';
var NPM_WINDOES_COMMAND = BUILD_DIRECTORY + '/node_modules/.bin/npm.exe ';
var COMMAND_DELIMITER = ';';

var isWindows = /^win/.test(process.platform);
var npmCommand = isWindows ? NPM_WINDOES_COMMAND : NPM_SH_COMMAND;

module.exports = shell;

function shell(command, workingDirectory, onComplete) {
    console.log('--------- shellSync ------->', command);
    var commands = command.indexOf(COMMAND_DELIMITER) > -1 ? command.split(COMMAND_DELIMITER)
        : [ command ]

    callCommands(commands, workingDirectory, onComplete);
}

function callCommands(commands, workingDirectory, onComplete) {
    var command = commands.shift();
    execute(command, workingDirectory, function() {
        if(commands.length > 0) {
            callCommands(commands, workingDirectory, onComplete)
        }
        else {
            onComplete && onComplete();
        }
    });
}

function execute(command, workingDirectory, onComplete) {
    if (!command) throw 'Command is needed';
    else console.log('--------- execute ------->', command);

    var commandReplace = isWindows ? command : replaceNpm(command);

    var options = workingDirectory ? {cwd: workingDirectory} : {};
    var child = exec(commandReplace, options, function (err, standardOut, standardError) {
        // if(standardOut) console.log(command, 'complete', '\n############ child console', commandReplace ,'############\n',  standardOut);
        // if(standardError) console.warn(command, 'error', '\n############ child error', commandReplace ,'############\n', standardError);

        // Resolve with result of process
        onComplete && onComplete(err, standardOut, standardError);
    });
};

// A little regex to replace the npm command with a bash statement
function replaceNpm(source) {
    return source.replace(/npm /g, npmCommand)
}


//// Tests
//shellSync('npm run test1', '.', function() { console.log('test finished') });
//shellSync('npm install; npm run test1', '.', function() { console.log('test finished') });