var RSVP = require("rsvp");
var rest = require("restler");

getData = function(url) {
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
