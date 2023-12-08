/*lab.js - This simple JavaScript/jQuery script gets values from other sites and outputs them on local site.

Requirements: jQuery must be loaded for this script to work.

Author: Damon Pham
Date: 12/3/2023
*/

const ENDPOINT = "https://xkcd.com/info.0.json";

// Attach an event listener
$("#get-em").click(function () {
  // Make an AJAX request
  $.ajax({
    url: ENDPOINT,
    dataType: "json",
    success: handleComic,
    error: function (xhr, status, error) {
      console.error("Failed to retrieve XKCD comic.", status, error);
    }
  });
});

// Define the callback function to handle the response
function handleComic(comicObj) {
  console.log(comicObj);
  // Extract the comicObj
  const numText = comicObj.num;
  // Add to the output div
  $("#output").append("<p>Comic Number: " + numText + "</p>");
}