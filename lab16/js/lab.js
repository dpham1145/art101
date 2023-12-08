/*lab.js - This simple JavaScript/jQuery script gets values from other sites and outputs them on local site.

Requirements: jQuery must be loaded for this script to work.

Author: Damon Pham
Date: 12/5/2023
*/

// Define the XKCD API endpoint

$.ajax({
  // Use another CORS proxy to bypass CORS restrictions
  url: "https://api.allorigins.win/get?url=https://xkcd.com/info.0.json",
  type: "GET",
  dataType: "json",
  success: function(response) {
      // Parse the JSON from the response body
      const comicObj = JSON.parse(response.contents);

      // Process and add data to the output div
      $("#output").append("<h2>" + (comicObj.title || 'Title not available') + "</h2>");

      // Check if img property exists
      if (comicObj.img) {
          $("#output").append("<img src='" + comicObj.img + "' alt='" + (comicObj.alt || '') + "' title='" + (comicObj.alt || '') + "'>");
      } else {
          $("#output").append("<p>Image not available</p>");
      }
  },
  error: function(jqXHR, textStatus, errorThrown) {
      // Handle errors
      console.log("Error:", textStatus, errorThrown);
  }
});