// index.js - purpose and description here
// Author: Damon Pham 
// Date: 10/31/23

// Constants

//Prompt that asks for the user's name.
var userName = window.prompt("What is your name? I want to sort it.");
// Functions

//Sorting Code
function sorter(inputString){
    //The person is asked for a name.
    var userNameWithoutSpaces = inputString.replace(/\s/g, '');

    console.log("userName =", userNameWithoutSpaces);
    //The name is split so that we can later sort it.
    splitstr = userNameWithoutSpaces.split("")

    console.log("splitstr =", splitstr);     
    //The name is then sorted.                           
    var nameSort = splitstr.sort();
    //The new sorted name is returned.
    return nameSort;
}


//Anagram Code provided by ChatGPT

function createProperCaseAnagram(inputName) {
    // Split the input name into words.
    const words = inputName.split(' ');

    // Create an array to store the anagram for each word.
    const anagramWords = [];

    // Process and shuffle each word in the array.
    words.forEach(word => {
        // Convert the word to lowercase to shuffle it easily.
        const lowercaseWord = word.toLowerCase();

        // Convert the lowercase word to an array of characters.
        const wordArray = lowercaseWord.split('');

        // Use the Fisher-Yates shuffle algorithm to shuffle the characters.
        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }

        // Join the shuffled characters back into a string.
        const shuffledWord = wordArray.join('');

        // Capitalize the first letter of each word.
        const capitalizedWord = shuffledWord.charAt(0).toUpperCase() + shuffledWord.slice(1);

        // Add the capitalized word to the array of anagram words.
        anagramWords.push(capitalizedWord);
    });

    // Join the anagram words back into a single string.
    const anagram = anagramWords.join(' ');

    return anagram;
}



// Output. Prints out the input name as a new sorted name.
document.writeln("<p> Here is your name sorted: \n" + sorter(userName)+ "</p>");
document.writeln("Here is your new name shuffled: \n" + "<div class='label'> "+ createProperCaseAnagram(userName) + "</div>");