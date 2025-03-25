// Toggle hamburger menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", () => {
  // Toggle the 'show' class on the navLinks to display or hide the dropdown
  navLinks.classList.toggle("show");
});

// Example event listeners for choice buttons
const choice1Btn = document.getElementById("choice1Btn");
const choice2Btn = document.getElementById("choice2Btn");

choice1Btn.addEventListener("click", () => {
  alert("You chose Choice 1!");
  // Optionally, redirect or load the next scenario:
  // window.location.href = "2050-choice1.html";
});

choice2Btn.addEventListener("click", () => {
  alert("You chose Choice 2!");
  // Optionally, redirect or load the next scenario:
  // window.location.href = "2050-choice2.html";
});
