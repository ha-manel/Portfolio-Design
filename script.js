const hamburger= document.querySelector("#hamburger");
const navBar = document.querySelector("#mobile-navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
})

document.querySelectorAll(".mobile-nav-link").forEach(link => link.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navBar.classList.remove("active");
}))