/*lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page.

Requirements: jQuery must be loaded for this script to work.

Author: Damon Pham
Date: 11/12/2023
*/

//add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problem").append("<button id='button-pro'>Make Special</button>");
$("#result").append("<button id='button-res'>Make Special</button>");


// add a click listener to the challenge button


$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");

});

$("#button-pro").click(function(){
    // now add (or subtract) the "special2" class to the section
    $("#problem").toggleClass("special2")

});

$("#button-res").click(function(){
    // now add (or subtract) the "special3" class to the section
    $("#result").toggleClass("special3")

})

