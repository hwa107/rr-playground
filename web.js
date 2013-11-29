var RSVP = require("./lib/rsvpRestler");

getData("http://hwa2u.com").then(function(value) {
    console.log("Data:\n" + value);
}, function(error) {
    console.log("Error:\n" + error);
});
