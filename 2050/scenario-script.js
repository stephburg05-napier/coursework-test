// Toggle hamburger menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", () => {
  // Toggle the 'show' class on the navLinks to display or hide the dropdown
  navLinks.classList.toggle("show");
});

// 1) Retrieve and display the last clicked decision
function retrieveLastDecision() {
  const lastDecision = localStorage.getItem('lastDecision');
  if (lastDecision) {
    document.querySelector('.previous-choice').textContent = `Previous Choice: ${lastDecision}`;
  }
}

// 2) Attach event listeners for the choice buttons
const choice1Btn = document.getElementById("choice1Btn");
const choice2Btn = document.getElementById("choice2Btn");

choice1Btn.addEventListener("click", () => {
  alert("You chose Choice 1!");
  // (Optional) Store this new decision in localStorage
  localStorage.setItem('lastDecision', 'Choice 1 (Accepted VR Offer)');
  // window.location.href = "2050-choice1.html"; // if you have a follow-up page
});

choice2Btn.addEventListener("click", () => {
  alert("You chose Choice 2!");
  // (Optional) Store this new decision in localStorage
  localStorage.setItem('lastDecision', 'Choice 2 (Joined The Nomads)');
  // window.location.href = "2050-choice2.html"; // if you have a follow-up page
});

// 3) Option A: Call retrieveLastDecision() once the DOM is loaded
document.addEventListener('DOMContentLoaded', retrieveLastDecision);
