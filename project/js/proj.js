
// Function to open a random popup
function openRandomPopup() {
    // Array of popup IDs
    var popups = [
        'popup1', 'popup2', 'popup3', 'popup4', 'popup5',
        'popup6', 'popup7', 'popup8', 'popup9', 'popup10'
    ];

    // Get a random index within the range of the popups array
    var randomIndex = Math.floor(Math.random() * popups.length);

    // Get the ID of the random popup
    var randomPopupId = popups[randomIndex];

    // Open the random popup
    document.getElementById(randomPopupId).style.display = 'block';
}

// Function to close all popups
function closeAllPopups() {
    for (var i = 1; i <= 10; i++) {
        var popupId = 'popup' + i;
        document.getElementById(popupId).style.display = 'none';
    }
}

$(document).ready(function () {
    // Attach an event listener to the randomButtonHome
    $(".randomButtonHome").click(function () {
        // Close all popups
        closeAllPopups();
        // Open a random popup
        openRandomPopup();
        console.log("Home Test");
    });
});

// Function to show a specific tab and hide others
    // Variable to store the currently open tab
    var currentTab = null;

    // JavaScript function to toggle tab content visibility
    function openTab(tabName) {
        var tabContent = document.getElementById(tabName);

        // Close the current tab if it's different from the clicked tab
        if (currentTab && currentTab !== tabContent) {
            currentTab.style.display = 'none';
        }

        // Toggle the visibility of the clicked tab
        tabContent.style.display = (tabContent.style.display === 'block') ? 'none' : 'block';

        // Update the currentTab variable
        currentTab = tabContent;
    }

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

// Function to open a specific popup
function openPopup(popupId) {
    // Close any open popups
    closeAllPopups();

    // Open the selected popup
    document.getElementById(popupId).style.display = "block";
}

// Function to close all popups
function closeAllPopups() {
    // Get all elements with the class name "popup"
    var popups = document.getElementsByClassName("popup");

    // Iterate through all popups and hide them
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
}
