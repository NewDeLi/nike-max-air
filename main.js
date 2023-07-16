//toggle burger navigation
function handleClick() {
  const x = document.getElementById("myMenu");
  const y = document.querySelector(".hamburger");

  if (x.className === "menu" || y.className === "hamburger") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "topnav";
    y.className = "hamburger";
  }
}

document.getElementById("burger").addEventListener("click", handleClick);

// set current navigation
const linkContainer = document.getElementById("myMenu");
const links = linkContainer.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    console.log("click");
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//animations hero section
const shoeTop = document.querySelector(".hero .product-images img:first-child");
const shoeBottom = document.querySelector(
  ".hero .product-images img:last-child"
);
const text = document.querySelector(".hero .headline-text");
const nav = document.querySelector("nav");
const bottom = document.querySelector(".hero .bottom");

const slideInShoeTop = () => {
  shoeTop.classList.add("slideIn");
};

const slideInShoeBottom = () => {
  shoeBottom.classList.add("slideIn");
};

const slideInText = () => {
  text.classList.add("slideIn");
};

const fadeInNav = () => {
  nav.classList.add("fadeIn");
};

const fadeInBottom = () => {
  bottom.classList.add("fadeIn");
};

const heroAnimations = () => {
  slideInShoeTop();
  slideInShoeBottom();
  slideInText();
  fadeInNav();
  fadeInBottom();
};

window.onload = heroAnimations;
