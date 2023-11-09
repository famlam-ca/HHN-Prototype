const sideBar = document.querySelector("aside");
const sidebarBtn = document.querySelector("#sidebar-btn");
const closeBtn = document.querySelector("#close-btn");

sidebarBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});
