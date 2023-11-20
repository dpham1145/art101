/*lab.js - This simple JavaScript/jQuery script gets values from input fields and outputs modified versions.

Requirements: jQuery must be loaded for this script to work.

Author: Damon Pham
Date: 11/19/2023
*/

function createProperCaseAnagram(userName) {
    // Split the input name into words.
    const words = userName.split(' ');
    const anagramWords = [];
    words.forEach(word => {
        const lowercaseWord = word.toLowerCase();
        const wordArray = lowercaseWord.split('');
        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        const shuffledWord = wordArray.join('');
        const capitalizedWord = shuffledWord.charAt(0).toUpperCase() + shuffledWord.slice(1);
        anagramWords.push(capitalizedWord);
    });
    const anagram = anagramWords.join(' ');

    return anagram;
}

function sortString(inputString) {
    return inputString.split('').sort((a, b) => a.localeCompare(b)).join('');
}

// click listener for button
$("#submit").click(function(){
    // get values of input fields
    const userName1 = $("#user-name-1").val();
    const userName2 = $("#user-name-2").val();
    const userName3 = $("#user-name-3").val();

    // now let's sort them
    const userNameSorted1 = '<span style="color: blue;">' + sortString(userName1) + '</span>';
    const userNameSorted2 = '<span style="color: blue;">' + sortString(userName2) + '</span>';
    const userNameSorted3 = '<span style="color: blue;">' + sortString(userName3) + '</span>';

    // create new div elements and append to output div
    $("#output").empty(); // Clear existing content
    $("#output").append('<div class="text"><p>' + "Here is the first name sorted alphabetically: " + userNameSorted1 + '<br>' +
        "And here is the anagram: <span style='color: blue;'>" + createProperCaseAnagram(userName1) + '</span></p></div>');

    $("#output").append('<div class="text"><p>' + "Here is the second name sorted alphabetically: " + userNameSorted2 + '<br>' +
        "And here is the anagram: <span style='color: blue;'>" + createProperCaseAnagram(userName2) + '</span></p></div>');

    $("#output").append('<div class="text"><p>' + "Here is the third name sorted alphabetically: " + userNameSorted3 + '<br>' +
        "And here is the anagram: <span style='color: blue;'>" + createProperCaseAnagram(userName3) + '</span></p></div>');
});

