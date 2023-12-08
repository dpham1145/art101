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



openBtn.addEventListener("click", () => {
    model.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    model.classList.remove("open");
});