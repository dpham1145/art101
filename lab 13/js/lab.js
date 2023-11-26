/*lab.js - This simple JavaScript/jQuery script gets values from input fields and outputs modified versions.

Requirements: jQuery must be loaded for this script to work.

Author: Damon Pham
Date: 11/21/2023
*/

$("#button").click(function () {
    const numrange = $("#input").val();
    const fact1 = $("#factor1").val();
    const fact2 = $("#factor2").val();
    const fact3 = $("#factor3").val();
    const fact4 = $("#factor4").val();
    const word1 = $("#print1").val();
    const word2 = $("#print2").val();
    const word3 = $("#print3").val();
    const word4 = $("#print4").val();

    function fizzbuzzBoom(range) {
        var results = "";
        for (var i = 0; i <= range; i++) {
            if ((i % fact1 == 0) && (i % fact2 == 0) && (i % fact3 == 0) && (i % fact4 == 0)) {
                results += i + "-" + word1 + word2 + word3 + word4 + "</br>";
            } else if ((i % fact1 == 0) && (i % fact2 == 0) && (i % fact3 == 0)) {
                results += i + "-" + word1 + word2 + word3 + "</br>";
            } else if ((i % fact1 == 0) && (i % fact2 == 0)) {
                results += i + "-" + word1 + word2 + "</br>";
            } else if ((i % fact1 == 0) && (i % fact3 == 0) && (i % fact2 != 0)) {
                results += i + "-" + word1 + word3 + "</br>";
            } else if (i % fact1 == 0) {
                results += i + "-" + word1 + "</br>";
            } else if ((i % fact2 == 0) && (i % fact3 == 0)) {
                results += i + "-" + word2 + word3 + "</br>";
            } else if ((i % fact2 == 0) && (i % fact3 == 0) && (i % fact1 != 0)) {
                results += i + "-" + word2 + word3 + "</br>";
            } else if (i % fact2 == 0) {
                results += i + "-" + word2 + "</br>";
            } else if ((i % fact3 == 0) && (i % fact4 == 0) && (i % fact2 != 0)) {
                results += i + "-" + word3 + word4 + "</br>";
            } else if (i % fact3 == 0) {
                results += i + "-" + word3 + "</br>";
            } else if ((i % fact4 == 0) && (i % fact2 != 0) && (i % fact3 != 0)) {
                results += i + "-" + word4 + "</br>";
            } else {
                results += i + "</br>";
            }
        }
        return results;
    }

    $("#output").empty();
    $("#output").append('<div class="text"><p>' + fizzbuzzBoom(numrange) + '</p></div>');
});
