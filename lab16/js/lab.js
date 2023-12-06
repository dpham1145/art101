/*lab.js - This simple JavaScript/jQuery script gets values from other sites and outputs them on local site.

Requirements: jQuery must be loaded for this script to work.

Author: Damon Pham
Date: 12/5/2023
*/

console.log("JS Loaded");

ENDPOINT = "https://api.nasa.gov/planetary/apod";
const APIKEY="5suoGBf3cGeQm1BUhD9AadF19TqpcMjlmfR9QWRX";
// add button event listener
$("#get-em").click(function(){
    console.log("Click");
	// construct ajax object
	const ajaxParams = {
	  url: ENDPOINT,
	  data: {api_key: APIKEY},
	  type: "GET",
	  dataType: "json",
    success: ajaxSuccess,
    error: ajaxError
	}
    
    $.ajax(ajaxParams);
})

function ajaxSuccess(data){
	  console.log("Here's what I got:", data);
      const title = data.title;
      const desc = data.explanation;
      const imageURL = data.url;
      $("#output").append("<h2>" + title);
      $("#output").append("<img src= '" + imageURL + "' style='max-width: 100%;'/>");
      $("#output").append("<p>" + desc + "</p>")
}

function ajaxError(){
  console.log("Failed");
}