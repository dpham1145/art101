/*lab.js - This simple JavaScript/jQuery script gets values from other sites and outputs them on local site.

Requirements: jQuery must be loaded for this script to work.

Author: Damon Pham
Date: 12/3/2023
*/

const ENDPOINT = "https://yesno.wtf/api/";

// Attach an event listener
$("#activate").click(function () {
  // Make an AJAX request
  $.ajax({
    "url": ENDPOINT,
    "dataType": "json",
    "success": function(results){
      console.log(results)
      //in the callback:
      //extract the results
      jokeText= results.answer;
      //add to output div
      $("#output").append("<p>" + jokeText);
    },
    "error": function(){
    }
  });
});

