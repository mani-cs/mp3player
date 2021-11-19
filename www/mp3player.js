var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'mp3player', 'coolMethod', [arg0]);
};

exports.add = function(arg0, success, error) {
    exec(success, error, 'mp3player', 'add', [arg0]);
}