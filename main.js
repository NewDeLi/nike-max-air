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
