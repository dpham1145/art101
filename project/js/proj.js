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

  $(document).ready(function () {
    $("#randomButton").click(redirectToRandomPage);
  });





//   Just trying out Pop up 
  const openBtn = document.getElementById("openModel");
  const closeBtn = document.getElementById("closeModel");
  const model = document.getElementById("model")

  openBtn.addEventListener("click", () => {
    model.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    model.classList.remove("open");
  });x  