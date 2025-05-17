document.addEventListener("DOMContentLoaded", () => {
  const exploreButton = document.getElementById("exploreButton");
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("main");
    const loadingImage = document.getElementById("loadingImage");
    const navbar = document.getElementById("navItems");

  exploreButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Show the loading screen
      loadingScreen.style.display = "flex";
      navbar.style.display = "flex";
      navbar.style.gap = "2rem";

    // Apply the jump animation (it's already defined in CSS)

    // After 3-5 seconds (adjust the time as needed), hide the loading screen and show the main content
    setTimeout(() => {
      loadingScreen.style.display = "none";
        mainContent.style.display = "flex"; // Or 'block' depending on your main content's display style
        mainContent.style.flexDirection = "column"; // Ensure the main content is displayed in a column layout
        mainContent.style.transition = "all 1s ease-in-out"; // Smooth transition for the main content
      window.location.href = "#main"; // Optionally scroll to the main content
    }, 1200);
  });
});