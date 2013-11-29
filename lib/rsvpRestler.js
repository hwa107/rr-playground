var RSVP = require("rsvp");
var rest = require("restler");

function rsvpRestler() {}

rsvpRestler.prototype.get = function(url) {
    var promise = new RSVP.Promise(function(resolve, reject) {
        rest.get(url).on('complete', function(result) {
            if (result instanceof Error) {
                reject(result.message);
            } else {
                resolve(result);
            }
        });
    });

    return promise;
};

module.exports = function () {
    return new rsvpRestler();
}
