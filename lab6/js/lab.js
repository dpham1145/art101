// index.js - purpose and description here
// Author: Damon Pham 
// Date: 10/29/23

// Constants

// Functions
var myTransport = ["legs", "car", "bus"]

var myMainRide = {
    make: "honda",
    model: "accord",
    color: "white",
    year: 2020,
    ownIt: true,
}

//output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");

