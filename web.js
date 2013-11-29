var rsvpRestler = require("./lib/rsvpRestler");
var rr = new rsvpRestler();

rr.get("http://hwa2u.com").then(function(value) {
    console.log("Data:\n" + value);
}, function(error) {
    console.log("Error:\n" + error);
});
