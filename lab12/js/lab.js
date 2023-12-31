/*lab.js - This simple JavaScript/jQuery script gets values from input fields and outputs modified versions.

Requirements: jQuery must be loaded for this script to work.

Author: Damon Pham
Date: 11/21/2023
*/
function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    var house = "";
    if (mod == 0) {
        house = "Gryffindor";
    } else if (mod == 1) {
        house = "Ravenclaw";
    } else if (mod == 2) {
        house = "Slytherin";
    } else if (mod == 3) {
        house = "Hufflepuff";
    }
    return house;
}

function showHouseInfo(imagePath, houseClass) {
    $("#houseImage").remove(); // Remove any existing image
    const imageElement = $("<img id='houseImage' src='" + imagePath + "' alt='House Image'>");
    $("body").append(imageElement);
}

$("#button").click(function () {
    const name = $("#input").val();
    const assign = sortingHat(name);
    $("#output").empty();
    $("#output").append('<div class="text"><p>The Sorting Hat has sorted you into <span class="' + assign.toLowerCase() + '">' + assign + '</span></p></div>');
    
    // Set image based on house
    switch (assign.toLowerCase()) {
        case "gryffindor":
            showHouseInfo("./img/gryffindor.png", "gryffindor");
            break;
        case "ravenclaw":
            showHouseInfo("./img/ravenclaw.png", "ravenclaw");
            break;
        case "slytherin":
            showHouseInfo("./img/slytherin.png", "slytherin");
            break;
        case "hufflepuff":
            showHouseInfo("./img/hufflepuff.png", "hufflepuff");
            break;
        // Add more cases if needed
    }
});



