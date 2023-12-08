// Function to generate a random page URL
function getRandomPage() {
    // Array of URLs
    var pages = [
        '../project/animals/coyote.html',
        '../project/animals/crow.html',
        '../project/animals/deer.html',
        '../project/animals/koi.html',
        '../project/animals/lizard.html',
        '../project/animals/mountainlion.html',
        '../project/animals/raccoon.html',
        '../project/animals/slug.html',
        '../project/animals/squirrel.html',
        '../project/animals/turkey.html',
        // Add more URLs as needed
    ];

    // Get a random index within the range of the pages array
    var randomIndex = Math.floor(Math.random() * pages.length);

    // Return a random page URL
    return pages[randomIndex];
}



// Function to redirect to a random page
function redirectToRandomPage() {
    var randomPage = getRandomPage();
    window.location.href = randomPage;
}


function getRandomPageAnimal() {
    // Array of URLs
    var pages = [
      '../animals/coyote.html',
      '../animals/crow.html',
      '../animals/deer.html',
      '../animals/koi.html',
      '../animals/lizard.html',
      '../animals/mountainlion.html',
      '../animals/raccoon.html',
      '../animals/slug.html',
      '../animals/squirrel.html',
      '../animals/turkey.html',
      // Add more URLs as needed
    ];
    

    // Get a random index within the range of the pages array
    var randomIndex = Math.floor(Math.random() * pages.length);

    // Return a random page URL
    return pages[randomIndex];
  }

  // Function to redirect to a random page or a specific animal page
function redirectToRandomPageAnimal(animal) {
    if (animal) {
        // If an animal name is provided, go to the specific animal page
        window.location.href = `animals/${animal}.html`; // No need for '../' here
    } else {
        // If no animal name is provided, generate a random page URL
        var randomPage = getRandomPageAnimal();
        window.location.href = randomPage;
    }
}


$(document).ready(function () {
    $(".randomButtonHome").click(function () {
        redirectToRandomPage();
        console.log("Home Test");
    });

    $(".randomButtonAnimal").click(function () {
        redirectToRandomPageAnimal();
        console.log("Animal Test");
    });
});

// Just trying out POP UP 1
function openPopup1() {
    document.getElementById('popup1').style.display = 'block';
}

// Function to close the popup
function closePopup1() {
    document.getElementById('popup1').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn1').addEventListener('click', openPopup1);

//POPUP 2
function openPopup2() {
    document.getElementById('popup2').style.display = 'block';
}

// Function to close the popup
function closePopup2() {
    document.getElementById('popup2').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn2').addEventListener('click', openPopup2);


//POPUP 3
function openPopup3() {
    document.getElementById('popup3').style.display = 'block';
}

// Function to close the popup
function closePopup3() {
    document.getElementById('popup3').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn3').addEventListener('click', openPopup3);

//POPUP 4
function openPopup4() {
    document.getElementById('popup4').style.display = 'block';
}

// Function to close the popup
function closePopup4() {
    document.getElementById('popup4').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn4').addEventListener('click', openPopup4);

//POPUP 5
function openPopup5() {
    document.getElementById('popup5').style.display = 'block';
}

// Function to close the popup
function closePopup5() {
    document.getElementById('popup5').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn5').addEventListener('click', openPopup5);

//POPUP 6
function openPopup6() {
    document.getElementById('popup6').style.display = 'block';
}

// Function to close the popup
function closePopup6() {
    document.getElementById('popup6').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn6').addEventListener('click', openPopup6);

//POPUP 7
function openPopup7() {
    document.getElementById('popup7').style.display = 'block';
}

// Function to close the popup
function closePopup7() {
    document.getElementById('popup7').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn7').addEventListener('click', openPopup7);

//POPUP 8
function openPopup8() {
    document.getElementById('popup8').style.display = 'block';
}

// Function to close the popup
function closePopup8() {
    document.getElementById('popup8').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn8').addEventListener('click', openPopup8);

//POPUP 9
function openPopup9() {
    document.getElementById('popup9').style.display = 'block';
}

// Function to close the popup
function closePopup9() {
    document.getElementById('popup9').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn9').addEventListener('click', openPopup9);

//POPUP 10
function openPopup10() {
    document.getElementById('popup10').style.display = 'block';
}

// Function to close the popup
function closePopup10() {
    document.getElementById('popup10').style.display = 'none';
}

// Event listener for the open button
document.getElementById('openBtn10').addEventListener('click', openPopup10);



openBtn.addEventListener("click", () => {
    model.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    model.classList.remove("open");
});