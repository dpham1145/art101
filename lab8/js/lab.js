// index.js - purpose and description here
// Author: Damon Pham
// Date: 11/6/2023


var numbers = [1,24,58,72]

function add10(x){
    var sum = x+10;
    return sum;
}

console.log("Here is the original array: " + numbers);

var addresult = numbers.map(add10);
console.log("All numbers added by 10: " + addresult);

var sqrt = numbers.map(function(x){
return x ** 0.5
});
console.log("All numbers square rooted: " + sqrt);

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = "<p> Original Array: [" + numbers + "]</p>" + "<p>Add 10: [" + addresult + "]</p>"
+ "<p>Square Root: [" + sqrt + "]</p>";
