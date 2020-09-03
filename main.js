"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Handle click on "contact me" button on home
// const homeContactBtn = document.querySelector(".home__button");
// homeContactBtn.addEventListener("click", (event) => {
//   scrollIntoView("#contact");
// });

// Make home slowly fade to transparent as the window scrolls down
const homeContainer = document.querySelector(".home__container");
const homeHeight = homeContainer.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
  // homeContactBtn.style.opacity = 1 - window.scrollY / homeHeight;
});
// homeContactBtn.addEventListener("mouseenter", () => {
//   homeContactBtn.style.opacity = 1;
// });
// homeContactBtn.addEventListener("mouseleave", () => {
//   homeContactBtn.style.opacity = 1 - window.scrollY / homeHeight;
// });

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}


// Books control
const books = document.querySelector(".ok__button");
books.addEventListener("click", (event) => {
  const books = document.getElementById("books");
  const random_number = Math.floor(Math.random() * 3 + 1);
  const picture = "imgs/search/book" + random_number + ".png";
  const books_position = document.getElementsByClassName("books__position")[0];
  const books_img = document.getElementsByClassName("books__img")[0];
  const books_description = document.getElementsByClassName("books__description")[0];

  if (books_img !== undefined || books_description !== undefined) {
    books_position.removeChild(books_img);
    books_position.removeChild(books_description);
  }
  books.style.display = 'block';
  books_position.innerHTML += '<img src="' + picture + '" class="books__img" width="450" /><h3 class="books__description">위치(층): 3층 <br /> 번호: 가C1820 <br /> 발행년도: 2015.02.21 <br /> 저자: 책찾는여우</h3> ';
});