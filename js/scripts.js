let burgerIcon = document.querySelector("#menu");
let menuList = document.querySelector("#menu-list");
let menuClose = document.querySelector("#close");
let searchIconn = document.querySelector("#searchIcon");
let search = document.querySelector("#searchDisplay");
let searhClose = document.querySelector("#search-close");

burgerIcon.addEventListener("click", () => {
  menuList.style.display = "block";
  console.log("ckic");
});
menuClose.addEventListener("click", () => {
  menuList.style.display = "none";
});

searchIconn.addEventListener("click", () => {
  search.style.display = "block";
  console.log("clicked");
});

searhClose.addEventListener("click", () => {
  search.style.display = "none";
});
