function toggleMenu() {
  //With old html this is the one working.
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

// HAM responsive Menu /  toggle open/close in the small view

// const navHam = document.querySelector('.responsiveBtn');
// const mainNav = document.querySelector('.navigation');

// navHam.addEventListener('click', toggleMenu)

// function toggleMenu() {
//     mainNav.classList.toggle('navigation');
// }

// DISPLAY CURRENT DATE ON FOOTER
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

document.querySelector("#currentdate").innerHTML =
  new Date().toLocaleDateString("en-US", options);

// SHOW BANNER AD ON FRIDAY
const bannerad = document.getElementById("banner");
const newDateObj = new Date();
const today = newDateObj.getDay();

if (today == 5) {
  bannerad.style.display = "block";
}

// ANIMATED MENU BAR
function myFunction(x) {
  x.classList.toggle("change");
}
