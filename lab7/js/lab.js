// index.js - purpose and description here
// Author: Damon Pham 
// Date: 10/31/23

// Constants

// Functions
function sorter(){
    //The person is asked for a name.
    var userName = window.prompt("What is your name? I want to sort it.");
    console.log("userName =", userName);
    //The name is split so that we can later sort it.
    splitstr = userName.split("")
    console.log("splitstr =", splitstr);     
    //The name is then sorted.                           
    var nameSort = splitstr.sort();
    //The new sorted name is returned.
    return nameSort;
}
// Output. Prints out the input name as a new sorted name.
document.writeln("Here is your name sorted: " + sorter());