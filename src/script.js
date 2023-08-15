document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const barsIcon = toggleButton.querySelector(".fa-bars");
  const xIcon = toggleButton.querySelector(".fa-x");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    barsIcon.classList.toggle("hidden");
    xIcon.classList.toggle("hidden");
  });
});
