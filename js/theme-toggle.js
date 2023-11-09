const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme-variables");

  themeToggle.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggle.querySelector("span:nth-child(2)").classList.toggle("active");
});
